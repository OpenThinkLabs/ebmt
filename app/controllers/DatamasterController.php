<?php
namespace Ebmt\Controllers ;

class DatamasterController extends ControllerBase
{

	public function initialize()
	{
		$this->view->setTemplateAfter('main');
		Phalcon\Tag::setTitle("Data Master");
		parent::initialize();
	}
	
    public function indexAction()
    {
     
    }

}

