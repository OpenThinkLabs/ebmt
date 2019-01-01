<?php
namespace Ebmt\Controllers ;

use Phalcon\Mvc\Model\Criteria;
use Phalcon\Paginator\Adapter\Model as Paginator;

class MKarakterProgramController extends ControllerBase
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
     * Searches for m_karakter_program
     */
    public function searchAction()
    {

        $numberPage = 1;
        if ($this->request->isPost()) {
            $query = Criteria::fromInput($this->di, "MKarakterProgram", $_POST);
            $this->persistent->parameters = $query->getParams();
        } else {
            $numberPage = $this->request->getQuery("page", "int");
        }

        $parameters = $this->persistent->parameters;
        if (!is_array($parameters)) {
            $parameters = array();
        }
        $parameters["order"] = "id";

        $m_karakter_program = MKarakterProgram::find($parameters);
        if (count($m_karakter_program) == 0) {
            $this->flash->notice("Tidak ada data karakter program");

            return $this->dispatcher->forward(array(
                "controller" => "mkarakterprogram",
                "action" => "index"
            ));
        }

        $paginator = new Paginator(array(
            "data" => $m_karakter_program,
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
     * Edits a m_karakter_program
     *
     * @param string $id
     */
    public function editAction($id)
    {

        if (!$this->request->isPost()) {

            $m_karakter_program = MKarakterProgram::findFirstByid($id);
            if (!$m_karakter_program) {
                $this->flash->error("m_karakter_program was not found");

                return $this->dispatcher->forward(array(
                    "controller" => "m_karakter_program",
                    "action" => "index"
                ));
            }

            $this->view->id = $m_karakter_program->getId();

            $this->tag->setDefault("id", $m_karakter_program->getId());
            $this->tag->setDefault("karakter_program", $m_karakter_program->getKarakterProgram());
            $this->tag->setDefault("created_at", $m_karakter_program->getCreatedAt());
            $this->tag->setDefault("updated_at", $m_karakter_program->getUpdatedAt());
            
        }
    }

    /**
     * Creates a new m_karakter_program
     */
    public function createAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "mkarakterprogram",
                "action" => "index"
            ));
        }

        $m_karakter_program = new MKarakterProgram();

        $m_karakter_program->karakter_program = $this->request->getPost("karakter_program");        

        if (!$m_karakter_program->save()) {
            foreach ($m_karakter_program->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mkarakterprogram",
                "action" => "new"
            ));
        }

        $this->flash->success("Data Karakter Program telah berhasil disimpan");

        return $this->dispatcher->forward(array(
            "controller" => "mkarakterprogram",
            "action" => "index"
        ));

    }

    /**
     * Saves a m_karakter_program edited
     *
     */
    public function saveAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "mkarakterprogram",
                "action" => "index"
            ));
        }

        $id = $this->request->getPost("id");

        $m_karakter_program = MKarakterProgram::findFirstByid($id);
        if (!$m_karakter_program) {
            $this->flash->error("Karakter Program tidak ada " . $id);

            return $this->dispatcher->forward(array(
                "controller" => "mkarakterprogram",
                "action" => "index"
            ));
        }

        $m_karakter_program->karakter_program = $this->request->getPost("karakter_program");
        

        if (!$m_karakter_program->save()) {

            foreach ($m_karakter_program->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "m_karakter_program",
                "action" => "edit",
                "params" => array($m_karakter_program->id)
            ));
        }

        $this->flash->success("Karakter Program telah berhasil diupdate.");

        return $this->dispatcher->forward(array(
            "controller" => "mkarakterprogram",
            "action" => "index"
        ));

    }

    /**
     * Deletes a m_karakter_program
     *
     * @param string $id
     */
    public function deleteAction($id)
    {

        $m_karakter_program = MKarakterProgram::findFirstByid($id);
        if (!$m_karakter_program) {
            $this->flash->error("Karakter program tidak ditemukan");

            return $this->dispatcher->forward(array(
                "controller" => "mkarakterprogram",
                "action" => "index"
            ));
        }

        if (!$m_karakter_program->delete()) {

            foreach ($m_karakter_program->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mkarakterprogram",
                "action" => "search"
            ));
        }

        $this->flash->success("Karakter program telah berhasil dihapus.");

        return $this->dispatcher->forward(array(
            "controller" => "mkarakterprogram",
            "action" => "index"
        ));
    }

}
