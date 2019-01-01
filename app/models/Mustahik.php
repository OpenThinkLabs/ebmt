<?php
namespace Ebmt\Models ;

use Phalcon\Mvc\Model\Validator\Email as Email;
use Ebmt\Library\Utilities as Utilities;
use Phalcon\Mvc\Model\Behavior\SoftDelete;

class Mustahik extends ModelBase
{

    /**
     *
     * @var string
     */
    public $kode_mustahik;

    /**
     *
     * @var string
     */
    public $no_ktp;

    /**
     *
     * @var string
     */
    public $no_kk;

    /**
     *
     * @var string
     */
    public $nama_kk;

    /**
     *
     * @var string
     */
    public $nama_pemohon;
    
    /**
     *
     * @var string
     */
    public $foto_pemohon;    

    /**
     *
     * @var string
     */
    public $jenis_kelamin;

    /**
     *
     * @var string
     */
    public $jalan;

    /**
     *
     * @var integer
     */
    public $kd_kelurahan_desa;

    /**
     *
     * @var string
     */
    public $kelurahan_desa;

    /**
     *
     * @var integer
     */
    public $kd_kecamatan;

    /**
     *
     * @var string
     */
    public $kecamatan;

    /**
     *
     * @var integer
     */
    public $kd_kotamadya_kabupaten;

    /**
     *
     * @var string
     */
    public $kotamadya_kabupaten;

    /**
     *
     * @var integer
     */
    public $kd_propinsi;

    /**
     *
     * @var string
     */
    public $propinsi;

    /**
     *
     * @var integer
     */
    public $kd_negara;

    /**
     *
     * @var integer
     */
    public $kodepos;

    /**
     *
     * @var string
     */
    public $kode_area_telepon;

    /**
     *
     * @var string
     */
    public $telepon_rumah;

    /**
     *
     * @var string
     */
    public $handphone;

    /**
     *
     * @var string
     */
    public $email;

    /**
     *
     * @var string
     */
    public $keterangan;
    
    /**
     *
     * @var boolean
     */
    public $deleted;    
    
    //sementara
    
    public $tanggal_daftar ;
    
    public function initialize()
    {
    	$this->hasMany("kode_mustahik", "AjuanMustahik", "kode_mustahik");
    	$this->belongsTo("id_perihal", "MPerihal", "id");
    	$this->belongsTo("id_karakter_program", "MKarakterProgram", "id");
    	$this->belongsTo("id_asnaf", "MAsnaf", "id");
    	$this->belongsTo("id_penilaian", "MPenilaian", "id");
    	$this->belongsTo("id_mekanisme_bantuan", "MMekanismeBantuan", "id");
    	$this->belongsTo("id_sumber_dana", "MSumberDana", "id");
    	
    	$this->addBehavior(new SoftDelete([
    			'field' => 'deleted',
    			'value' => '1'
    			]));    	
    }    

    /**
     * 
     * @param integer $tahun
     * @param string $jenis_mustahik 01 untuk individu, 02 untuk lembaga, 03 untuk program
     * @return string
     */
    public function getNextKodeMustahik($tahun="", $jenis_mustahik="") {
    	$phql      = " SELECT MAX(SUBSTRING(kode_mustahik,-7)) AS max_kode_mustahik FROM Ebmt\Models\Mustahik 
    			       WHERE SUBSTRING(kode_mustahik,1,4) = :tahun: " ;
    	$mustahiks = $this->getModelsManager()->executeQuery($phql, array('tahun'=>$tahun));

    	$max = "0000001" ;
    	foreach ($mustahiks as $mustahik) {
    		$max  = $mustahik->max_kode_mustahik ; 
    		$next = Utilities::increment($max);
    	}
    	
    	return $tahun."-".$jenis_mustahik."-".$next ; 
    }
    
    public function getHistoriAjuan($kode_mustahik="") {
    	$ajuans =  $this->getModelsManager()->createBuilder()
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
            		   Ebmt\Models\MustahikAjuan.tgl_masuk AS tgl_masuk,
            		   Ebmt\Models\MustahikAjuan.tgl_disetujui AS tgl_disetujui,
            		   Ebmt\Models\MustahikAjuan.tgl_proses_keuangan,
            		   Ebmt\Models\MustahikAjuan.tgl_pengambilan_transfer_dana,
            		   Ebmt\Models\MustahikAjuan.jml_penerima_manfaat,
            		   Ebmt\Models\MustahikAjuan.catatan AS catatan,
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
    	            		   ->andWhere("Ebmt\Models\MustahikAjuan.kode_mustahik = :kode_mustahik:",array("kode_mustahik"=>$kode_mustahik))->orderBy('Ebmt\Models\Mustahik.tgl_masuk')->getQuery()->execute();
    	
    	$data = array();
    	foreach($ajuans as $ajuan){
    		$data[] = array("tgl_masuk"=>date('d-m-Y',strtotime($ajuan->tgl_masuk)),"catatan"=>$ajuan->catatan,
    		                "karakter_program"=>$ajuan->karakter_program,
    		                "asnaf"=>$ajuan->asnaf,
    		                "tgl_disetujui"=>date('d-m-Y',strtotime($ajuan->tgl_disetujui)),
    		                "nilai_bantuan_usulan"=>number_format($ajuan->nilai_bantuan_usulan,0,",","."),
    		                "nilai_bantuan_disetujui"=>number_format($ajuan->nilai_bantuan_disetujui,0,",","."));
    	}
    	
    	return $data;
    }
    

    /**
     * Validations and business logic
     */
    public function validation()
    {/**
        $this->validate(
            new Email(
                array(
                    'field'    => 'email',
                    'required' => true,
                )
            )
        );
        if ($this->validationHasFailed() == true) {
            return false;
        }**/
    }

    /**
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'kode_mustahik' => 'kode_mustahik', 
            'no_ktp' => 'no_ktp', 
            'no_kk' => 'no_kk', 
            'nama_kk' => 'nama_kk', 
            'nama_pemohon' => 'nama_pemohon', 
        	'foto_pemohon' => 'foto_pemohon',
            'jenis_kelamin' => 'jenis_kelamin', 
            'jalan' => 'jalan', 
            'kd_kelurahan_desa' => 'kd_kelurahan_desa', 
            'kelurahan_desa' => 'kelurahan_desa', 
            'kd_kecamatan' => 'kd_kecamatan', 
            'kecamatan' => 'kecamatan', 
            'kd_kotamadya_kabupaten' => 'kd_kotamadya_kabupaten', 
            'kotamadya_kabupaten' => 'kotamadya_kabupaten', 
            'kd_propinsi' => 'kd_propinsi', 
            'propinsi' => 'propinsi', 
            'kd_negara' => 'kd_negara', 
            'kodepos' => 'kodepos', 
            'kode_area_telepon' => 'kode_area_telepon', 
            'telepon_rumah' => 'telepon_rumah', 
            'handphone' => 'handphone', 
            'email' => 'email', 
            'keterangan' => 'keterangan',
        	//sementara
        	'perihal' => 'perihal',
        	'via' => 'via', 
        	'tempat_tujuan' => 'tempat_tujuan',
        	'rekomendasi' => 'rekomendasi', 
        	'rencana' => 'rencana', 
        	'realisasi' => 'realisasi',
        	'tanggal_daftar'=> 'tanggal_daftar',
        	'deleted' => 'deleted'
        );
    }

}
