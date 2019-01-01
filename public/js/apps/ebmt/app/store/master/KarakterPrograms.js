Ext.define('ebmt.store.master.KarakterPrograms', {
    extend: 'ebmt.store.master.Base',
    alias: 'store.master.karakterprogram',
    requires: [
               'ebmt.model.master.KarakterProgram'               
              ],
    restPath: '/api/KarakterProgram/index',
    storeId: 'KarakterPrograms',
    model: 'ebmt.model.master.KarakterProgram',
    autoLoad:true
});

