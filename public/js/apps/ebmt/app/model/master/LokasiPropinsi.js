Ext.define('ebmt.model.master.LokasiPropinsi', {
	extend : 'Ext.data.Model',
	idProperty: 'kd_propinsi',
	fields : [ {
		name : 'kd_propinsi',
		type : 'int',
		mapping : 'kd_propinsi'
	}, {
		name : 'nama_propinsi',
		type : 'string',
		mapping : 'nama_propinsi'
	}
	]
});
