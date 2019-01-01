Ext.define('ebmt.view.master.lokasi.Tree', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.master.lokasi.tree',
	store : 'ebmt.store.master.Lokasis',
	collapsible: true,
	loadMask: true,
	useArrows: true,
    rootVisible : false,
    width: 300,
    height: 150,
	animate: true,
	layout: {
	    type: 'vbox',
	    align: 'left'
	},
	autoScroll:true,
	plugins: [{
         ptype: 'bufferedrenderer'
    }],
    columns: [{
        xtype: 'treecolumn', 
        text: 'Lokasi',
        width: 275,
        sortable: true,
        locked: true,
        dataIndex: 'name'
    }]    
});
