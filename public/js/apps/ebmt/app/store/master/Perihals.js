Ext.define('ebmt.store.master.Perihals', {
    extend: 'ebmt.store.master.Base',
    alias: 'store.master.perihal',
    requires: [
               'ebmt.model.master.Perihal'               
              ],
    restPath: '/api/Perihal/index',
    storeId: 'Perihals',
    model: 'ebmt.model.master.Perihal',
    autoLoad:true
});

