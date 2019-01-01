<?php
namespace Ebmt\Controllers ;

use Phalcon\Mvc\Model\Criteria;
use Phalcon\Paginator\Adapter\Model as Paginator;

class MSumberDanaController extends ControllerBase
{
	
	public function initialize()
	{
		$this->view->setTemplateAfter('main');
		Phalcon\Tag::setTitle("Sumber Dana");
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
     * Searches for m_sumber_dana
     */
    public function searchAction()
    {

        $numberPage = 1;
        if ($this->request->isPost()) {
            $query = Criteria::fromInput($this->di, "MSumberDana", $_POST);
            $this->persistent->parameters = $query->getParams();
        } else {
            $numberPage = $this->request->getQuery("page", "int");
        }

        $parameters = $this->persistent->parameters;
        if (!is_array($parameters)) {
            $parameters = array();
        }
        $parameters["order"] = "id";

        $m_sumber_dana = MSumberDana::find($parameters);
        if (count($m_sumber_dana) == 0) {
            $this->flash->notice("Pencarian tidak menemukan sumber dana.");

            return $this->dispatcher->forward(array(
                "controller" => "msumberdana",
                "action" => "index"
            ));
        }

        $paginator = new Paginator(array(
            "data" => $m_sumber_dana,
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
     * Edits a m_sumber_dana
     *
     * @param string $id
     */
    public function editAction($id)
    {

        if (!$this->request->isPost()) {

            $m_sumber_dana = MSumberDana::findFirstByid($id);
            if (!$m_sumber_dana) {
                $this->flash->error("Sumber dana tidak ditemukan.");

                return $this->dispatcher->forward(array(
                    "controller" => "msumberdana",
                    "action" => "index"
                ));
            }

            $this->view->id = $m_sumber_dana->getId();

            $this->tag->setDefault("id", $m_sumber_dana->getId());
            $this->tag->setDefault("sumber_dana", $m_sumber_dana->getSumberDana());
        }
    }

    /**
     * Creates a new m_sumber_dana
     */
    public function createAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "msumberdana",
                "action" => "index"
            ));
        }

        $m_sumber_dana = new MSumberDana();

        $m_sumber_dana->sumber_dana = $this->request->getPost("sumber_dana");
        

        if (!$m_sumber_dana->save()) {
            foreach ($m_sumber_dana->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "msumberdana",
                "action" => "new"
            ));
        }

        $this->flash->success("Sumber dana telah berhasil dibuat");

        return $this->dispatcher->forward(array(
            "controller" => "msumberdana",
            "action" => "index"
        ));

    }

    /**
     * Saves a m_sumber_dana edited
     *
     */
    public function saveAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "msumberdana",
                "action" => "index"
            ));
        }

        $id = $this->request->getPost("id");

        $m_sumber_dana = MSumberDana::findFirstByid($id);
        if (!$m_sumber_dana) {
            $this->flash->error("Sumber dana tidak ada. " . $id);

            return $this->dispatcher->forward(array(
                "controller" => "msumberdana",
                "action" => "index"
            ));
        }

        $m_sumber_dana->sumber_dana = $this->request->getPost("sumber_dana");
        

        if (!$m_sumber_dana->save()) {

            foreach ($m_sumber_dana->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "msumberdana",
                "action" => "edit",
                "params" => array($m_sumber_dana->id)
            ));
        }

        $this->flash->success("Sumber dana telah berhasil diupdate");

        return $this->dispatcher->forward(array(
            "controller" => "msumberdana",
            "action" => "index"
        ));

    }

    /**
     * Deletes a m_sumber_dana
     *
     * @param string $id
     */
    public function deleteAction($id)
    {

        $m_sumber_dana = MSumberDana::findFirstByid($id);
        if (!$m_sumber_dana) {
            $this->flash->error("Sumber dana tidak dapat ditemukan");

            return $this->dispatcher->forward(array(
                "controller" => "msumberdana",
                "action" => "index"
            ));
        }

        if (!$m_sumber_dana->delete()) {

            foreach ($m_sumber_dana->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "msumberdana",
                "action" => "search"
            ));
        }

        $this->flash->success("Sumber dana telah berhasil dihapus");

        return $this->dispatcher->forward(array(
            "controller" => "msumberdana",
            "action" => "index"
        ));
    }

}
