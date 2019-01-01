Ext.define('ebmt.controller.TambahPenerimaManfaat', {
    extend: 'Ext.app.Controller',
    //views: ['FormTambahPenerimaManfaat'],
    init: function() {
        this.control({
            'viewport > #mainContent': { 
                render: this.onMainReady 
             },                     
             'viewport #TambahPenerimaManfaatIndividu': { 
                click: this.tambahPenerimaManfaatIndividu
             },
             'viewport #TambahPenerimaManfaatLembaga': { 
                 click: this.tambahPenerimaManfaatLembaga
              },             
            '[action=save]': { //any save button
                click: this.saveClick
            }
        });
    },

    tambahPenerimaManfaatIndividu: function() {
    	win = new Ext.Window({
    	    title: 'Form',
    	    layout: 'fit',
    	    autoScroll: true,
    	    y: 10,
    	    width: '100%',
    	    height: 600,
    	    modal: true,
    	    closeAction: 'hide',
    	    floating: true,
    	    closable : true,
    	    items: [{
    	    	xtype: 'formtambahpenerimamanfaat'
    	       }]
    	});
    	win.show();    	
    },
    
    tambahPenerimaManfaatLembaga: function() {
    	win = new Ext.Window({
    	    title: 'Tambah Penerima Manfaat Lembaga',
    	    layout: 'fit',
    	    autoScroll: true,
    	    y: 10,
    	    width: '100%',
    	    height: 600,
    	    modal: true,
    	    closeAction: 'hide',
    	    floating: true,
    	    closable : true
    	    //items: [formpanel]
    	});
    	win.show();    	
    },    

    
    onMainReady: function() {
        
    }  
});
