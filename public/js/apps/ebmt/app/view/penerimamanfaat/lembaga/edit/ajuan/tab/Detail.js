/**
 * Main panel for displaying details for {@link ebmt.model.penerimamanfaat.ajuan} records
 */
Ext.define('ebmt.view.penerimamanfaat.lembaga.edit.ajuan.tab.Detail', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.penerimamanfaat.lembaga.edit.ajuan.tab.detail',
    layout: 'form',
    autoScroll:true,
	initComponent: function() {
		var me = this;
        Ext.applyIf(me, {
            items: [
                    {
                    	xtype: 'fieldset',
                    	title: 'Ajuan Penerima Manfaat Individu',
                    	defaults: {
                    		layout: 'hbox',
                    		margins: '0 10 0 10'                
                    	},
                    	items: [
                               {
	                             xtype: 'hiddenfield',
	                             id: 'kode_mustahik_ajuan',
	                             name: 'kode_mustahik',	
	                             fieldLabel: 'Kode Mustahik'
	                                            
                               },                           	        
                               {
                                    xtype: 'fieldcontainer',
                                    items: [
                                            {
                                                xtype: 'combobox',
                                                id: 'id_asnaf_ajuan',
                    						    name: 'id_asnaf',
                    						    fieldLabel: 'Asnaf',
                    						    store: {
                    						    	type: 'master.asnaf'
                    						    },
                    						    displayField: 'asnaf',
                    						    valueField: 'id',
                    						    editable:false,
                    						    forceSelection: false, //jika set true, set default value tidak bisa
                    						    emptyText: 'Pilih Asnaf'
                                            },                                            
                                	        {
                                                xtype: 'combobox',
                                                id: 'id_perihal_ajuan',
                    						    name: 'id_perihal',                    						    
                    						    fieldLabel: 'Perihal',
                    						    store: {
                    						    	type: 'master.perihal'
                    						    },
                    						    displayField: 'perihal',
                    						    valueField: 'id',
                    						    editable:false,
                    						    emptyText: 'Pilih Perihal',
                    						    forceSelection: false
                                	        },
                                	        {
                                                xtype: 'combobox',
                                                id: 'id_karakter_program_ajuan',
                    						    name: 'id_karakter_program',
                    						    fieldLabel: 'Karakter Program',
                    						    store: {
                    						    	type: 'master.karakterprogram'
                    						    },
                    						    displayField: 'karakter_program',
                    						    valueField: 'id',
                    						    editable:false,
                    						    emptyText: 'Pilih Karakter Program',
                    						    forceSelection: false                             	        	
                                	        }
                                    ]
                                },
                                {
                                	xtype: 'fieldcontainer',
                                	items: [
                                            {
                                                xtype: 'combobox',
                                                id: 'id_penilaian_ajuan',
                    						    name: 'id_penilaian',
                    						    fieldLabel: 'Penilaian',
                    						    store: {
                    						    	type: 'master.penilaian'
                    						    },
                    						    displayField: 'penilaian',
                    						    valueField: 'id',
                    						    editable:false,
                    						    emptyText: 'Pilih Penilaian',
                    						    forceSelection: false                                	        	
                                            },
                                	        {
                                                xtype: 'combobox',
                                                id: 'id_mekanisme_bantuan_ajuan',
                    						    name: 'id_mekanisme_bantuan',
                    						    fieldLabel: 'Mekanisme Bantuan',
                    						    store: {
                    						    	type: 'master.mekanismebantuan'
                    						    },
                    						    displayField: 'mekanisme_bantuan',
                    						    valueField: 'id',
                    						    editable:false,
                    						    emptyText: 'Pilih Mekanisme Bantuan',
                    						    forceSelection: false                               	        	
                                	        },
                                	        {
                                                xtype: 'combobox',
                                                id: 'id_sumber_dana_ajuan',
                    						    name: 'id_sumber_dana',
                    						    fieldLabel: 'Sumber Dana',
                    						    store: {
                    						    	type: 'master.sumberdana'
                    						    },
                    						    displayField: 'sumber_dana',
                    						    valueField: 'id',
                    						    editable:false,
                    						    emptyText: 'Pilih Sumber Dana',
                    						    forceSelection: false                                	        	
                                	        }                                	                                                    
                                	       ]
                                },
                                {
                                	xtype: 'fieldcontainer',
                                	items: [
                                	        {
                                                xtype: 'textfield',
                                                name: 'nilai_bantuan_usulan',
                                                fieldLabel: 'Nilai Bantuan Usulan'                                	        	
                                	        },
                                	        {
                                                xtype: 'textfield',
                                                name: 'nilai_bantuan_disetujui',
                                                fieldLabel: 'Nilai Bantuan Disetujui'                                	        	                                	        	
                                	        },
                                	        {
                                                xtype: 'textfield',
                                                name: 'jml_penerima_manfaat',
                                                fieldLabel: 'Jumlah Penerima Manfaat'                                	        	
                                	        }                                	        
                                	       ]                                	
                                },
                                {
                                	xtype: 'fieldcontainer',
                                	items: [
                                	        {
                                                xtype: 'datefield',
                                                name: 'tgl_masuk',
                                                fieldLabel: 'Tanggal <br/> Masuk',
                                                maxValue: new Date()
                                	        },
                                	        {
                                	        	xtype: 'datefield',
                                                name: 'tgl_disetujui',
                                                fieldLabel: 'Tanggal <br/> Disetujui',
                                                maxValue: new Date()
                                	        },
                                	        {
                                                xtype: 'datefield',
                                                name: 'tgl_proses_keuangan',
                                                fieldLabel: 'Tanggal <br/> Proses Keuangan'                                	        	
                                	        },
                                	        {
                                                xtype: 'datefield',
                                                name: 'tgl_pengambilan_transfer_dana',
                                                fieldLabel: 'Tanggal <br/> Pengambilan Transfer Dana'                                	        	                                	        	
                                	        }                                	                                        	        
                                	       ]                                	
                                },
                                {
                                	xtype: 'fieldcontainer',
                                	items: [
                                	        {
                                                xtype: 'textareafield',
                                                grow:true,
                                                name: 'catatan',
                                                fieldLabel: 'Catatan'                                	        	                                	        	
                                	        }                                	        
                                	       ]                                	
                                },                                                                                                
                    	       ]
                    }]
                  });
        me.callParent( arguments );
	}
})        