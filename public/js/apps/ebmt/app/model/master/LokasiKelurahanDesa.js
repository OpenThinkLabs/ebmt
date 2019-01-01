Ext.define('ebmt.model.master.LokasiKelurahanDesa', {
	extend : 'Ext.data.Model',
	idProperty: 'kd_kelurahan_desa',
	fields : [ {
		name : 'kd_kelurahan_desa',
		type : 'int',
		mapping : 'kd_kelurahan_desa'
	}, {
		name : 'nama_kelurahan_desa',
		type : 'string',
		mapping : 'nama_kelurahan_desa'
	}
	]
});
