Ext.define('ebmt.view.FormTambahPenerimaManfaat', {
    extend: 'Ext.form.Panel',
    title: 'Tambah Penerima Manfaat',
    alias: 'widget.formtambahpenerimamanfaat',
    bodyPadding: 5,
    width: 650,
    style: 'margin: 50px',
    autoScroll: true,
    url: '/mustahik/index?act=tambah_penerima_manfaat',
    renderTo: Ext.getBody(),
    items: [
        {
         xtype: 'textfield',
         fieldLabel: 'Kode Mustahik',
         name: 'kode_mustahik',
         allowBlank: false
        },
        {
          xtype: 'textfield',
          fieldLabel: 'No',
          name: 'no',
          allowBlank: false
        },
        {
          xtype: 'container',
          layout: 'hbox',
          items: [{
        	  xtype: 'textfield',
        	  fieldLabel: 'Nama KK',
        	  name: 'nama_kk',
        	  allowBlank: false,
        	  labelAlign: 'top',
        	  cls: 'field-margin',
        	  flex: 1
          }
          ],     	
        },
        {
        	xtype: 'container',
        	layout: 'hbox',
        	items: [
					 {
					   xtype: 'textfield',
					   fieldLabel: 'Nama Pemohon',
					   name: 'nama_pemohon',
					   allowBlank: false,        	        	
					   labelAlign: 'top',
					   cls: 'field-margin',
					   flex: 1        	  
					 },
			         {
			          xtype: 'textfield',
			          fieldLabel: 'Jenis Kelamin',
			          name: 'jenis_kelamin',
			          allowBlank: false,
			          labelAlign: 'top',
			          cls: 'field-margin',
			          flex: 1
			         }					 
        	        ]
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Jalan',
          name: 'jalan',
          allowBlank: false        	        	        	        	        	
        },
        {
          xtype: 'container',
          layout: 'hbox',
          items:[
                 {
                   xtype: 'textfield',
                   fieldLabel: 'Kelurahan/Desa',
                   name: 'kelurahan_desa',
                   allowBlank: false,
               	   labelAlign: 'top',
            	   cls: 'field-margin',
            	   flex: 1        	  
                 },
                 {
                   xtype: 'textfield',
                   fieldLabel: 'Kecamatan',
                   name: 'kecamatan',
                   allowBlank: false,
             	   labelAlign: 'top',
            	   cls: 'field-margin',
            	   flex: 1        	                     
                 }                 
            ]
        },
        {
          xtype: 'container',
          layout: 'hbox',
          items: [
                   {
                      xtype: 'textfield',
                      fieldLabel: 'Kotamadya/Kabupaten',
                      name: 'kotamadya_kabupaten',
                      allowBlank: false,
                      labelAlign: 'top',
                      cls: 'field-margin',
                      flex: 1
                   },
                   {
                       xtype: 'textfield',
                       fieldLabel: 'Propinsi',
                       name: 'propinsi',
                       allowBlank: false,
                       labelAlign: 'top',
                       cls: 'field-margin',
                       flex: 1
                    }                   
                ]
        },
        {
        	xtype: 'container',
        	layout: 'column',
        	items: [
        	    {
        		  xtype: 'textfield',
        		  fieldLabel: 'Handphone',
        		  name: 'handphone',
        		  allowBlank: false,
        		  labelAlign: 'top',
        		  cls: 'field-margin',
        		  columnWidth: 0.6
        	    },
        	    {
        	      xtype: 'fieldcontainer',
        	      layout: 'hbox',
        	      fieldLabel: 'Telepon Rumah',
        	      labelAlign: 'top',
        	      cls: 'field-margin',
        	      columnWidth:0.4,
        	      items: [
        	          {
        	    	   xtype: 'textfield',
        	    	   name: 'kode_area_telepon',
        	    	   style: 'margin-right: 5px',
        	    	   flex: 2
        	          },
        	          {
        	        	xtype: 'textfield',
        	        	name: 'telepon_rumah',
        	        	flex: 4
        	          }]
        	    }
        	]
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'email',
            allowBlank: false        	        	        	        	        	
        },
        {
          xtype: 'container',
          layout: 'hbox',
          items: [
            {
              xtype: 'textfield',
              fieldLabel: 'Hal',
              name: 'hal',
              allowBlank: false,
              labelAlign: 'top',
              cls: 'field-margin',
              flex: 1
            },
            {
              xtype: 'textfield',
              fieldLabel: 'Perihal',
              name: 'perihal',
              allowBlank: false,
              labelAlign: 'top',
              cls: 'field-margin',
              flex: 1            	
            }
           ]
        },
        {
          xtype: 'container',
          layout: 'hbox',
          items: [
				  {
					 xtype: 'textfield',
					 fieldLabel: 'Perihal',
					 name: 'perihal',
					 allowBlank: false,
					 labelAlign: 'top',
					 cls: 'field-margin',
					 flex: 1
					},{
					 xtype: 'textfield',
					 fieldLabel: 'Via',
					 name: 'via',
					 allowBlank: false,        	        	
					 labelAlign: 'top',
					 cls: 'field-margin',
					 flex: 1        	  
				    }
                ]
        },
        {
          xtype: 'container',
          layout: 'hbox',
          items: [
					{
					  xtype: 'textfield',
					  fieldLabel: 'Tempat Tujuan',
					  name: 'tempat_tujuan',
					  allowBlank: false,
					  labelAlign: 'top',
					  cls: 'field-margin',
					  flex: 1
					},{
					  xtype: 'textfield',
					  fieldLabel: 'Rekomendasi',
					  name: 'rekomendasi',
					  allowBlank: false,        	        	
					  labelAlign: 'top',
					  cls: 'field-margin',
					  flex: 1        	  
					}
                 ]
        },
        {
          xtype: 'container',
          layout: 'hbox',
          items: [
					{
						xtype: 'textfield',
						fieldLabel: 'Rencana',
						name: 'rencana',
						allowBlank: false,
						labelAlign: 'top',
						cls: 'field-margin',
						flex: 1
					},{
					    xtype: 'textfield',
					    fieldLabel: 'Realisasi',
					    name: 'realisasi',
					    allowBlank: false,        	        	
						labelAlign: 'top',
						cls: 'field-margin',
						flex: 1        	  
					}                  
                 ]
        },
        {
          xtype: 'textfield',
          fieldLabel: 'Keterangan',
          name: 'keterangan',
          allowBlank: false
        }
    ],
    buttons: [
        {
        xtype: 'button',
        text: 'Simpan',
        action: 'save',
        formBind: true

        }
    ]
});
