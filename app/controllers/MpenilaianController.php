<?php

namespace Ebmt\Controllers ;
 
use Phalcon\Mvc\Model\Criteria;
use Phalcon\Paginator\Adapter\Model as Paginator;

class MPenilaianController extends ControllerBase
{

	public function initialize()
	{
		$this->view->setTemplateAfter('main');
		Phalcon\Tag::setTitle("Penilaian");
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
     * Searches for m_penilaian
     */
    public function searchAction()
    {

        $numberPage = 1;
        if ($this->request->isPost()) {
            $query = Criteria::fromInput($this->di, "MPenilaian", $_POST);
            $this->persistent->parameters = $query->getParams();
        } else {
            $numberPage = $this->request->getQuery("page", "int");
        }

        $parameters = $this->persistent->parameters;
        if (!is_array($parameters)) {
            $parameters = array();
        }
        $parameters["order"] = "id";

        $m_penilaian = MPenilaian::find($parameters);
        if (count($m_penilaian) == 0) {
            $this->flash->notice("Pencarian tidak menemukan penilaian");

            return $this->dispatcher->forward(array(
                "controller" => "mpenilaian",
                "action" => "index"
            ));
        }

        $paginator = new Paginator(array(
            "data" => $m_penilaian,
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
     * Edits a m_penilaian
     *
     * @param string $id
     */
    public function editAction($id)
    {

        if (!$this->request->isPost()) {

            $m_penilaian = MPenilaian::findFirstByid($id);
            if (!$m_penilaian) {
                $this->flash->error("Penilaian tidak ditemukan");

                return $this->dispatcher->forward(array(
                    "controller" => "mpenilaian",
                    "action" => "index"
                ));
            }

            $this->view->id = $m_penilaian->getId();

            $this->tag->setDefault("id", $m_penilaian->getId());
            $this->tag->setDefault("penilaian", $m_penilaian->getPenilaian());            
        }
    }

    /**
     * Creates a new m_penilaian
     */
    public function createAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "mpenilaian",
                "action" => "index"
            ));
        }

        $m_penilaian = new MPenilaian();

        $m_penilaian->penilaian = $this->request->getPost("penilaian");        

        if (!$m_penilaian->save()) {
            foreach ($m_penilaian->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mpenilaian",
                "action" => "new"
            ));
        }

        $this->flash->success("Penilaian terlah berhasil dibuat");

        return $this->dispatcher->forward(array(
            "controller" => "mpenilaian",
            "action" => "index"
        ));

    }

    /**
     * Saves a m_penilaian edited
     *
     */
    public function saveAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "mpenilaian",
                "action" => "index"
            ));
        }

        $id = $this->request->getPost("id");

        $m_penilaian = MPenilaian::findFirstByid($id);
        if (!$m_penilaian) {
            $this->flash->error("Penilaian tidak ada " . $id);

            return $this->dispatcher->forward(array(
                "controller" => "mpenilaian",
                "action" => "index"
            ));
        }

        $m_penilaian->penilaian = $this->request->getPost("penilaian");        

        if (!$m_penilaian->save()) {

            foreach ($m_penilaian->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mpenilaian",
                "action" => "edit",
                "params" => array($m_penilaian->getId())
            ));
        }

        $this->flash->success("Penilaian telah berhasil diupdate");

        return $this->dispatcher->forward(array(
            "controller" => "mpenilaian",
            "action" => "index"
        ));

    }

    /**
     * Deletes a m_penilaian
     *
     * @param string $id
     */
    public function deleteAction($id)
    {

        $m_penilaian = MPenilaian::findFirstByid($id);
        if (!$m_penilaian) {
            $this->flash->error("Penilaian tidak ditemukan");

            return $this->dispatcher->forward(array(
                "controller" => "mpenilaian",
                "action" => "index"
            ));
        }

        if (!$m_penilaian->delete()) {

            foreach ($m_penilaian->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mpenilaian",
                "action" => "search"
            ));
        }

        $this->flash->success("Penilaian telah berhasil dihapus");

        return $this->dispatcher->forward(array(
            "controller" => "mpenilaian",
            "action" => "index"
        ));
    }

}
