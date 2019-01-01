<?php
namespace Ebmt\Models ;

class MustahikAjuan extends  ModelBase
{

    /**
     *
     * @var integer
     */
    public $id;

    /**
     *
     * @var string
     */
    public $kode_mustahik;

    /**
     *
     * @var integer
     */
    public $id_perihal;

    /**
     *
     * @var integer
     */
    public $id_karakter_program;

    /**
     *
     * @var integer
     */
    public $id_asnaf;

    /**
     *
     * @var integer
     */
    public $id_penilaian;

    /**
     *
     * @var integer
     */
    public $id_mekanisme_bantuan;

    /**
     *
     * @var integer
     */
    public $id_sumber_dana;

    /**
     *
     * @var double
     */
    public $nilai_bantuan_usulan;

    /**
     *
     * @var double
     */
    public $nilai_bantuan_disetujui;

    /**
     *
     * @var string
     */
    public $tgl_masuk;

    /**
     *
     * @var string
     */
    public $tgl_disetujui;

    /**
     *
     * @var string
     */
    public $tgl_proses_keuangan;

    /**
     *
     * @var string
     */
    public $tgl_pengambilan_transfer_dana;

    /**
     *
     * @var integer
     */
    public $jml_penerima_manfaat;

    /**
     *
     * @var string
     */
    public $catatan;
    
    public function initialize()
    {
    	$this->belongsTo("kode_mustahik", "Mustahik", "kode_mustahik");
    }
    

    /**
     * Independent Column Mapping.
     */
    public function columnMap()
    {
        return array(
            'id' => 'id', 
            'kode_mustahik' => 'kode_mustahik', 
            'id_perihal' => 'id_perihal', 
            'id_karakter_program' => 'id_karakter_program', 
            'id_asnaf' => 'id_asnaf', 
            'id_penilaian' => 'id_penilaian', 
            'id_mekanisme_bantuan' => 'id_mekanisme_bantuan', 
            'id_sumber_dana' => 'id_sumber_dana', 
            'nilai_bantuan_usulan' => 'nilai_bantuan_usulan', 
            'nilai_bantuan_disetujui' => 'nilai_bantuan_disetujui', 
            'tgl_masuk' => 'tgl_masuk', 
            'tgl_disetujui' => 'tgl_disetujui', 
            'tgl_proses_keuangan' => 'tgl_proses_keuangan', 
            'tgl_pengambilan_transfer_dana' => 'tgl_pengambilan_transfer_dana', 
            'jml_penerima_manfaat' => 'jml_penerima_manfaat', 
            'catatan' => 'catatan'
        );
    }

}
