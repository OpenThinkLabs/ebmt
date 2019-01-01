<?php
 
namespace Ebmt\Controllers ;
	
use Phalcon\Tag as Tag;
use Phalcon\Mvc\Model\Criteria;
use Phalcon\Paginator\Adapter\Model as Paginator;

class MustahikController extends ControllerBase
{
	public function initialize()
	{
		$this->view->setTemplateAfter('main');
		Tag::setTitle("Mustahik");
		parent::initialize();
	}
	
    /**
     * Index action
     */
    public function indexAction()
    {
        $this->persistent->parameters = null;
        
        $act    = $this->request->getQuery('act');
        $limit  = $this->request->getQuery('limit',null,20); 
        $page   = $this->request->getQuery('page',null,1);
        $start  = $this->request->getQuery('start');
        $filter = $this->request->getQuery('filter');
        
        if($act == 'get_penerima_manfaat_json') {
        	$this->setJsonResponse() ;
        	        	
        	$builder = $this->modelsManager->createBuilder()
        	->columns('kode_mustahik, no_ktp, no_kk, nama_kk, nama_pemohon, jenis_kelamin, hal, 
        			   jalan, kd_kelurahan_desa, kelurahan_desa, kd_kecamatan, kecamatan, 
        			   kd_kotamadya_kabupaten, kotamadya_kabupaten, kd_propinsi, propinsi, 
        			   kd_negara, kode_area_telepon, telepon_rumah, handphone, email, 
        			   id_karakter_program, perihal, via, tempat_tujuan, rekomendasi, 
        			   rencana, realisasi, keterangan')
        	->from('Mustahik') 
        	->where("1=1") ;
        	
        	if(is_array($filter)) {
        	   foreach($filter as $key=>$filter_data) {
        	   	  $field = $filter_data['field'];
        	   	  $value = $filter_data['data']['value'] ;
        	   	  $builder->andWhere("{$field} LIKE :{$field}:", array("{$field}"=>"%".$value."%"));
        	   }
        	}
        	 
        	
        	$builder->orderBy('kode_mustahik');
        	
        	$paginator = new Phalcon\Paginator\Adapter\QueryBuilder(array(
        			"builder" => $builder,
        			"limit"=> $limit,
        			"page" => $page
        	));
        	
        	$page = $paginator->getPaginate();

        	$penerima_manfaat_arr          = array();
        	$penerima_manfaat_arr["total"] = $page->total_items; 
        	
        	foreach($page->items as $item) {
        		$alamat = $item->kelurahan_desa.",".$item->kecamatan."<br/>".$item->kotamadya_kabupaten.",".$item->kotamadya_kabupaten.",".$item->propinsi;
        		$penerima_manfaat_arr["data"][] = array(
        				                                 "kode_mustahik"=>$item->kode_mustahik,
        		                                         "no_ktp"=>$item->no_ktp, 
        				                                 "no_kk"=>$item->no_kk,
        				                                 "nama_kk"=>$item->nama_kk, 
        		                                         "nama_pemohon"=>$item->nama_pemohon, 
        		                                         "jenis_kelamin"=>$item->jenis_kelamin, 
        		                                         "hal"=>$item->hal,
        		                                         "jalan"=>$item->jalan, 
        				                                 "alamat"=>$alamat, 
        		                                         "perihal"=>$item->perihal, 
        		                                         "via"=>$item->via,"tempat_tujuan"=>$item->tempat_tujuan, 
        		                                         "rekomendasi"=>$item->rekomendasi,"rencana"=>$item->rencana, 
        		                                         "realisasi"=>$item->realisasi, 
        		                                         "keterangan"=>$item->keterangan) ; 
        	}
        	
        	 return $penerima_manfaat_arr ;
        }
    }

    
    
    /**
     * Searches for mustahik
     */
    public function searchAction()
    {

        $numberPage = 1;
        if ($this->request->isPost()) {
            $query = Criteria::fromInput($this->di, "Mustahik", $_POST);
            $this->persistent->parameters = $query->getParams();
        } else {
            $numberPage = $this->request->getQuery("page", "int");
        }

        $parameters = $this->persistent->parameters;
        if (!is_array($parameters)) {
            $parameters = array();
        }
        $parameters["order"] = "kode_mustahik";

        $mustahik = Mustahik::find($parameters);
        if (count($mustahik) == 0) {
            $this->flash->notice("The search did not find any mustahik");

            return $this->dispatcher->forward(array(
                "controller" => "mustahik",
                "action" => "index"
            ));
        }

        $paginator = new Paginator(array(
            "data" => $mustahik,
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
     * Edits a mustahik
     *
     * @param string $kode_mustahik
     */
    public function editAction($kode_mustahik)
    {

        if (!$this->request->isPost()) {

            $mustahik = Mustahik::findFirstBykode_mustahik($kode_mustahik);
            if (!$mustahik) {
                $this->flash->error("mustahik was not found");

                return $this->dispatcher->forward(array(
                    "controller" => "mustahik",
                    "action" => "index"
                ));
            }

            $this->view->kode_mustahik = $mustahik->kode_mustahik;

            $this->tag->setDefault("kode_mustahik", $mustahik->kode_mustahik);
            $this->tag->setDefault("nama_lengkap", $mustahik->nama_lengkap);
            $this->tag->setDefault("hal", $mustahik->hal);
            $this->tag->setDefault("jalan", $mustahik->jalan);
            $this->tag->setDefault("kd_kelurahan_desa", $mustahik->kd_kelurahan_desa);
            $this->tag->setDefault("kd_kecamatan", $mustahik->kd_kecamatan);
            $this->tag->setDefault("kd_kotamadya_kabupaten", $mustahik->kd_kotamadya_kabupaten);
            $this->tag->setDefault("kd_propinsi", $mustahik->kd_propinsi);
            $this->tag->setDefault("kd_negara", $mustahik->kd_negara);
            $this->tag->setDefault("kode_area_telepon", $mustahik->kode_area_telepon);
            $this->tag->setDefault("telepon_rumah", $mustahik->telepon_rumah);
            $this->tag->setDefault("handphone", $mustahik->handphone);
            $this->tag->setDefault("email", $mustahik->email);
            $this->tag->setDefault("id_karakter_program", $mustahik->id_karakter_program);
            
        }
    }

    /**
     * Creates a new mustahik
     */
    public function createAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "mustahik",
                "action" => "index"
            ));
        }

        $mustahik = new Mustahik();

        $mustahik->kode_mustahik = $this->request->getPost("kode_mustahik");
        $mustahik->no_ktp        = $this->request->getPost("no_ktp");
        $mustahik->no_kk         = $this->request->getPost("no_kk");
        $mustahik->nama_lengkap = $this->request->getPost("nama_lengkap");
        $mustahik->hal = $this->request->getPost("hal");
        $mustahik->jalan = $this->request->getPost("jalan");
        $mustahik->kd_kelurahan_desa = $this->request->getPost("kd_kelurahan_desa");
        $mustahik->kd_kecamatan = $this->request->getPost("kd_kecamatan");
        $mustahik->kd_kotamadya_kabupaten = $this->request->getPost("kd_kotamadya_kabupaten");
        $mustahik->kd_propinsi = $this->request->getPost("kd_propinsi");
        $mustahik->kd_negara = $this->request->getPost("kd_negara");
        $mustahik->kode_area_telepon = $this->request->getPost("kode_area_telepon");
        $mustahik->telepon_rumah = $this->request->getPost("telepon_rumah");
        $mustahik->handphone = $this->request->getPost("handphone");
        $mustahik->email = $this->request->getPost("email", "email");
        $mustahik->id_karakter_program = $this->request->getPost("id_karakter_program");
        

        if (!$mustahik->save()) {
            foreach ($mustahik->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mustahik",
                "action" => "new"
            ));
        }

        $this->flash->success("mustahik was created successfully");

        return $this->dispatcher->forward(array(
            "controller" => "mustahik",
            "action" => "index"
        ));

    }

    /**
     * Saves a mustahik edited
     *
     */
    public function saveAction()
    {

        if (!$this->request->isPost()) {
            return $this->dispatcher->forward(array(
                "controller" => "mustahik",
                "action" => "index"
            ));
        }

        $kode_mustahik = $this->request->getPost("kode_mustahik");

        $mustahik = Mustahik::findFirstBykode_mustahik($kode_mustahik);
        if (!$mustahik) {
            $this->flash->error("mustahik does not exist " . $kode_mustahik);

            return $this->dispatcher->forward(array(
                "controller" => "mustahik",
                "action" => "index"
            ));
        }

        $mustahik->kode_mustahik = $this->request->getPost("kode_mustahik");
        $mustahik->no_ktp        = $this->request->getPost("no_ktp");
        $mustahik->no_kk         = $this->request->getPost("no_kk");
        $mustahik->nama_lengkap = $this->request->getPost("nama_lengkap");
        $mustahik->hal = $this->request->getPost("hal");
        $mustahik->jalan = $this->request->getPost("jalan");
        $mustahik->kd_kelurahan_desa = $this->request->getPost("kd_kelurahan_desa");
        $mustahik->kd_kecamatan = $this->request->getPost("kd_kecamatan");
        $mustahik->kd_kotamadya_kabupaten = $this->request->getPost("kd_kotamadya_kabupaten");
        $mustahik->kd_propinsi = $this->request->getPost("kd_propinsi");
        $mustahik->kd_negara = $this->request->getPost("kd_negara");
        $mustahik->kode_area_telepon = $this->request->getPost("kode_area_telepon");
        $mustahik->telepon_rumah = $this->request->getPost("telepon_rumah");
        $mustahik->handphone = $this->request->getPost("handphone");
        $mustahik->email = $this->request->getPost("email", "email");
        $mustahik->id_karakter_program = $this->request->getPost("id_karakter_program");
        

        if (!$mustahik->save()) {

            foreach ($mustahik->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mustahik",
                "action" => "edit",
                "params" => array($mustahik->kode_mustahik)
            ));
        }

        $this->flash->success("mustahik was updated successfully");

        return $this->dispatcher->forward(array(
            "controller" => "mustahik",
            "action" => "index"
        ));

    }

    /**
     * Deletes a mustahik
     *
     * @param string $kode_mustahik
     */
    public function deleteAction($kode_mustahik)
    {

        $mustahik = Mustahik::findFirstBykode_mustahik($kode_mustahik);
        if (!$mustahik) {
            $this->flash->error("mustahik was not found");

            return $this->dispatcher->forward(array(
                "controller" => "mustahik",
                "action" => "index"
            ));
        }

        if (!$mustahik->delete()) {

            foreach ($mustahik->getMessages() as $message) {
                $this->flash->error($message);
            }

            return $this->dispatcher->forward(array(
                "controller" => "mustahik",
                "action" => "search"
            ));
        }

        $this->flash->success("mustahik was deleted successfully");

        return $this->dispatcher->forward(array(
            "controller" => "mustahik",
            "action" => "index"
        ));
    }

}
