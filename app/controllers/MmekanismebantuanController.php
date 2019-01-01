<?php
namespace Ebmt\Controllers ;

use Phalcon\Mvc\Model\Criteria;
use Phalcon\Paginator\Adapter\Model as Paginator;

class MMekanismeBantuanController extends ControllerBase
{
	public function initialize()
	{
		$this->view->setTemplateAfter('main');
		Phalcon\Tag::setTitle("Karakter Program");
		parent::initialize();
	}
	
    /**
     * Index action
     */
    public function indexAction()
    {
        $this->persistent->parameters = null;
    }

    /**
     * Searches for m_mekanisme_bantuan
     */
    public function searchAction()
    {

        $numberPage = 1;
        if ($this->request->isPost()) {
            $query = Criteria::fromInput($this->di, "MMekanismeBantuan", $_POST);
            $this->persistent->parameters = $query->getParams();
        } else {
            $numberPage = $this->request->getQuery("page", "int");
        }

        $parameters = $this->persistent->parameters;
        if (!is_array($parameters)) {
            $parameters = array();
        }
        $parameters["order"] = "id";

        $m_mekanisme_bantuan = MMekanismeBantuan::find($parameters);
        if (count($m_mekanisme_bantuan) == 0) {
            $this->flash->notice("Pencarian tidak menemukan mekanisme bantuan");

            return $this->dispatcher->forward(array(
                "controller" => "mmekanismebantuan",
                "action" => "index"
            ));
        }

        $paginator = new Paginator(array(
            "data" => $m_mekanisme_bantuan,
            "limit"=> 10,
            "page" => $numberPage
        ));

        $this->view->page = $paginator->getPaginate();
    }

    /**
     * Displayes the creation form
     */
    public function newAction()
    {

    }

    /**
     * Edits a m_mekanisme_bantuan
     *
     * @param string $id
     */
    public function editAction($id)
    {

        if (!$this->request->isPost()) {

            $m_mekanisme_bantuan = MMekanismeBantuan::findFirstByid($id);
            if (!$m_mekanisme_bantuan) {
                $this->flash->error("Mekanisme bantuan tidak ditemukan");

                return $this->dispatcher->forward(array(
                    "controller" => "mmekanismebantuan",
                    "action" => "index"
                ));
            }

            $this->view->id = $m_mekanisme_bantuan->id;

            $this->tag->setDefault("id", $m_mekanisme_bantuan->id);
            $this->tag->setDefault("mekanisme_bantuan", $m_mekanisme_bantuan->mekanisme_bantuan);
            
        }
    }

    /**
     * Creates a new m_mekanisme_bantuan
     */
    public function createAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "mmekanismebantuan",
                "action" => "index"
            ));
        }

        $m_mekanisme_bantuan = new MMekanismeBantuan();

        $m_mekanisme_bantuan->mekanisme_bantuan = $this->request->getPost("mekanisme_bantuan");
        

        if (!$m_mekanisme_bantuan->save()) {
            foreach ($m_mekanisme_bantuan->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mmekanismebantuan",
                "action" => "new"
            ));
        }

        $this->flash->success("Mekanisme bantuan telah berhasil dibuat");

        return $this->dispatcher->forward(array(
            "controller" => "mmekanismebantuan",
            "action" => "index"
        ));

    }

    /**
     * Saves a m_mekanisme_bantuan edited
     *
     */
    public function saveAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "mmekanismebantuan",
                "action" => "index"
            ));
        }

        $id = $this->request->getPost("id");

        $m_mekanisme_bantuan = MMekanismeBantuan::findFirstByid($id);
        if (!$m_mekanisme_bantuan) {
            $this->flash->error("Mekanisme bantuan tidak ada " . $id);

            return $this->dispatcher->forward(array(
                "controller" => "mmekanismebantuan",
                "action" => "index"
            ));
        }

        $m_mekanisme_bantuan->mekanisme_bantuan = $this->request->getPost("mekanisme_bantuan");


        if (!$m_mekanisme_bantuan->save()) {

            foreach ($m_mekanisme_bantuan->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mmekanismebantuan",
                "action" => "edit",
                "params" => array($m_mekanisme_bantuan->getId())
            ));
        }

        $this->flash->success("Mekanisme bantuan telah berhasil diupdate");

        return $this->dispatcher->forward(array(
            "controller" => "mmekanismebantuan",
            "action" => "index"
        ));

    }

    /**
     * Deletes a m_mekanisme_bantuan
     *
     * @param string $id
     */
    public function deleteAction($id)
    {

        $m_mekanisme_bantuan = MMekanismeBantuan::findFirstByid($id);
        if (!$m_mekanisme_bantuan) {
            $this->flash->error("Mekanisme bantuan tidak ditemukan");

            return $this->dispatcher->forward(array(
                "controller" => "mmekanismebantuan",
                "action" => "index"
            ));
        }

        if (!$m_mekanisme_bantuan->delete()) {

            foreach ($m_mekanisme_bantuan->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mmekanismebantuan",
                "action" => "search"
            ));
        }

        $this->flash->success("Mekanisme bantuan telah berhasil dihapus");

        return $this->dispatcher->forward(array(
            "controller" => "mmekanismebantuan",
            "action" => "index"
        ));
    }

}
