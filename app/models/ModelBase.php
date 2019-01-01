<?php
namespace Ebmt\Models ;

use Phalcon\Mvc\Model\Behavior\SoftDelete;
use Phalcon\Mvc\Model\Behavior\Timestampable;

class ModelBase extends \Phalcon\Mvc\Model
{
	const DELETED     = 'D';
	const NOT_DELETED = 'N';
	
	public $created_at;
	public $updated_at;
	
	public function initialize()
	{    
		$this->addBehavior(new SoftDelete(
				array(
						'field' => 'status',
						'value' => self::DELETED
				)
		));
		
		$this->addBehavior(new Timestampable(
				array(
						'beforeCreate' => array(
								'field' => 'created_at',
								'format' => 'Y-m-d H:i:s'
						),
						'beforeUpdate' => array(
								'field' => 'updated_at',
								'format' => 'Y-m-d H:i:s'
						),						
				)
		));		
	}	
}