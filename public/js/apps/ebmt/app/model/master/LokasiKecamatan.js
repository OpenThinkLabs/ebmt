Ext.define('ebmt.model.master.LokasiKecamatan', {
	extend : 'Ext.data.Model',
	idProperty: 'kd_kecamatan',
	fields : [ {
		name : 'kd_kecamatan',
		type : 'int',
		mapping : 'kd_kecamatan'
	}, {
		name : 'nama_kecamatan',
		type : 'string',
		mapping : 'nama_kecamatan'
	}
	]
});
