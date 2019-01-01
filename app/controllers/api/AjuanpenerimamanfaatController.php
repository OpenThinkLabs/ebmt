<?php

namespace Ebmt\Controllers\Api;

use Phalcon\Paginator\Adapter\QueryBuilder as QueryBuilder; 
use Phalcon\Http\Request as Request ;
use Ebmt\Models\MustahikAjuan as MustahikAjuan ;
use Ebmt\Models\MKarakterProgram as MKarakterProgram ;
use Ebmt\Models\MAsnaf as MAsnaf ;
use Ebmt\Library\Utilities as Utilities;


class AjuanPenerimamanfaatController extends ControllerBase
{

    /**
     * Index action
     */
    public function indexAction()
    {
        $this->persistent->parameters = null;
        
        $act           = $this->request->getQuery('act');
        $id            = $this->request->getQuery('id');
        $limit         = $this->request->getQuery('limit',null,20); 
        $page          = $this->request->getQuery('page',null,1);
        $start         = $this->request->getQuery('start');
        $kode_mustahik = $this->request->getPost('kode_mustahik')!=""?$this->request->getPost('kode_mustahik'):$this->request->getQuery('kode_mustahik');
        $filter        = json_decode($this->request->getQuery('filter'));
        
        switch ($act) {
        	case "upload_foto":
        		if ($this->request->hasFiles() == true) {
        			        			
        			foreach ($this->request->getUploadedFiles() as $file) {        				
        				$mustahik = Mustahik::findFirst('kode_mustahik=' . $kode_mustahik);

        				$file->moveTo('files/foto_pemohon/' . $file->getName());
        				
        				$mustahik->foto_pemohon = $file->getName() ; 
        				
        				if(!$mustahik->update()) {
        					print_r($mustahik->getMessages());
        					return "{success: false}";
        					exit;
        				}        				
        			}
        		}
        		$this->setJsonResponse() ;
        		return "{success: true}";
        		return ; 
        		break;
        	case "get_by_id":
        		$this->setJsonResponse() ;
        		
        		$builder = $this->modelsManager->createBuilder()
        		->columns('
            		   Ebmt\Models\MustahikAjuan.id,
            		   Ebmt\Models\MustahikAjuan.kode_mustahik,
            		   Ebmt\Models\MustahikAjuan.id_perihal,
            		   Ebmt\Models\MustahikAjuan.id_karakter_program,
            		   Ebmt\Models\MustahikAjuan.id_asnaf,
            		   Ebmt\Models\MustahikAjuan.id_penilaian,
            		   Ebmt\Models\MustahikAjuan.id_mekanisme_bantuan,
            		   Ebmt\Models\MustahikAjuan.id_sumber_dana,
            		   Ebmt\Models\MustahikAjuan.nilai_bantuan_usulan AS nilai_bantuan_usulan,
            		   Ebmt\Models\MustahikAjuan.nilai_bantuan_disetujui AS nilai_bantuan_disetujui,
            		   Ebmt\Models\MustahikAjuan.tgl_masuk,
            		   Ebmt\Models\MustahikAjuan.tgl_disetujui,
            		   Ebmt\Models\MustahikAjuan.tgl_proses_keuangan,
            		   Ebmt\Models\MustahikAjuan.tgl_pengambilan_transfer_dana,
            		   Ebmt\Models\MustahikAjuan.jml_penerima_manfaat,
            		   Ebmt\Models\MustahikAjuan.catatan,
            		   Ebmt\Models\Mustahik.nama_pemohon AS nama_pemohon,
            		   Ebmt\Models\MKarakterProgram.karakter_program AS karakter_program,
            		   Ebmt\Models\MAsnaf.asnaf AS asnaf')
        		            		   ->from('Ebmt\Models\MustahikAjuan')
        		            		   ->join('Ebmt\Models\Mustahik')
        		            		   ->join('Ebmt\Models\MKarakterProgram')
        		            		   ->join('Ebmt\Models\MAsnaf')
        		            		   ->where("Ebmt\Models\MustahikAjuan.kode_mustahik=Ebmt\Models\Mustahik.kode_mustahik")
        		            		   ->andWhere("Ebmt\Models\MustahikAjuan.id_karakter_program=Ebmt\Models\MKarakterProgram.id")
        		            		   ->andWhere("Ebmt\Models\MustahikAjuan.id_asnaf=Ebmt\Models\MAsnaf.id")
        		            		   ->andWhere("Ebmt\Models\MustahikAjuan.id = :id:",array("id"=>$id));
        		         		
        		 
        		$builder->orderBy('Ebmt\Models\Mustahik.kode_mustahik');
        		 
        		$paginator = new QueryBuilder(array(
        				"builder" => $builder,
        				"limit"=> $limit,
        				"page" => $page
        		));
        		 
        		$page = $paginator->getPaginate();
        		
        		$mustahik_ajuan_arr          = array();
        		$mustahik_ajuan_arr["total"] = $page->total_items;
        		 
        		foreach($page->items as $item) {
        			$mustahik_ajuan_arr["data"][] = array(
        					"id"=>$item->id,
        					"kode_mustahik"=>$item->kode_mustahik,
        					"_KarakterProgram"=>$item->karakter_program,
        					"_Asnaf"=>$item->asnaf,
        					"id_perihal"=>$item->id_perihal,
        					"id_karakter_program"=>$item->id_karakter_program,
        					"id_asnaf"=>$item->id_asnaf,
        					"id_penilaian"=>$item->id_penilaian,
        					"id_mekanisme_bantuan"=>$item->id_mekanisme_bantuan,
        					"id_sumber_dana"=>$item->id_sumber_dana,
        					"nilai_bantuan_usulan"=>$item->nilai_bantuan_usulan,
        					"nilai_bantuan_disetujui"=>$item->nilai_bantuan_disetujui,
        					"tgl_masuk"=>$item->tgl_masuk,
        					"tgl_disetujui"=>$item->tgl_disetujui,
        					"tgl_proses_keuangan"=>$item->tgl_proses_keuangan,
        					"tgl_pengambilan_transfer_dana"=>$item->tgl_pengambilan_transfer_dana,
        					"jml_penerima_manfaat"=>$item->jml_penerima_manfaat,
        					"catatan"=>$item->catatan
        			) ;
        		}
        		 
        		return $mustahik_ajuan_arr ;        		
        		break;
        }
        
        if($this->request->isPut() == true) {
        	$request_body      = file_get_contents('php://input');
        	$data              = json_decode($request_body);

        	$this->doSaveOrUpdate($data);
            
        } else if($this->request->isPost() == true && $this->request->hasFiles() == false) {
        	$request_body      = file_get_contents('php://input');
        	$data              = json_decode($request_body);
        	
        	$this->doSaveOrUpdate($data);

       } else if($this->request->isDelete() == true) {
         $request_body = file_get_contents('php://input');
         $data         = json_decode($request_body);
         
         $phql = "DELETE FROM Ebmt\Models\MustahikAjuan WHERE id = :kode_mustahik:" ;
         $this->modelsManager->executeQuery($phql,array('kode_mustahik'=>$data->id));
         
       }
        
        $this->setJsonResponse() ;
        	        	
        $builder = $this->modelsManager->createBuilder()
            ->columns('
            		   Ebmt\Models\MustahikAjuan.id,
            		   Ebmt\Models\MustahikAjuan.kode_mustahik,
            		   Ebmt\Models\MustahikAjuan.id_perihal,
            		   Ebmt\Models\MustahikAjuan.id_karakter_program,
            		   Ebmt\Models\MustahikAjuan.id_asnaf,
            		   Ebmt\Models\MustahikAjuan.id_penilaian,
            		   Ebmt\Models\MustahikAjuan.id_mekanisme_bantuan,
            		   Ebmt\Models\MustahikAjuan.id_sumber_dana,
            		   Ebmt\Models\MustahikAjuan.nilai_bantuan_usulan AS nilai_bantuan_usulan,
            		   Ebmt\Models\MustahikAjuan.nilai_bantuan_disetujui AS nilai_bantuan_disetujui,
            		   Ebmt\Models\MustahikAjuan.tgl_masuk,
            		   Ebmt\Models\MustahikAjuan.tgl_disetujui,
            		   Ebmt\Models\MustahikAjuan.tgl_proses_keuangan,
            		   Ebmt\Models\MustahikAjuan.tgl_pengambilan_transfer_dana,
            		   Ebmt\Models\MustahikAjuan.jml_penerima_manfaat,
            		   Ebmt\Models\MustahikAjuan.catatan,            		              		   
            		   Ebmt\Models\Mustahik.nama_pemohon AS nama_pemohon,
            		   Ebmt\Models\MKarakterProgram.karakter_program AS karakter_program,
            		   Ebmt\Models\MAsnaf.asnaf AS asnaf')
        	->from('Ebmt\Models\MustahikAjuan')
        	->join('Ebmt\Models\Mustahik')
        	->join('Ebmt\Models\MKarakterProgram')
        	->join('Ebmt\Models\MAsnaf')
        	->where("Ebmt\Models\MustahikAjuan.kode_mustahik=Ebmt\Models\Mustahik.kode_mustahik") 
            ->andWhere("Ebmt\Models\MustahikAjuan.id_karakter_program=Ebmt\Models\MKarakterProgram.id")
            ->andWhere("Ebmt\Models\MustahikAjuan.id_asnaf=Ebmt\Models\MAsnaf.id")
            ->andWhere("Ebmt\Models\MustahikAjuan.kode_mustahik = :kode_mustahik:",array("kode_mustahik"=>$kode_mustahik));
        	
        	if(is_array($filter)) {
        	   foreach($filter as $key=>$the_data) {
        	   	  $builder->andWhere("LOWER({$the_data->property}) LIKE :{$the_data->property}:", array("{$the_data->property}"=>"%".strtolower($the_data->value)."%"));
        	   }
        	}
        	 
        	
        	$builder->orderBy('Ebmt\Models\MustahikAjuan.tgl_masuk');
        	
        	$paginator = new QueryBuilder(array(
        			"builder" => $builder,
        			"limit"=> $limit,
        			"page" => $page
        	));
        	
        	$page = $paginator->getPaginate();

        	$mustahik_ajuan_arr          = array();
        	$mustahik_ajuan_arr["total"] = $page->total_items; 
        	
        	foreach($page->items as $item) {
        		$mustahik_ajuan_arr["data"][] = array(        				                                    
        				                                 "id"=>$item->id,
        				                                 "kode_mustahik"=>$item->kode_mustahik,
        				                                 "_KarakterProgram"=>$item->karakter_program,
        				                                 "_Asnaf"=>$item->asnaf,        				                                 
        				                                 "id_perihal"=>$item->id_perihal,
        				                                 "id_karakter_program"=>$item->id_karakter_program,
        				                                 "id_asnaf"=>$item->id_asnaf,
        				                                 "id_penilaian"=>$item->id_penilaian,
        				                                 "id_mekanisme_bantuan"=>$item->id_mekanisme_bantuan,
        				                                 "id_sumber_dana"=>$item->id_sumber_dana,
								        				 "nilai_bantuan_usulan"=>$item->nilai_bantuan_usulan,
								        				 "nilai_bantuan_disetujui"=>$item->nilai_bantuan_disetujui,
        				                                 "tgl_masuk"=>$item->tgl_masuk,
        				                                 "tgl_disetujui"=>$item->tgl_disetujui,
        				                                 "tgl_proses_keuangan"=>$item->tgl_proses_keuangan,
        				                                 "tgl_pengambilan_transfer_dana"=>$item->tgl_pengambilan_transfer_dana,
        				                                 "jml_penerima_manfaat"=>$item->jml_penerima_manfaat,
        				                                 "catatan"=>$item->catatan
        		                                         ) ; 
        	}
        	
        	 return $mustahik_ajuan_arr ;
    }
    
    private static function doSaveOrUpdate($data) {
    	$is_update = true ;
    	$ajuan     = false ;
    	
    	if(isset($data->id)) {
    		$ajuan = MustahikAjuan::findFirst("id = {$data->id}");
    	}
    	
    	if(!$ajuan) {
           $ajuan     = new MustahikAjuan();
           $is_update = false ;
    	}
    	
    	if(isset($data->kode_mustahik)){
    	  $ajuan->kode_mustahik = $data->kode_mustahik ;
    	} 
    	
    	if(isset($data->id_perihal)){
    		$ajuan->id_perihal = str_replace("_"," ",$data->id_perihal) ;
    	}    	

    	if(isset($data->id_karakter_program)){
    		$ajuan->id_karakter_program = $data->id_karakter_program ;
    	}
    	 
    	if(isset($data->id_asnaf)) {
    		$ajuan->id_asnaf = $data->id_asnaf ;
    	}
    	 
    	if(isset($data->id_penilaian)) {
    		$ajuan->id_penilaian = $data->id_penilaian ;
    	}
    	 
    	if(isset($data->id_mekanisme_bantuan)) {
    		$ajuan->id_mekanisme_bantuan = $data->id_mekanisme_bantuan ;
    	}
    	 
    	if(isset($data->id_sumber_dana)) {
    		$ajuan->id_sumber_dana = $data->id_sumber_dana ;
    	}
    	 
    	if(isset($data->nilai_bantuan_usulan)){
    		$ajuan->nilai_bantuan_usulan = str_replace("_"," ",$data->nilai_bantuan_usulan) ;
    	}
    	 
    	if(isset($data->nilai_bantuan_disetujui)){
    		$ajuan->nilai_bantuan_disetujui = str_replace("_"," ",$data->nilai_bantuan_disetujui);
    	}
    	 
    	if(isset($data->tgl_masuk)) {
    		$ajuan->tgl_masuk  = date('Y-m-d',strtotime($data->tgl_masuk));
    	}
    	 
    	if(isset($data->tgl_disetujui)) {
    		$ajuan->tgl_disetujui = date('Y-m-d',strtotime($data->tgl_disetujui));
    	}
    	 
    	if(isset($data->tgl_proses_keuangan)) {
    		$ajuan->tgl_proses_keuangan = date('Y-m-d',strtotime($data->tgl_proses_keuangan));
    	}
    	 
    	if(isset($data->tgl_pengambilan_transfer_dana)) {
    		$ajuan->tgl_pengambilan_transfer_dana = date('Y-m-d',strtotime($data->tgl_pengambilan_transfer_dana));
    	}
    	 
    	if(isset($data->jml_penerima_manfaat)) {
    		$ajuan->jml_penerima_manfaat = $data->jml_penerima_manfaat ;
    	}
    	 
    	if(isset($data->catatan)) {
    		$ajuan->catatan = str_replace("_"," ",$data->catatan);
    	}
    	 
    	
    	if($is_update) {
    		if(!$ajuan->update()) {
    			print_r($ajuan->getMessages());
    			exit;
    		}    		
    	} else {
    		if(!$ajuan->save()) {
    			print_r($ajuan->getMessages());
    			exit;
    		}    		
    	}
    }

}

