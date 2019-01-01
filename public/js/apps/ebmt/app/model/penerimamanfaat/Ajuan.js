Ext.define('ebmt.model.penerimamanfaat.Ajuan', {
    extend: 'ebmt.model.Base',
    idProperty: 'id', 
    fields: [
             {
            	 name: 'id',
            	 type: 'integer',
            	 useNull : true
             },             
             {
            	 name: 'kode_mustahik',
            	 type: 'string'
             },
             {
            	 name: 'id_perihal',
            	 type: 'integer'
             },
             {
            	 name: 'id_karakter_program',
            	 type: 'integer'
             },                          
             {
            	 name: 'id_asnaf',
            	 type: 'integer'
             },                
             {
            	 name: 'id_penilaian',
            	 type: 'integer'
             },                    
             {
            	 name: 'id_mekanisme_bantuan',
            	 type: 'integer'
             },   
             {
            	 name: 'id_sumber_dana',
            	 type: 'integer'
             },                          
             {
            	 name: 'nilai_bantuan_usulan',
            	 type: 'float'
             },
             {
            	 name: 'nilai_bantuan_disetujui',
            	 type: 'float'
             },             
             {
            	 name: 'tgl_masuk',
            	 type: 'date'
             },
             {
            	 name: 'tgl_disetujui',
            	 type: 'date'
             },             
             {
            	 name: 'tgl_proses_keuangan',
            	 type: 'date'
             },                          
             {
            	 name: 'tgl_pengambilan_transfer_dana',
            	 type: 'date'
             },                          
             {
            	 name: 'jml_penerima_manfaat',
            	 type: 'integer'
             },    
             {
            	 name: 'catatan',
            	 type: 'string'
             },                          
             //relational properties
             {
            	 name: 'Perihal',
            	 type: 'auto'
             },
             {
            	 name: 'KarakterProgram',
            	 type: 'auto'
             },             
             {
            	 name: 'Asnaf',
            	 type: 'auto'
             },
             {
            	 name: 'Penilaian',
            	 type: 'auto'
             },
             {
            	 name: 'MekanismeBantuan',
            	 type: 'auto'
             },             
             {
            	 name: 'SumberBantuan',
            	 type: 'auto'
             },
             //decorated properties
             {
            	 name: '_Perihal',
            	 type: 'string',
            	 persist: false
             },
             {
            	 name: '_KarakterProgram',
            	 type: 'string',
            	 persist: false
             },             
             {
            	 name: '_Asnaf',
            	 type: 'string',
            	 persist: false
             },
             {
            	 name: '_Penilaian',
            	 type: 'string',
            	 persist: false
             },
             {
            	 name: '_MekanismeBantuan',
            	 type: 'string',
            	 persist: false
             },             
             {
            	 name: '_SumberBantuan',
            	 type: 'string',
            	 persist: false
             },             
            ]
});

