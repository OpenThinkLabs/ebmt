
Ext.define('ebmt.view.penerimamanfaat.individu.search.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.penerimamanfaat.individu.search.form',
    requires: [
        'Ext.form.FieldContainer',
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Ext.slider.Multi',
        'ebmt.ux.form.field.RemoteComboBox',
        'ebmt.ux.form.field.plugin.ClearTrigger'
    ],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            fieldDefaults: {
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },
            items: [
                {
                    xtype: 'fieldset',
                    title: 'Identitas Penerima Manfaat',
                    collapsible: true,
                    items: [
                            {
                                xtype: 'fieldcontainer',
                                layout: 'hbox',
                                items: [
                                    {
                                        xtype: 'textfield',
                                        name: 'no_ktp',
                                        fieldLabel: 'No. KTP'
                                    },
                                    {
                                        xtype: 'textfield',
                                        name: 'no_kk',
                                        fieldLabel: 'No. Kartu Keluarga'
                                    }                                	                                                
                                ]
                            },
                            {
                            	xtype: 'fieldcontainer',
                            	layout: 'hbox',
                            	items: [
                                        {
                                            xtype: 'textfield',
                                            name: 'nama_pemohon',
                                            fieldLabel: 'Nama Pemohon'
                                        },
                                        {
                                            xtype: 'textfield',
                                            name: 'nama_kk',
                                            fieldLabel: 'Nama Kepala Keluarga'
                                        }                                           
                            	       ]
                            }                            
                    ]
                },
                {
                    xtype: 'fieldset',
                    title: 'Alamat Penerima Manfaat',
                    collapsible: true,
                    items: [
                        {
                            xtype: 'fieldcontainer',
                            layout: 'hbox',
                            items: [
                                    {
                                    	xtype: 'fieldcontainer',
                                    	items: [
                        						{
                        						    xtype: 'combobox',
                        						    id: 'kd_propinsi_search',
                        						    name: 'kd_propinsi',
                        						    fieldLabel: 'Propinsi',
                        						    store: {
                        						    	type: 'master.lokasi.combobox'
                        						    },
                        						    displayField: 'name',
                        						    valueField: 'id',
                        						    editable:false,
                        						    forceSelection: true,
                        						    emptyText: 'Pilih Propinsi',
                        						    afterRender: function(){
                        						    	Ext.getCmp('kd_propinsi_search').setValue('1234');
                        						    },
                        						    listeners: {
                        								'select' : function(combo,records,eOpts) {
                        									var selectedValue  = combo.getValue();
                        								    var record         = combo.findRecord(combo.valueField || combo.displayField, selectedValue);
                        								    me.kd_propinsi    = record.get('id');
                        								    
                        								    
                        								    var kd_kotamadya_kabupaten = Ext.getCmp('kd_kotamadya_kabupaten_search');
                        								    kd_kotamadya_kabupaten.enable();
                        								    kd_kotamadya_kabupaten.clearValue();   
                        								    
                        								    kd_kotamadya_kabupaten.getStore().load({
                        								    	params:{
                        								    	  node:me.kd_propinsi 
                        								    	}
                        								    });
                        								}
                        							}
                        						}
                        					]
                                    },
            						{
            						    xtype: 'combobox',
            						    id: 'kd_kotamadya_kabupaten_search',
                                        name: 'kd_kotamadya_kabupaten',
                                        hiddenName: 'kd_kotamadya_kabupaten',
            						    fieldLabel: 'Kotamadya/Kabupaten',
            						    disabled: true,
            						    displayField: 'name',
            						    valueField: 'id',
            						    editable:false,
            						    queryMode: 'remote',
            						    forceSelection: true,
            						    store: {
            						    	type: 'master.lokasi.combobox'
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
            								    me.kd_kotamadya_kabupaten = record.get('id');
            								    
            								    var kd_kecamatan = Ext.getCmp('kd_kecamatan_search');
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
                      	  layout: 'hbox',
                    	  items:[
                    	         {
         						    xtype: 'combobox',
        						    id: 'kd_kecamatan_search',
                                    name: 'kd_kecamatan',
                                    hiddenName: 'kd_kecamatan_search',
        						    fieldLabel: 'Kecamatan',
        						    disabled: true,
        						    displayField: 'name',
        						    valueField: 'id',
        						    editable:false,
        						    mode: 'local',
        						    store: {
        						    	type: 'master.lokasi.combobox'
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
        								    me.kd_kecamatan     = record.get('id');
        								    
        								    
        								    var kd_kelurahan_desa = Ext.getCmp('kd_kelurahan_desa_search');
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
                     					  id: 'kd_kelurahan_desa_search',
                                           name: 'kd_kelurahan_desa',
                                           hiddenName: 'kd_kelurahan_desa',
                     					  fieldLabel: 'Kelurahan/Desa',
                     					  disabled: true,
                     					  displayField: 'name',
                     					  valueField: 'id',
                     					  editable:false,
                     					  mode: 'local',
                     					  store: {
                     						type: 'master.lokasi.combobox'
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
                    	         }
                    	      ]
                        }
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});