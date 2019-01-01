Ext.define('ebmt.store.master.MekanismeBantuans', {
    extend: 'ebmt.store.master.Base',
    alias: 'store.master.mekanismebantuan',
    requires: [
               'ebmt.model.master.MekanismeBantuan'               
              ],
    restPath: '/api/MekanismeBantuan/index',
    storeId: 'MekanismeBantuans',
    model: 'ebmt.model.master.MekanismeBantuan',
    autoLoad:true
});

