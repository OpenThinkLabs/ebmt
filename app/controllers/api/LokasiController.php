<?php

namespace Ebmt\Controllers\Api;

use Phalcon\Paginator\Adapter\QueryBuilder as QueryBuilder; 
use Phalcon\Http\Request as Request ;
use Doctrine\ORM\Query;
use Gedmo\Translatable\TranslatableListener;

$executionStart = microtime(true);
$memoryStart = memory_get_usage(true);

$em = include __DIR__.'/../../library/bootstrap.php';

class LokasiController extends ControllerBase
{
	
    /**
     * Index action
     */
    public function indexAction()
    {
      global $em ;
      
      $node       = $this->request->getQuery('node');        
      $lokasiRepo = $em->getRepository('Entity\Lokasi');
      $mode       = $this->request->getQuery('mode');
      

      if($node != '' && $node != 'root') {
      	$lokasi = $lokasiRepo->findOneById($node);
      	
      	if(!$lokasi) return ;
      	
      	$level  = $lokasi->getLevel()+1;
		$query = $em
		    ->createQueryBuilder()
		    ->select('node')
		    ->from('Entity\Lokasi', 'node')
		    ->where("node.root = :root_id")
		      ->setParameter('root_id', 1)
		    ->andWhere("node.level = :level")
		      ->setParameter("level",$level)
		    ->andWhere("node.lft > :lft")
		      ->setParameter("lft",$lokasi->getLeft())
		    ->andWhere("node.rgt < :rgt")
		      ->setParameter("rgt",$lokasi->getRight())
		    ->orderBy('node.root, node.lft', 'ASC')
		    ->getQuery();
		
		$options = array('decorate' => false);
		
		$tree = $lokasiRepo->buildTree($query->getArrayResult(), $options);
      	
      	$data = array() ;
      	
      	$data["name"]     = "." ;
      	$data["id"]       = "root" ;
      	$data["leaf"]     = false ;
      	 
      	foreach($tree as $lokasi) {
      		$leaf = true ;
	    	$curr_lokasi = $lokasiRepo->findOneById($lokasi['id']);
	    	if($lokasiRepo->childCount($curr_lokasi) > 0) {
	    		$leaf = false ;
	    	}	    	
      		$data["children"][] = array("id"=>$lokasi["id"],"name"=>$lokasi["name"],"leaf"=>$leaf) ;
      	}      	
      } else {
		$query = $em
		    ->createQueryBuilder()
		    ->select('node')
		    ->from('Entity\Lokasi', 'node')
		    ->where('node.root = 1 and node.level = 1')
		    ->orderBy('node.root, node.lft', 'ASC')
		    ->getQuery();
		
		$options = array('decorate' => false);
		
		$tree = $lokasiRepo->buildTree($query->getArrayResult(), $options);
		
		$data = array() ;
		
		$data["name"]     = "." ;
		$data["id"]       = "root" ;		
		$data["leaf"]     = false ;
	    
	    foreach($tree as $lokasi) {
	    	$leaf = true ;
	    	$curr_lokasi = $lokasiRepo->findOneById($lokasi['id']);
	    	if($lokasiRepo->childCount($curr_lokasi) > 0) {
	    		$leaf = false ;
	    	}	    	
	    	$data["children"][] = array("id"=>$lokasi["id"],"name"=>$lokasi["name"],"leaf"=>$leaf,
	    			                    "lft"=>$lokasi["lft"],"rgt"=>$lokasi["rgt"],
	    	                            "lvl"=>$lokasi["level"]) ;
	    }
      }
      
      switch($mode) {
      	case "combobox":
      		$this->setJsonResponse() ;
      		 
      		foreach($data["children"] as $key=>$value) {
      			$lokasi_arr["data"][] = array("id"=>$value['id'],
      					"name"=>$value['name']);
      		}
      		
      		return $lokasi_arr ;      		
      		break;
      	case "combobox_propinsi":
      		$this->setJsonResponse() ;
      		 
      		foreach($data["children"] as $key=>$value) {
      			$lokasi_arr["data"][] = array("kd_propinsi"=>$value['id'],
      					"nama_propinsi"=>$value['name']);
      		}
      		
      		return $lokasi_arr ;      		
      		break;
      	case "combobox_kotamadya_kabupaten":
      		$this->setJsonResponse() ;
      		 
      		foreach($data["children"] as $key=>$value) {
      			$lokasi_arr["data"][] = array("kd_kotamadya_kabupaten"=>$value['id'],
      					"nama_kotamadya_kabupaten"=>$value['name']);
      		}
      		
      		return $lokasi_arr ;      		
      		break;
      	case "combobox_kecamatan":
      		$this->setJsonResponse() ;
      			 
      		foreach($data["children"] as $key=>$value) {
      				$lokasi_arr["data"][] = array("kd_kecamatan"=>$value['id'],
      						"nama_kecamatan"=>$value['name']);
      		}
      		
      		return $lokasi_arr ;
      	    break;
      	case "combobox_kelurahan_desa":
      	    	$this->setJsonResponse() ;
      	    
      	    	foreach($data["children"] as $key=>$value) {
      	    		$lokasi_arr["data"][] = array("kd_kelurahan_desa"=>$value['id'],
      	    				"nama_kelurahan_desa"=>$value['name']);
      	    	}
      	    
      	    	return $lokasi_arr ;
      	break;      	          		
      	default:
      		echo json_encode($data);
      		break;
      }
    }
}