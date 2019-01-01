Ext.define('ebmt.store.master.Asnafs', {
    extend: 'ebmt.store.master.Base',
    alias: 'store.master.asnaf',
    requires: [
               'ebmt.model.master.Asnaf'               
              ],
    restPath: '/api/Asnaf/index',
    storeId: 'MasterAsnafs',
    model: 'ebmt.model.master.Asnaf',
    autoLoad:true
});

