Ext.define('ebmt.store.LokasiPenerimaManfaats', {
    extend: 'Ext.data.TreeStore',
    proxy: {
        type: 'ajax',
        url: '/js/data/lokasipenerimamanfaat.json'
    },
    root: {
    	text: 'Lokasi Penerima Manfaat',
    	expanded: false
    },
    sorters: [{
    	property: 'text',
    	direction: 'ASC' 
    	}],    
    autoLoad: true,
});

