Ext.define('ebmt.store.master.Lokasis', {
	extend : 'Ext.data.TreeStore',
	alias: 'store.master.lokasi',
	model : 'ebmt.model.master.Lokasi',
	requires : 'ebmt.model.master.Lokasi',
	proxy : {
		type : 'ajax', // Because it's a cross-domain request
		url : '/api/Lokasi',
		reader : {
			type : 'json'
		}
	},
	lazyFill: true
});