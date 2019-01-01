Ext.define('ebmt.controller.LaporanPenerimaManfaat', {
    extend: 'Ext.app.Controller',
    //views: ['LaporanPenerimaManfaat'],
    init: function() {
        this.control({
            'viewport > #mainContent': { 
                render: this.onMainReady 
             },                     
             'viewport #JumlahPenerimaManfaatTotalMingguanBulananTahunan': { 
                click: this.JumlahPenerimaManfaatTotalMingguanBulananTahunan
             },
             'viewport #JumlahPenerimaManfaatPerKategoriProgram': { 
                 click: this.JumlahPenerimaManfaatPerKategoriProgram
             },             
             'viewport #JumlahPenerimaManfaatPerAsnaf': { 
                  click: this.JumlahPenerimaManfaatPerAsnaf
             },                           
             'viewport #JumlahPenerimaManfaatPerUnitKepaladanPerKepalaKeluarga': { 
                 click: this.JumlahPenerimaManfaatPerUnitKepaladanPerKepalaKeluarga
             },                                        
             'viewport #GrafikPieAsnafdanKarakterProgram': { 
                 click: this.GrafikPieAsnafdanKarakterProgram
             },                                          
             'viewport #PetaSebaranPenerimaManfaat': { 
                 click: this.PetaSebaranPenerimaManfaat
             },                                                                    
             'viewport #Export': { 
                 click: this.Export
             },                                                                                 
            '[action=save]': { //any save button
                click: this.saveClick
            }
        });
    },

    JumlahPenerimaManfaatTotalMingguanBulananTahunan: function() {
    	win = new Ext.Window({
    	    title: 'Jumlah Penerima Manfaat Total Mingguan, Bulanan, Tahunan',
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
    
    JumlahPenerimaManfaatPerKategoriProgram: function() {
    	win = new Ext.Window({
    	    title: 'Jumlah Penerima Manfaat Per Kategori Program',
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
    
    JumlahPenerimaManfaatPerAsnaf: function() {
    	win = new Ext.Window({
    	    title: 'Jumlah Penerima Manfaat Per Asnaf',
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
    
    JumlahPenerimaManfaatPerUnitKepaladanPerKepalaKeluarga: function(){
    	win = new Ext.Window({
    	    title: 'Jumlah Penerima Manfaat Per Unit/Kepala dan Per Kepala Keluarga',
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
    
    GrafikPieAsnafdanKarakterProgram: function(){
    	win = new Ext.Window({
    	    title: 'Grafik Pie Asnaf dan Karakter Program',
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
    
    PetaSebaranPenerimaManfaat: function() {
    	win = new Ext.Window({
    	    title: 'Peta Sebaran Penerima Manfaat',
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
    
    Export: function() {
    	alert('Export');
    },
    
    onMainReady: function() {
        
    }  
});
