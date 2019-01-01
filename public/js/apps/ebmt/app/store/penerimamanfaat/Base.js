/**
 * Store from which all other option stores will extend
 */
Ext.define('ebmt.store.penerimamanfaat.Base', {
    extend: 'ebmt.store.Base',
    constructor: function( cfg ){
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'penerimamanfaatBase'
        }, cfg)]);
    },
    sorters: [
        {
            property: 'nama_pemohon',
            direction: 'ASC'
        }
    ] 
})