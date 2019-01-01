<?php
namespace Ebmt\Controllers ;

use Phalcon\Mvc\Model\Criteria;
use Phalcon\Paginator\Adapter\Model as Paginator;

class MPerihalController extends ControllerBase
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
     * Searches for m_perihal
     */
    public function searchAction()
    {

        $numberPage = 1;
        if ($this->request->isPost()) {
            $query = Criteria::fromInput($this->di, "MPerihal", $_POST);
            $this->persistent->parameters = $query->getParams();
        } else {
            $numberPage = $this->request->getQuery("page", "int");
        }

        $parameters = $this->persistent->parameters;
        if (!is_array($parameters)) {
            $parameters = array();
        }
        $parameters["order"] = "id";

        $m_perihal = MPerihal::find($parameters);
        if (count($m_perihal) == 0) {
            $this->flash->notice("Pencarian tidak menemukan perihal");

            return $this->dispatcher->forward(array(
                "controller" => "mperihal",
                "action" => "index"
            ));
        }

        $paginator = new Paginator(array(
            "data" => $m_perihal,
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
     * Edits a m_perihal
     *
     * @param string $id
     */
    public function editAction($id)
    {

        if (!$this->request->isPost()) {

            $m_perihal = MPerihal::findFirstByid($id);
            if (!$m_perihal) {
                $this->flash->error("Perihal tidak ditemukan");

                return $this->dispatcher->forward(array(
                    "controller" => "mperihal",
                    "action" => "index"
                ));
            }

            $this->view->id = $m_perihal->getId();

            $this->tag->setDefault("id", $m_perihal->getId());
            $this->tag->setDefault("perihal", $m_perihal->getPerihal());
            
        }
    }

    /**
     * Creates a new m_perihal
     */
    public function createAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "mperihal",
                "action" => "index"
            ));
        }

        $m_perihal = new MPerihal();

        $m_perihal->perihal = $this->request->getPost("perihal");
        

        if (!$m_perihal->save()) {
            foreach ($m_perihal->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mperihal",
                "action" => "new"
            ));
        }

        $this->flash->success("Perihal telah berhasil dibuat");

        return $this->dispatcher->forward(array(
            "controller" => "mperihal",
            "action" => "index"
        ));

    }

    /**
     * Saves a m_perihal edited
     *
     */
    public function saveAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "mperihal",
                "action" => "index"
            ));
        }

        $id = $this->request->getPost("id");

        $m_perihal = MPerihal::findFirstByid($id);
        if (!$m_perihal) {
            $this->flash->error("Perihal tidak ada" . $id);

            return $this->dispatcher->forward(array(
                "controller" => "mperihal",
                "action" => "index"
            ));
        }

        $m_perihal->perihal = $this->request->getPost("perihal");
        
        if (!$m_perihal->save()) {

            foreach ($m_perihal->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mperihal",
                "action" => "edit",
                "params" => array($m_perihal->getId())
            ));
        }

        $this->flash->success("Perihal telah berhasil diupdate");

        return $this->dispatcher->forward(array(
            "controller" => "mperihal",
            "action" => "index"
        ));

    }

    /**
     * Deletes a m_perihal
     *
     * @param string $id
     */
    public function deleteAction($id)
    {

        $m_perihal = MPerihal::findFirstByid($id);
        if (!$m_perihal) {
            $this->flash->error("Perihal tidak ditemukan");

            return $this->dispatcher->forward(array(
                "controller" => "mperihal",
                "action" => "index"
            ));
        }

        if (!$m_perihal->delete()) {

            foreach ($m_perihal->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mperihal",
                "action" => "search"
            ));
        }

        $this->flash->success("Perihal telah berhasil dihapus");

        return $this->dispatcher->forward(array(
            "controller" => "mperihal",
            "action" => "index"
        ));
    }

}
