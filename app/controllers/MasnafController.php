<?php
namespace Ebmt\Controllers ;

use Phalcon\Mvc\Model\Criteria;
use Phalcon\Paginator\Adapter\Model as Paginator;

class MAsnafController extends ControllerBase
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
     * Searches for m_asnaf
     */
    public function searchAction()
    {

        $numberPage = 1;
        if ($this->request->isPost()) {
            $query = Criteria::fromInput($this->di, "MAsnaf", $_POST);
            $this->persistent->parameters = $query->getParams();
        } else {
            $numberPage = $this->request->getQuery("page", "int");
        }

        $parameters = $this->persistent->parameters;
        if (!is_array($parameters)) {
            $parameters = array();
        }
        $parameters["order"] = "id";

        $m_asnaf = MAsnaf::find($parameters);
        if (count($m_asnaf) == 0) {
            $this->flash->notice("Pencarian tidak menemukan data Asnaf.");

            return $this->dispatcher->forward(array(
                "controller" => "masnaf",
                "action" => "index"
            ));
        }

        $paginator = new Paginator(array(
            "data" => $m_asnaf,
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
     * Edits a m_asnaf
     *
     * @param string $id
     */
    public function editAction($id)
    {

        if (!$this->request->isPost()) {

            $m_asnaf = MAsnaf::findFirstByid($id);
            if (!$m_asnaf) {
                $this->flash->error("Asnaf tidak ditemukan");

                return $this->dispatcher->forward(array(
                    "controller" => "masnaf",
                    "action" => "index"
                ));
            }

            $this->view->id = $m_asnaf->getId();

            $this->tag->setDefault("id", $m_asnaf->getId());
            $this->tag->setDefault("asnaf", $m_asnaf->getAsnaf());
            $this->tag->setDefault("status", $m_asnaf->getStatus());
            $this->tag->setDefault("created_at", $m_asnaf->getCreatedAt());
            $this->tag->setDefault("updated_at", $m_asnaf->getUpdatedAt());
            
        }
    }

    /**
     * Creates a new m_asnaf
     */
    public function createAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "masnaf",
                "action" => "index"
            ));
        }

        $m_asnaf = new MAsnaf();

        $m_asnaf->asnaf      = $this->request->getPost("asnaf");
        $m_asnaf->status     = $this->request->getPost("status");
        $m_asnaf->created_at = $this->request->getPost("created_at");
        $m_asnaf->updated_at = $this->request->getPost("updated_at");
        

        if (!$m_asnaf->save()) {
            foreach ($m_asnaf->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "masnaf",
                "action" => "new"
            ));
        }

        $this->flash->success("Asnaf telah berhasil disimpan.");

        return $this->dispatcher->forward(array(
            "controller" => "masnaf",
            "action" => "index"
        ));

    }

    /**
     * Saves a m_asnaf edited
     *
     */
    public function saveAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "masnaf",
                "action" => "index"
            ));
        }

        $id = $this->request->getPost("id");

        $m_asnaf = MAsnaf::findFirstByid($id);
        if (!$m_asnaf) {
            $this->flash->error("Asnaf tidak ada " . $id);

            return $this->dispatcher->forward(array(
                "controller" => "masnaf",
                "action" => "index"
            ));
        }

        $m_asnaf->asnaf      = $this->request->getPost("asnaf");
        $m_asnaf->status     = $this->request->getPost("status");        

        if (!$m_asnaf->save()) {

            foreach ($m_asnaf->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "masnaf",
                "action" => "edit",
                "params" => array($m_asnaf->id)
            ));
        }

        $this->flash->success("Asnaf telah berhasil diupdate");

        return $this->dispatcher->forward(array(
            "controller" => "masnaf",
            "action" => "index"
        ));

    }

    /**
     * Deletes a m_asnaf
     *
     * @param string $id
     */
    public function deleteAction($id)
    {

        $m_asnaf = MAsnaf::findFirstByid($id);
        if (!$m_asnaf) {
            $this->flash->error("Asnaf tidak ditemukan.");

            return $this->dispatcher->forward(array(
                "controller" => "masnaf",
                "action" => "index"
            ));
        }

        if (!$m_asnaf->delete()) {

            foreach ($m_asnaf->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "masnaf",
                "action" => "search"
            ));
        }

        $this->flash->success("Asnaf telah berhasil dihapus");

        return $this->dispatcher->forward(array(
            "controller" => "masnaf",
            "action" => "index"
        ));
    }

}
