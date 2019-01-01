Ext.define('ebmt.model.penerimamanfaat.Individu', {
    extend: 'ebmt.model.Base',
    idProperty: 'kode_mustahik', //jika idProperty diaktifkan, ketika manambah data, phantom akan selalu false
    fields: [
             {
            	 name: 'kode_mustahik',
            	 type: 'string',
            	 useNull : true
             },
             {
            	 name: 'no_ktp',
            	 type: 'string'
             },
             {
            	 name: 'no_kk',
            	 type: 'string'
             },             
             {
            	 name: 'nama_kk',
            	 type: 'string'
             },
             {
            	 name: 'nama_pemohon',
            	 type: 'string'
             },
             {
            	 name: 'foto_pemohon',
            	 type: 'string'
             },             
             {
            	 name: 'jenis_kelamin',
            	 type: 'string'
             },
             {
            	 name: 'jalan',
            	 type: 'string'
             },
             {
            	 name: 'kd_kelurahan_desa',
            	 type: 'integer'
             },
             {
            	 name: 'kd_kecamatan',
            	 type: 'integer'
             },                          
             {
            	 name: 'kd_kotamadya_kabupaten',
            	 type: 'integer'
             },
             {
            	 name: 'kd_propinsi',
            	 type: 'integer'
             },                    
             {
            	 name: 'kd_negara',
            	 type: 'integer'
             },
             {
            	 name: 'kodepos',
            	 type: 'integer'
             },                
             {
            	 name: 'kode_area_telepon',
            	 type: 'integer'
             },
             {
            	 name: 'telepon_rumah',
            	 type: 'string'
             },
             {
            	 name: 'handphone',
            	 type: 'string'
             },
             {
            	 name: 'email',
            	 type: 'string'
             },                                                                 
             {
            	 name: 'keterangan',
            	 type: 'string'
             },
             //relations
             {
                 name: 'Ajuans',
                 type: 'auto'
             },             
             //decorated properties
             {
            	 name: 'txt_jenis_kelamin',
            	 type: 'string',
            	 persist: false
             },                                                                 
             {
            	 name: 'alamat',
            	 type: 'string',
            	 persist: false
             },
             {
            	 name: 'txt_kelurahan_desa',
            	 type: 'string',
            	 persist: false
             },
             {
            	 name: 'txt_kecamatan',
            	 type: 'string',
            	 persist: false
             },
             {
            	 name: 'txt_kotamadya_kabupaten',
            	 type: 'string',
            	 persist: false
             },
             {
            	 name: 'txt_propinsi',
            	 type: 'string',
            	 persist: false
             }                                                    
             
            ]
});

