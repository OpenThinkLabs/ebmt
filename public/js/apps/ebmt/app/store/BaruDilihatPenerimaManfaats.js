Ext.define('ebmt.store.BaruDilihatPenerimaManfaats', {
    extend: 'Ext.data.Store',
    model: 'ebmt.model.PenerimaManfaat',
    proxy: {
        type: 'ajax',
        url: '/js/data/barudilihatpenerimamanfaat.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    },
    autoLoad: true        
});

