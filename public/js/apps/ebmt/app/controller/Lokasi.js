Ext.define('ebmt.controller.Lokasi', {
	extend : 'ebmt.controller.Base',
	models : [ 'ebmt.model.master.Lokasi' ],
	stores : [ 'ebmt.store.master.Lokasis' ],
	views : [ 'ebmt.view.master.lokasi.Tree' ],
	refs : [ {
		ref : 'lokasi',
		selector : 'lokasi'
	} ],

	init : function() {
		this.control({
			'lokasi' : {
				itemclick : this.onNodeSelect
			}
		});
	},
	onNodeSelect : function(node) {
		alert(node.getId());
	}
});
