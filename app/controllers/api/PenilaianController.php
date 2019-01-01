<?php

namespace Ebmt\Controllers\Api;

use Phalcon\Paginator\Adapter\QueryBuilder as QueryBuilder; 
use Phalcon\Http\Request as Request ;
use Ebmt\Models\MPenilaian as MPenilaian ;

class PenilaianController extends ControllerBase
{

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
        
        if($this->request->isPut() == true) {
        	$put_data      = array_keys($this->request->getPut());
        	$data          = json_decode($put_data[0]);
        	$nama_kk       = $data->nama_kk ;
        	$kode_mustahik = $data->kode_mustahik;
        	$nama_pemohon  = $data->nama_pemohon ;
        	
        	if($nama_kk != '') {
        		$mustahik = Mustahik::findFirst('kode_mustahik=' . (int)$kode_mustahik);
                $mustahik->setNamaKk($nama_kk);
                if(!$mustahik->update()) {
                	print_r($mustahik->getMessages());
                	exit;
                }
        	}
        	
        	if($nama_pemohon != '') {
        		$mustahik = Mustahik::findFirst('kode_mustahik=' . (int)$kode_mustahik);
        		$mustahik->setNamaPemohon($nama_pemohon);
        		if(!$mustahik->update()) {
        			print_r($mustahik->getMessages());
        			exit;
        		}        		
        	}
        } else if($this->request->isPost() == true) {
        	$request_body = file_get_contents('php://input');
        	$data         = json_decode($request_body);
        	
        	$mustahik = new Mustahik();
        	$mustahik->setKodeMustahik($data->kode_mustahik);
        	$mustahik->setNamaKk($data->nama_kk);
        	$mustahik->setNamaPemohon($data->nama_pemohon);
        	$mustahik->setJenisKelamin($data->jenis_kelamin);
        	$mustahik->setHal($data->hal);
        	$mustahik->setJalan($data->jalan);
        	$mustahik->setPerihal($data->perihal);
        	$mustahik->setVia($data->via);
        	$mustahik->setTempatTujuan($data->tempat_tujuan);
        	$mustahik->setRekomendasi($data->rekomendasi);
        	$mustahik->setRencana($data->rencana);
        	$mustahik->setRealisasi($data->realisasi);
        	$mustahik->setKeterangan($data->keterangan);
        	
        	if(!$mustahik->save()) {
        		print_r($mustahik->getMessages());
        		exit;
        	}        	
        }
        
        $this->setJsonResponse() ;
        	        	
        	$builder = $this->modelsManager->createBuilder()
        	->columns('id, penilaian, status')
        	->from('Ebmt\Models\MPenilaian') 
        	->where("1=1") ;
        	
        	if(is_array($filter)) {
        	   foreach($filter as $key=>$filter_data) {
        	   	  $field = $filter_data['field'];
        	   	  $value = $filter_data['data']['value'] ;
        	   	  $builder->andWhere("{$field} LIKE :{$field}:", array("{$field}"=>"%".$value."%"));
        	   }
        	}
        	 
        	
        	$builder->orderBy('id');
        	
        	$paginator = new QueryBuilder(array(
        			"builder" => $builder,
        			"limit"=> $limit,
        			"page" => $page
        	));
        	
        	$page = $paginator->getPaginate();

        	$penilaian_arr          = array();
        	$penilaian_arr["total"] = $page->total_items; 
        	
        	foreach($page->items as $item) {
        		$penilaian_arr["data"][] = array("id"=>$item->id,
        		                                        "penilaian"=>$item->penilaian, 
        				                                "status"=>$item->status) ; 
        	}
        	
        	 return $penilaian_arr ;
    }

}

