Ext.define('ebmt.Application', {
    name: 'ebmt',
    extend: 'Ext.app.Application',
    views: [
       'Viewport'
    ],
    controllers: [
        'App',
        'PenerimaManfaatIndividu',
        'PenerimaManfaatLembaga',
        'PenerimaManfaatProgram',
        'Asnaf',
        'KarakterProgram',
        'MekanismeBantuan',
        'Penilaian',
        'Perihal',
        'SumberDana',
        'Lokasi',
        'Security'
    ],
    stores: [
        // TODO: add stores here
    ],
    requires: [
               'Ext.util.History',
               'Ext.util.Point',
               'Ext.form.field.Hidden',
               'ebmt.domain.Proxy',
               //'Ext.data.proxy.Rest',
               'overrides.grid.RowEditor'
           ],           
    autoCreateViewport: false,
    
    launch: function( args ) {
    	 // "this" = Ext.app.Application
        var me = this;
        Ext.globalEvents.fireEvent( 'beforeviewportrender' );          	
    }    
});
