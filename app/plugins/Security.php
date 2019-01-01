<?php

use Phalcon\Events\Event,
	Phalcon\Mvc\User\Plugin,
	Phalcon\Mvc\Dispatcher,
	Phalcon\Acl;

/**
 * Security
 *
 * This is the security plugin which controls that users only have access to the modules they're assigned to
 */
class Security extends Plugin
{

	public function __construct($dependencyInjector)
	{
		$this->_dependencyInjector = $dependencyInjector;
	}

	/**
	 * @TODO Pelajari ini lebih lanjut
	 * http://docs.phalconphp.com/en/latest/reference/acl.html
	 */
	public function getAcl()
	{
		$acl_data = __DIR__ . '/../../app/security/acl.data' ;
		 
		if (!is_file($acl_data)) {

			$acl = new Phalcon\Acl\Adapter\Memory();

			$acl->setDefaultAction(Phalcon\Acl::DENY);

			//Register roles
			$roles = array(
				'users' => new Phalcon\Acl\Role('Users'),
				'guests' => new Phalcon\Acl\Role('Guests')
			);
			foreach ($roles as $role) {
				$acl->addRole($role);
			}

			//Private area resources
			$privateResources = array(
				'mustahik' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
				'datamaster' => array('index'),
				'mkarakterprogram' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
				'masnaf' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
				'msumberdana' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
				'mpenilaian' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
				'mmekanismebantuan' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
				'mperihal' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
			    'PenerimaManfaatIndividu' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
				'PenerimaManfaatLembaga' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
				'PenerimaManfaatProgram' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
				'AjuanPenerimaManfaat' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
			    'Asnaf' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
			    'KarakterProgram' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
			    'MekanismeBantuan' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
			    'Lokasi' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
			    'Penilaian' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
			    'Perihal' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete'),
			    'SumberDana' => array('index', 'search', 'new', 'edit', 'save', 'create', 'delete')
			);
			
			foreach ($privateResources as $resource => $actions) {
				$acl->addResource(new Phalcon\Acl\Resource($resource), $actions);
			}

			//Public area resources
			$publicResources = array(
				'index' => array('index'),
				//'about' => array('index'),
				'session' => array('index', 'register', 'start', 'end'),
				'Security' => array('index', 'login', 'logout'),
				//'contact' => array('index', 'send')
			);
			
			foreach ($publicResources as $resource => $actions) {
				$acl->addResource(new Phalcon\Acl\Resource($resource), $actions);
			}
			
			//Grant access to public areas to both users and guests
			foreach ($roles as $role) {
				foreach ($publicResources as $resource => $actions) {
					$acl->allow($role->getName(), $resource, '*');
				}
			}

			//Grant access to private area to role Users
			foreach ($privateResources as $resource => $actions) {
				foreach ($actions as $action){
					$acl->allow('Users', $resource, $action);
				}
			}

			// Store serialized list into plain file
			file_put_contents($acl_data, serialize($acl));
		} else {
			//Restore acl object from serialized file
			$acl = unserialize(file_get_contents($acl_data));
		} 

		return $acl;
	}

	/**
	 * This action is executed before execute any action in the application
	 */
	public function beforeDispatch(Event $event, Dispatcher $dispatcher)
	{

		$auth = $this->session->get('auth');
		if (!$auth){
			$role = 'Guests';
		} else {
			$role = 'Users';
		}

		$controller = $dispatcher->getControllerName();
		$action     = $dispatcher->getActionName();
        
		$acl = $this->getAcl();
		
		$allowed = $acl->isAllowed($role, $controller, $action);
		
		if ($allowed != Acl::ALLOW) {
			$this->flash->error("Mohon maaf, anda tidak memiliki akses ke modul {$controller}.");
			$dispatcher->forward(
				array(
					'controller' => 'session',
					'action' => 'index'
				)
			);
			return false;
		}

	}

}
