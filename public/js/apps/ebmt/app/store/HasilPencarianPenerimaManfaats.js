Ext.define('ebmt.store.HasilPencarianPenerimaManfaats', {
    extend: 'Ext.data.Store',
    requires: 'ebmt.model.PenerimaManfaat',
    // Overriding the model's default proxy
    proxy: {
        type: 'ajax',
        url: '/js/data/hasilpencarian.json',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
});