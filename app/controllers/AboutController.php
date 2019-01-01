<?php
namespace Ebmt\Controllers ;

class AboutController extends ControllerBase
{
    public function initialize()
    {
        $this->view->setTemplateAfter('main');
        Phalcon\Tag::setTitle('Tentang Sistem Informasi Penerima Manfaat');
        parent::initialize();
    }

    public function indexAction()
    {
    }
}
