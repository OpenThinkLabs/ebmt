var filters = {
        ftype: 'filters',
        local: false,
        filters: [{
                type: 'string',
                dataIndex: 'kode_mustahik'
            }, {
                type: 'string',
                dataIndex: 'no'
            },
            {
            	type: 'string',
            	dataIndex: 'nama_kk'
            },
            {
            	type: 'string',
            	dataIndex: 'nama_pemohon'
            },
            {
            	type: 'string',
            	dataIndex: 'jk'
            },
            {
            	type: 'string',
            	dataIndex: 'hal'
            },            
            {
            	type: 'string',
            	dataIndex: 'jalan'
            },
            {
            	type: 'string',
            	dataIndex: 'alamat'
            },
            {
            	type: 'string',
            	dataIndex: 'perihal'
            },            
            {
            	type: 'string',
            	dataIndex: 'via'
            },            
            {
            	type: 'string',
            	dataIndex: 'tempat_tujuan'
            },            
            {
            	type: 'string',
            	dataIndex: 'rekomendasi'
            },            
            {
            	type: 'string',
            	dataIndex: 'rencana'
            },            
            {
            	type: 'string',
            	dataIndex: 'realisasi'
            },            
            {
            	type: 'string',
            	dataIndex: 'keterangan'
            },            
         ]
    };

Ext.define('ebmt.view.DaftarPenerimaManfaat', {
    extend: 'Ext.grid.Panel',
    title: 'Daftar Penerima Manfaat',
    features : [filters],
    columns: [
    {
       xtype:'actioncolumn',
       width:50,
       items: [{
                 icon: '/js/extjs/resources/icons/fam/cog_edit.png',  // Use a URL in the icon config
                 tooltip: 'Edit',
                 handler: function(grid, rowIndex, colIndex) {
                        var rec = grid.getStore().getAt(rowIndex);
                        //alert("Edit " + rec.get('kode_mustahik'));
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
                      }
                     },{
                      icon: '/js/extjs/resources/icons/fam/delete.gif',
                      tooltip: 'Hapus',
                      handler: function(grid, rowIndex, colIndex) {
                          var rec = grid.getStore().getAt(rowIndex);
                          alert("Hapus " + rec.get('kode_mustahik'));
                     }
      }]
    },
    {
      header: 'Kode Mustahik',
      dataIndex: 'kode_mustahik',
      locked   : true,
      filterable    :true
    },{
       header: 'No',
       dataIndex: 'no',
       locked   : true
    },{
       header: 'Nama KK',
       dataIndex: 'nama_kk',
       width    : 180,
       locked   : true
    },
    {
       header: 'Nama Pemohon',
       dataIndex: 'nama_pemohon',
       width    : 180,
       locked   : true
    },
    {
       header: 'JK',
       dataIndex: 'jk',
       width    : 40
    },
    {
       header: 'Hal',
       dataIndex: 'hal' 	       	    	
    },
    {
       header: 'Jalan',
       dataIndex: 'jalan' 	       	    	
    },
    {
       header: 'Alamat',
       dataIndex: 'alamat' 	       	
    },
    {
       header: 'Perihal',
       dataIndex: 'perihal' 	       	    	
    },
    {
       header: 'Via',
       dataIndex: 'via' 	       	    	
    },
    {
       header: 'Tempat Tujuan',
       dataIndex: 'tempat_tujuan' 	       	    	
    },
    {
       header: 'Rekomendasi',
       dataIndex: 'rekomendasi' 	       	    	
    },
    {
       header: 'Rencana',
       dataIndex: 'rencana' 	       	    	
    },
    {
       header: 'Realisasi',
       dataIndex: 'realisasi' 	       	    	
    },
    {
       header: 'Keterangan',
       dataIndex: 'keterangan' 	       	    	
    }
    ],
    alias: 'widget.daftarpenerimamanfaat',
    store: 'PenerimaManfaats',
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'PenerimaManfaats',  
        dock: 'bottom',
        displayInfo: true,
        items:[{
        	 xtype: 'button',
        	 text: 'Clear Filter',
        	 handler: function(){
        		alert('Mohon maaf, fungsionalitas ini masih dikembangkan');
        	 }
        }]
    }],
});

