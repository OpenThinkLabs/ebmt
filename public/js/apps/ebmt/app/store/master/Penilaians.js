Ext.define('ebmt.store.master.Penilaians', {
    extend: 'ebmt.store.master.Base',
    alias: 'store.master.penilaian',
    requires: [
               'ebmt.model.master.Penilaian'               
              ],
    restPath: '/api/Penilaian/index',
    storeId: 'Penilaians',
    model: 'ebmt.model.master.Penilaian',
    autoLoad:true
});

