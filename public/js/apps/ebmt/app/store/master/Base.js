/**
 * Store from which all other option stores will extend
 */
Ext.define('ebmt.store.master.Base', {
    extend: 'ebmt.store.Base',
    constructor: function( cfg ){
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'master_Base'
        }, cfg)]);
    },
    sorters: [
        {
            property: 'id',
            direction: 'ASC'
        }
    ] 
})