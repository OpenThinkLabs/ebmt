/**
 * Abstract REST proxy 
 */
Ext.define('ebmt.proxy.Rest', {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.baserest',
    format: '', //kalau menambahkan format=json, maka urlnya akan diappen denganf format ini, /api/PenerimaManfaatIndividu/index menjadi /api/PenerimaManfaatIndividu/index.json
    limitParam: 'max',
    startParam: 'offset',
    sortParam: 'sortorder',
    writer: {
        type: 'json',
        writeAllFields: false
    },
    reader: {
        type: 'json',
        root: 'data',
        totalProperty: 'total'
    },
    afterRequest: function( request, success ) {
        var me = this;
        // fire requestcomplete event
        me.fireEvent( 'requestcomplete', request, success );
    }
});