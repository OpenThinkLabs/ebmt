<?php

namespace Ebmt\Controllers\Api;

use Phalcon\Paginator\Adapter\QueryBuilder as QueryBuilder; 
use Phalcon\Http\Request as Request ;
use Ebmt\Models\MustahikAjuan as MustahikAjuan ;
use Ebmt\Library\Utilities as Utilities;


class WorkflowsController extends ControllerBase
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
            /**        	        	
        	$mustahik = Mustahik::findFirst('kode_mustahik=' . $data->kode_mustahik);
        	
        	if($data->no_ktp) {
        	  $mustahik->no_ktp = $data->no_ktp;
        	}
        	
        	if($data->no_kk) {
        	  $mustahik->no_kk = $data->no_kk;
        	}
        	
        	if($data->nama_kk) {
        	  $mustahik->nama_kk = $data->nama_kk ;
        	}
        	
        	if($data->nama_pemohon) {
        	  $mustahik->nama_pemohon = $data->nama_pemohon ;
        	}
        	
        	if($data->jenis_kelamin) {
        	  $mustahik->jenis_kelamin = $data->jenis_kelamin ;
        	}
        	
        	if($data->jalan) {
        	  $mustahik->jalan = $data->jalan ;
        	}
        	
        	if($data->kd_kelurahan_desa) {
        	  $mustahik->kd_kelurahan_desa = $data->kd_kelurahan_desa ;
        	}
        	if($data->kd_kecamatan) {
        	 $mustahik->kd_kecamatan = $data->kd_kecamatan ;
        	}
        	if($data->kd_kotamadya_kabupaten) {
              $mustahik->kd_kotamadya_kabupaten = $data->kd_kotamadya_kabupaten;
        	}
        	if($data->kd_propinsi) {
              $mustahik->kd_propinsi = $data->kd_propinsi;
        	}
        	
            $mustahik->kd_negara = 1;
            
            if($data->kodepos) {
              $mustahik->kodepos = $data->kodepos ;
            }
            if($data->kode_area_telepon) {
              $mustahik->kode_area_telepon = $data->kode_area_telepon ;
            }
            if($data->telepon_rumah) {
              $mustahik->telepon_rumah = $data->telepon_rumah;
            }
            if($data->handphone) {
              $mustahik->handphone = $data->handphone;
            }
            if($data->email){
              $mustahik->email = $data->email;
            }
            if($data->keterangan) {
              $mustahik->keterangan = $data->keterangan;
            }
            
            if(!$mustahik->update()) {
              print_r($mustahik->getMessages());
              exit;
            }        	
            **/
        } else if($this->request->isPost() == true && $this->request->hasFiles() == false) {
        	$request_body      = file_get_contents('php://input');
        	$data              = json_decode($request_body);
        	$tahun_daftar      = date('Y');
        	$kelompok_mustahik = "01";
        	
        	//nanti pindahkan ke
        	/**
        	$mustahik = new Mustahik();
        	
        	$mustahik->kode_mustahik = $mustahik->getNextKodeMustahik(date('Y'), "02") ;
        	
        	if($data->no_ktp) {
        	  $mustahik->no_ktp = $data->no_ktp ;
        	}
        	
        	if($data->no_kk){
        		$mustahik->no_kk = $data->no_kk ;
        	}
        	
        	if($data->nama_kk) {
        		$mustahik->nama_kk = $data->nama_kk ;
        	}
        	
        	if($data->nama_pemohon) {
        	  $mustahik->nama_pemohon = $data->nama_pemohon ;
        	}
        	
        	if($data->jenis_kelamin) {
        	  $mustahik->jenis_kelamin = $data->jenis_kelamin ;
        	}
        	
        	if($data->jalan) {
        	  $mustahik->jalan = $data->jalan ;
        	}
        	
        	if($data->kd_propinsi){
        	  $mustahik->kd_propinsi = $data->kd_propinsi ;
        	}
        	
        	if($data->kd_kotamadya_kabupaten){
        	  $mustahik->kd_kotamadya_kabupaten = $data->kd_kotamadya_kabupaten;
        	}
        	
        	if($data->kd_kecamatan) {
        	  $mustahik->kd_kecamatan  = $data->kd_kecamatan ;
        	}
        	
        	if($data->kd_kelurahan_desa) {
        	  $mustahik->kd_kelurahan_desa = $data->kd_kelurahan_desa ;
        	}
        	
        	if($data->kodepos) {
        	  $mustahik->kodepos = $data->kodepos ;
        	}
        	
        	if($data->kode_area_telepon){
        	  $mustahik->kode_area_telepon = $data->kode_area_telepon ;
        	}
        	
        	if($data->telepon_rumah) {
        	  $mustahik->telepon_rumah = $data->telepon_rumah ; 
        	}
        	
        	if($data->handphone) {
        	  $mustahik->handphone = $data->handphone ;
        	}
        	
        	if($data->email){
        	  $mustahik->email = $data->email;
        	}             
        	
        	if($data->keterangan) {
        	  $mustahik->keterangan = $data->keterangan;
        	}
        	
        	if(!$mustahik->save()) {
        		print_r($mustahik->getMessages());
        		exit;
        	}  **/      	
       } else if($this->request->isDelete() == true) {
         $request_body = file_get_contents('php://input');
         $data         = json_decode($request_body);
         /**
         $phql = "DELETE FROM Ebmt\Models\Mustahik WHERE kode_mustahik = :kode_mustahik:" ;
         $this->modelsManager->executeQuery($phql,array('kode_mustahik'=>$data->kode_mustahik));
         **/
       }
        
        $this->setJsonResponse() ;
        	        	
        $builder = $this->modelsManager->createBuilder()
            ->columns('Ebmt\Models\MustahikAjuan.kode_mustahik,
            		   Ebmt\Models\MustahikAjuan.tgl_masuk,
            		   Ebmt\Models\MustahikAjuan.catatan,
            		   Ebmt\Models\MustahikAjuan.tgl_disetujui AS tgl_disetujui,
            		   Ebmt\Models\MustahikAjuan.nilai_bantuan_usulan AS nilai_bantuan_usulan,
            		   Ebmt\Models\MustahikAjuan.nilai_bantuan_disetujui AS nilai_bantuan_disetujui,
            		   Ebmt\Models\Mustahik.nama_pemohon AS nama_pemohon,
            		   Ebmt\Models\MKarakterProgram.karakter_program AS karakter_program,
            		   Ebmt\Models\MAsnaf.asnaf AS asnaf')
        	->from('Ebmt\Models\MustahikAjuan')
        	->join('Ebmt\Models\Mustahik')
        	->join('Ebmt\Models\MKarakterProgram')
        	->join('Ebmt\Models\MAsnaf')
        	->where("Ebmt\Models\MustahikAjuan.kode_mustahik=Ebmt\Models\Mustahik.kode_mustahik") 
            ->andWhere("Ebmt\Models\MustahikAjuan.id_karakter_program=Ebmt\Models\MKarakterProgram.id")
            ->andWhere("Ebmt\Models\MustahikAjuan.id_asnaf=Ebmt\Models\MAsnaf.id");
        	
        	if(is_array($filter)) {
        	   foreach($filter as $key=>$the_data) {
        	   	  $builder->andWhere("LOWER({$the_data->property}) LIKE :{$the_data->property}:", array("{$the_data->property}"=>"%".strtolower($the_data->value)."%"));
        	   }
        	}
        	 
        	
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
        				                                 "tgl_masuk"=>$item->tgl_masuk,   
        				                                 "catatan"=>$item->catatan,
        				                                 "_KarakterProgram"=>$item->karakter_program,
        				                                 "_Asnaf"=>$item->asnaf,
        				                                 "tgl_disetujui"=>$item->tgl_disetujui,
        				                                 "nilai_bantuan_usulan"=>$item->nilai_bantuan_usulan,
        				                                 "nilai_bantuan_disetujui"=>$item->nilai_bantuan_disetujui				                              
        		                                         ) ; 
        	}
        	
        	 return $mustahik_ajuan_arr ;
    }

}

