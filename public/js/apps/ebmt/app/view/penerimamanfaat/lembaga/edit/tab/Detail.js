/**
 * Main panel for displaying details for {@link ebmt.model.penerimamanfaat.lembaga} records
 */
Ext.define('ebmt.view.penerimamanfaat.lembaga.edit.tab.Detail', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.penerimamanfaat.lembaga.edit.tab.detail',
    layout: 'form',
    overflowY: 'auto',
	initComponent: function() {
		var me = this;
        Ext.applyIf(me, {
            items: [
                    {
                    	xtype: 'fieldset',
                    	title: 'Identitas Penerima Manfaat Lembaga',
                    	defaults: {
                    		layout: 'hbox',
                    		margins: '0 10 0 10'                
                    	},
                    	items: [
                                {
                                	xtype: 'fieldcontainer',
                                	items: [
                                            {
                                                xtype: 'hiddenfield',
                                                name: 'kode_mustahik',
                                                fieldLabel: 'Kode Mustahik'
                                            },                                                                            	        
                                            {
                                                xtype: 'textfield',
                                                name: 'nama_kk',
                                                fieldLabel: 'Nama Lembaga'
                                            },
                                            {
                                                xtype: 'textfield',
                                                name: 'nama_pemohon',
                                                fieldLabel: 'Nama Pemohon'
                                            }                                           
                                	       ]
                                }
                    	       ]
                    },
                    {
                    	xtype:'fieldset',
                    	title: 'Alamat',
                        defaults:{
                          layout: 'hbox',
                          margins: '0 10 0 10'           
                        },
                        items: [
                                {
                                  xtype: 'fieldcontainer',
                                  items: [
                                          {
                                              xtype: 'textfield',
                                              name: 'jalan',
                                              fieldLabel: 'Jalan'
                                          }
                                         ]
                                },
                                {
                                	xtype: 'fieldcontainer',
                                	items: [
                    						{
                    						    xtype: 'combobox',
                    						    id: 'kd_propinsi',
                    						    name: 'kd_propinsi',
                    						    hiddenName: 'kd_propinsi',
                    						    fieldLabel: 'Propinsi',
                    						    store: {
                    						    	type: 'master.lokasi.comboboxpropinsi'
                    						    },
                    						    displayField: 'nama_propinsi',
                    						    valueField: 'kd_propinsi',
                    						    editable:false,
                    						    mode: 'local',
                    						    emptyText: 'Pilih Propinsi',
                    						    listeners: {
                    								'select' : function(combo,records,eOpts) {
                    									var selectedValue  = combo.getValue();
                    								    var record         = combo.findRecord(combo.valueField || combo.displayField, selectedValue);
                    								    me.kd_propinsi     = record.get('kd_propinsi');
                    								    
                    								    
                    								    var kd_kotamadya_kabupaten = Ext.getCmp('kd_kotamadya_kabupaten');
                    								    kd_kotamadya_kabupaten.enable();
                    								    kd_kotamadya_kabupaten.clearValue();   
                    								    
                    								    kd_kotamadya_kabupaten.getStore().load({
                    								    	params:{
                    								    	  node:me.kd_propinsi 
                    								    	}
                    								    });
                    								}
                    							}
                    						},
                    						{
                    						    xtype: 'combobox',
                    						    id: 'kd_kotamadya_kabupaten',
                                                name: 'kd_kotamadya_kabupaten',
                                                hiddenName: 'kd_kotamadya_kabupaten',
                    						    fieldLabel: 'Kotamadya/Kabupaten',
                    						    disabled: true,
                    						    displayField: 'nama_kotamadya_kabupaten',
                    						    valueField: 'kd_kotamadya_kabupaten',
                    						    editable:false,
                    						    mode: 'local',
                    						    store: {
                    						    	type: 'master.lokasi.comboboxkotamadyakabupaten'
                    						    },	
                    						    emptyText: 'Pilih Propinsi terlebih dahulu',
                    						    listeners: {
                    						    	beforequery: function(queryEvent, eOpts) {
                    						    		queryEvent.combo.store.proxy.extraParams = {
                    						    				node:  me.kd_propinsi
                    						    		}
                    						    	},
                    								'select' : function(combo,records,eOpts) {
                    									var selectedValue         = combo.getValue();
                    								    var record                = combo.findRecord(combo.valueField || combo.displayField, selectedValue);
                    								    me.kd_kotamadya_kabupaten = record.get('kd_kotamadya_kabupaten');
                    								    
                    								    var kd_kecamatan = Ext.getCmp('kd_kecamatan');
                    								    kd_kecamatan.enable();
                    								    kd_kecamatan.clearValue();
                    								    kd_kecamatan.getStore().load({
                    								    	params:{
                    								    	  node:me.kd_kotamadya_kabupaten 
                    								    	}
                    								    });
                    								}
                    							}						    
                    						}												                    						
                                	       ]
                                  },
                                  {
                                	  xtype: 'fieldcontainer',
                                	  items:[
                                	         {
                     						    xtype: 'combobox',
                    						    id: 'kd_kecamatan',
                                                name: 'kd_kecamatan',
                                                hiddenName: 'kd_kecamatan',
                    						    fieldLabel: 'Kecamatan',
                    						    disabled: true,
                    						    displayField: 'nama_kecamatan',
                    						    valueField: 'kd_kecamatan',
                    						    editable:false,
                    						    mode: 'local',
                    						    store: {
                    						    	type: 'master.lokasi.comboboxkecamatan'
                    						    },						    
                    						    emptyText: 'Pilih Kotamadya/Kabupaten terlebih dahulu',
                    						    listeners: {
                    						    	beforequery: function(queryEvent, eOpts) {
                    						    		queryEvent.combo.store.proxy.extraParams = {
                    						    				node:  me.kd_kotamadya_kabupaten 
                    						    		}
                    						    	},						    	
                    								'select' : function(combo,records,eOpts) {
                    									var selectedValue   = combo.getValue();
                    								    var record          = combo.findRecord(combo.valueField || combo.displayField, selectedValue);
                    								    me.kd_kecamatan     = record.get('kd_kecamatan');
                    								    
                    								    
                    								    var kd_kelurahan_desa = Ext.getCmp('kd_kelurahan_desa');
                    								    kd_kelurahan_desa.enable();
                    								    kd_kelurahan_desa.clearValue();
                    								    kd_kelurahan_desa.getStore().load({
                    								    	params:{
                    								    	  node:me.kd_kecamatan 
                    								    	}
                    								    });
                    								}
                    							}
                                	         },
                                	         {
                                                 xtype: 'fieldcontainer',
                                                 items: [
                                 					{
                                 					  xtype: 'combobox',
                                 					  id: 'kd_kelurahan_desa',
                                                      name: 'kd_kelurahan_desa',
                                                      hiddenName: 'kd_kelurahan_desa',
                                 					  fieldLabel: 'Kelurahan/Desa',
                                 					  disabled: true,
                                 					  displayField: 'nama_kelurahan_desa',
                                 					  valueField: 'kd_kelurahan_desa',
                                 					  editable:false,
                                 					  mode: 'local',
                                 					  store: {
                                 						type: 'master.lokasi.comboboxkelurahandesa'
                                 					  },						    
                                 					  emptyText: 'Pilih Kecamatan terlebih dahulu',
                             						  listeners: {
                             					    	beforequery: function(queryEvent, eOpts) {
                             					    		queryEvent.combo.store.proxy.extraParams = {
                             					    				node:  me.kd_kecamatan 
                             					    		}
                             					    	}
                             					     }
                                 				  }
                                 				]
                                	         },
                                             {
                                                 xtype: 'textfield',
                                                 name: 'kodepos',
                                                 fieldLabel: 'Kode Pos'
                                             }                                                                           	                                         	         
                                	      ]
                                  }
                              ]
                    },
                    {
                    	xtype: 'fieldset',
                    	title: 'Kontak',
                    	defaults: {
                          layout: 'hbox',
                    	  margins: '0 10 0 10'               
                    	},
                    	items: [
                    	{
                    	  xtype: 'fieldcontainer',
                    	  items: [
      						 {
  							   xtype: 'textfield',
  							   name: 'handphone',
  							   fieldLabel: 'Handphone'            								
      					     },                    	          
                    	     {
							   xtype: 'textfield',
							   name: 'email',
							   fieldLabel: 'Email'                	                            		  
                    	     },
                  		    {
                             	xtype: 'fieldcontainer',
                               	layout: 'hbox',
                             	fieldLabel: 'Telepon',
                             	labelAlign: 'top',
                             	items: [
                             	        {
             							  xtype: 'textfield',
             							  name: 'kode_area_telepon',
             							  style: 'margin-right: 5px;',
             							  flex: 1
             							}, 
             							{
             							  xtype: 'textfield',
             							  name: 'telepon_rumah',
             							  flex: 3
             							}
             					      ]
                     		  }                    	     
                    	     ]
                    	}	
                    	],
                    },
                    {
                    	xtype: 'fieldset',
                    	title: 'Informasi Lainnya',
                    	defaults: {
                    		layout: 'hbox',
                    		margins: '0 10 0 10'	
                    	},
                    	items: [{
                    		      xtype: 'fieldcontainer',
                    		      items: {
        							   xtype: 'textareafield',
        							   grow:true,
        							   name: 'keterangan',
        							   fieldLabel: 'Keterangan'                	                        	        	                    		    	  
                    		      }
                    	       }]
                    }
                   ]
        });
        me.callParent( arguments );
	}
})        