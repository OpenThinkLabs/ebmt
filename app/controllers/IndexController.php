<?php
namespace Ebmt\Controllers ;

use Phalcon\Tag;

class IndexController extends ControllerBase
{
    public function indexAction()
    {
    	return $this->response->redirect('js/apps/ebmt/index.html',false);
    }
}
