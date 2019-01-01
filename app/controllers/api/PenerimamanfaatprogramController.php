<?php

namespace Ebmt\Controllers\Api;

use Phalcon\Paginator\Adapter\QueryBuilder as QueryBuilder; 
use Phalcon\Http\Request as Request ;
use Ebmt\Models\Mustahik as Mustahik ;
use Ebmt\Models\Lokasi as Lokasi ;
use Ebmt\Library\Utilities as Utilities;


class PenerimamanfaatprogramController extends ControllerBase
{

    /**
     * Index action
     */
    public function indexAction()
    {
        $this->persistent->parameters = null;
        
        $act           = $this->request->getQuery('act');
        $limit         = $this->request->getQuery('limit',null,20); 
        $page          = $this->request->getQuery('page',null,1);
        $start         = $this->request->getQuery('start');
        $kode_mustahik = $this->request->getPost('kode_mustahik');
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
        }
        
        if($this->request->isPut() == true) {
        	$put_data      = array_keys($this->request->getPut());
        	$data          = json_decode($put_data[0]);
        	
        	$this->doSaveOrUpdate($data);
        } else if($this->request->isPost() == true && $this->request->hasFiles() == false) {
        	$request_body      = file_get_contents('php://input');
        	$data              = json_decode($request_body);
        	
        	$this->doSaveOrUpdate($data);        	
       } else if($this->request->isDelete() == true) {
         $request_body = file_get_contents('php://input');
         $data         = json_decode($request_body);
         
         $phql = "DELETE FROM Ebmt\Models\Mustahik WHERE kode_mustahik = :kode_mustahik:" ;
         $this->modelsManager->executeQuery($phql,array('kode_mustahik'=>$data->kode_mustahik));
       }
        
        $this->setJsonResponse() ;
        	        	
        	$builder = $this->modelsManager->createBuilder()
        	->columns('kode_mustahik, no_ktp, 
        			   nama_kk AS deskripsi_program, 
        			   nama_pemohon AS nama_program, foto_pemohon, jenis_kelamin,  
        			   jalan, kd_kelurahan_desa, kelurahan_desa, kd_kecamatan, kecamatan, 
        			   kd_kotamadya_kabupaten, kotamadya_kabupaten, kd_propinsi, propinsi, 
        			   kd_negara,kodepos, kode_area_telepon, telepon_rumah, handphone, email, keterangan')
        	->from('Ebmt\Models\Mustahik') 
        	->where("SUBSTRING(kode_mustahik,6,2) = '03' AND deleted IS NULL") ;
        	
        	if(is_array($filter)) {
        	   foreach($filter as $key=>$the_data) {
        	   	  $builder->andWhere("LOWER({$the_data->property}) LIKE :{$the_data->property}:", array("{$the_data->property}"=>"%".strtolower($the_data->value)."%"));
        	   }
        	}
        	 
        	
        	$builder->orderBy('kode_mustahik');
        	
        	$paginator = new QueryBuilder(array(
        			"builder" => $builder,
        			"limit"=> $limit,
        			"page" => $page
        	));
        	
        	$page = $paginator->getPaginate();

        	$penerima_manfaat_arr          = array();
        	$penerima_manfaat_arr["total"] = $page->total_items; 
        	
        	foreach($page->items as $item) {
                $txt_kelurahan_desa = "";
        		$lokasi             = Lokasi::findFirst("id = '{$item->kd_kelurahan_desa}'");        		
        		if($lokasi) {
        		  $txt_kelurahan_desa = $lokasi->getName();
        		}
        		
        		$txt_kecamatan      = "" ;
        		$lokasi             = Lokasi::findFirst("id = '{$item->kd_kecamatan}'");
        		if($lokasi) {
        			$txt_kecamatan = $lokasi->getName();
        		}

        		$txt_kotamadya_kabupaten = "" ;
        		$lokasi                  = Lokasi::findFirst("id = '{$item->kd_kotamadya_kabupaten}'");
        		if($lokasi) {
        			$txt_kotamadya_kabupaten = $lokasi->getName();
        		}

        		$txt_propinsi = "" ;
        		$lokasi       = Lokasi::findFirst("id = '{$item->kd_propinsi}'");
        		if($lokasi) {
        			$txt_propinsi = $lokasi->getName();
        		}        		
        		
        		$alamat = $txt_kelurahan_desa.",".$txt_kecamatan."<br/>".$txt_kotamadya_kabupaten.",".$txt_kotamadya_kabupaten.",".$txt_propinsi."<br>".$item->kodepos;
        		

        		$m      = new Mustahik(); 
        		$ajuans = $m->getHistoriAjuan($item->kode_mustahik) ;
        		 
        		$penerima_manfaat_arr["data"][] = array(
        				                                 "kode_mustahik"=>$item->kode_mustahik,
        				                                 "nama_program"=>$item->nama_program,
        				                                 "deskripsi_program"=>$item->deskripsi_program,
        				                                 "foto_pemohon"=>$item->foto_pemohon,
        		                                         "no_ktp"=>$item->no_ktp,         				                                          		                                          
        		                                         "jenis_kelamin"=>$item->jenis_kelamin, 
        		                                         "jalan"=>$item->jalan, 
        				                                 "kodepos"=>$item->kodepos,
        				                                 "kode_area_telepon"=>$item->kode_area_telepon,
        				                                 "telepon_rumah"=>$item->telepon_rumah,
        				                                 "handphone"=>$item->handphone,
        				                                 "email"=>$item->email,
        				                                 "kd_propinsi"=>$item->kd_propinsi,
        				                                 "txt_propinsi"=>$txt_propinsi,
        				                                 "kd_kotamadya_kabupaten"=>$item->kd_kotamadya_kabupaten,
        				                                 "txt_kotamadya_kabupaten"=>$txt_kotamadya_kabupaten,
        				                                 "kd_kelurahan_desa"=>$item->kd_kelurahan_desa,
        				                                 "txt_kelurahan_desa"=>$txt_kelurahan_desa,
        				                                 "kd_kecamatan"=>$item->kd_kecamatan,
        				                                 "txt_kecamatan"=>$txt_kecamatan,
        				                                 "alamat"=>$alamat, 
        		                                         "keterangan"=>$item->keterangan,
        				                                 "Ajuans"=>$ajuans
        		                                         ) ; 
        	}
        	
        	 return $penerima_manfaat_arr ;
    }
    
    private static function doSaveOrUpdate($data) {
    	$is_update = true ;
    	
    	if(isset($data->kode_mustahik)) {
    		$mustahik = Mustahik::findFirst("kode_mustahik = '{$data->kode_mustahik}'");
    	}
    	 
    	if(!$mustahik) {
    		$tahun_daftar      = date('Y');
    		$kelompok_mustahik = "03";
    		$is_update         = false ;
    	
    		$mustahik = new Mustahik();
    		$mustahik->kode_mustahik = $mustahik->getNextKodeMustahik(date('Y'), "03") ;
    	}

    	if(isset($data->nama_program)){
    		$mustahik->nama_pemohon = str_replace("_"," ",$data->nama_program) ;
    	}
    	
    	if(isset($data->deskripsi_program)) {
    		$mustahik->nama_kk = str_replace("_"," ",$data->deskripsi_program) ;
    	}
    	
    	
    	if(isset($data->jalan)) {
    		$mustahik->jalan = str_replace("_"," ",$data->jalan) ;
    	}
    	
    	if(isset($data->kodepos)) {
    		$mustahik->kodepos = str_replace("_"," ",$data->kodepos) ;
    	}    	
    	
    	if(isset($data->kd_propinsi)){
    		$mustahik->kd_propinsi = str_replace("_"," ",$data->kd_propinsi) ;
    	}
    	
    	if(isset($data->kd_kotamadya_kabupaten)){
    		$mustahik->kd_kotamadya_kabupaten = str_replace("_"," ",$data->kd_kotamadya_kabupaten);
    	}
    	
    	if(isset($data->kd_kecamatan)) {
    		$mustahik->kd_kecamatan  = str_replace("_"," ",$data->kd_kecamatan) ;
    	}
    	
    	if(isset($data->kd_kelurahan_desa)) {
    		$mustahik->kd_kelurahan_desa = str_replace("_"," ",$data->kd_kelurahan_desa) ;
    	}
    	

    	
    	if(isset($data->kode_area_telepon)){
    		$mustahik->kode_area_telepon = str_replace("_"," ",$data->kode_area_telepon) ;
    	}
    	
    	if(isset($data->telepon_rumah)) {
    		$mustahik->telepon_rumah = str_replace("_"," ",$data->telepon_rumah) ;
    	}
    	
    	if(isset($data->handphone)) {
    		$mustahik->handphone = str_replace("_"," ",$data->handphone) ;
    	}
    	
    	if(isset($data->email)){
    		$mustahik->email = str_replace("_"," ",$data->email);
    	}
    	
    	if(isset($data->keterangan)) {
    		$mustahik->keterangan = str_replace("_"," ",$data->keterangan);
    	}
    	
    	
    	if($is_update) {
    		if(!$mustahik->update()) {
    			print_r($mustahik->getMessages());
    			exit;
    		}
    	} else {
    		if(!$mustahik->save()) {
    			print_r($mustahik->getMessages());
    			exit;
    		}
    	}    	
    }

}

