<?php

namespace Ebmt\Controllers\Api;

use Phalcon\Mvc\Controller;
use Phalcon\Tag;
use \Phalcon\Mvc\Dispatcher ;

class ControllerBase extends Controller
{

	protected $_isJsonResponse = false;
	
	protected function initialize()
	{
		Tag::prependTitle('Sistem Informasi Penerima Manfaat | ');
	}
	
	protected function forward($uri){
		$uriParts = explode('/', $uri);
		return $this->dispatcher->forward(
				array(
						'controller' => $uriParts[0],
						'action' => $uriParts[1]
				)
		);
	}
	
	public function setJsonResponse() {
		$this->view->disable();
	
		$this->_isJsonResponse = true;
		$this->response->setContentType('application/json', 'UTF-8');
	}
	
	// After route executed event
	public function afterExecuteRoute(Dispatcher $dispatcher) {
		if ($this->_isJsonResponse) {
			$data = $dispatcher->getReturnedValue();
			if (is_array($data)) {
				$data = json_encode($data);
			}
			 
			$this->response->setContent($data);
			$this->response->send();
		} else {
			$this->view->setViewsDir($this->view->getViewsDir() . 'api/');
		}
	}	
	
}