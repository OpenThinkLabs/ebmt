Ext.define('ebmt.model.master.LokasiKotamadyaKabupaten', {
	extend : 'Ext.data.Model',
	idProperty: 'kd_kotamadya_kabupaten',
	fields : [ {
		name : 'kd_kotamadya_kabupaten',
		type : 'int',
		mapping : 'kd_kotamadya_kabupaten'
	}, {
		name : 'nama_kotamadya_kabupaten',
		type : 'string',
		mapping : 'nama_kotamadya_kabupaten'
	}
	]
});
