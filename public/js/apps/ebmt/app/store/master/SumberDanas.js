Ext.define('ebmt.store.master.SumberDanas', {
    extend: 'ebmt.store.master.Base',
    alias: 'store.master.sumberdana',
    requires: [
               'ebmt.model.master.SumberDana'               
              ],
    restPath: '/api/SumberDana/index',
    storeId: 'SumberDanas',
    model: 'ebmt.model.master.SumberDana',
    autoLoad:true
});

