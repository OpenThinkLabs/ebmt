Ext.define('ebmt.controller.PenerimaManfaatIndividu', {
    extend: 'ebmt.controller.Base',
    stores: [
             'ebmt.store.penerimamanfaat.Individus',
             'ebmt.store.penerimamanfaat.Ajuans',
             'ebmt.store.master.lokasi.ComboBoxs',
             'ebmt.store.master.lokasi.ComboBoxPropinsis',
             'ebmt.store.master.lokasi.ComboBoxKotamadyaKabupatens',
             'ebmt.store.master.lokasi.ComboBoxKecamatans',
             'ebmt.store.master.lokasi.ComboBoxKelurahanDesas',             
             'ebmt.store.master.JenisKelamins',
    ],
    views: [
              'penerimamanfaat.individu.List',
              'penerimamanfaat.individu.edit.Form',
              'penerimamanfaat.individu.edit.Window',
              'penerimamanfaat.individu.search.Form',
              'penerimamanfaat.individu.search.Window',
              'penerimamanfaat.individu.Detail',
              'penerimamanfaat.individu.Merge',
              'penerimamanfaat.individu.edit.tab.Ajuan',
              'penerimamanfaat.individu.edit.ajuan.Window'
    ],
    refs: [
    {
      ref: 'PenerimaManfaatIndividuList',
      selector: '[xtype=penerimamanfaat.individu.list]'
    },
    {
      ref: 'PenerimaManfaatIndividuEditWindow',
      selector: '[xtype=penerimamanfaat.individu.edit.window]'
    },
    {
      ref: 'PenerimaManfaatIndividuEditForm',
      selector: '[xtype=penerimamanfaat.individu.edit.form]'
    },
    {
        ref: 'PenerimaManfaatIndividuSearchWindow',
        selector: '[xtype=penerimamanfaat.individu.search.window]'
    },
    {
        ref: 'PenerimaManfaatIndividuSearchForm',
        selector: '[xtype=penerimamanfaat.individu.search.form]'
    },
    {
        ref: 'PenerimaManfaatIndividuFotoView',
        selector: '[xtype=penerimamanfaat.individu.edit.tab.foto]'
    },    
    {
        ref: 'PenerimaManfaatIndividuDetailWindow',
        selector: '[xtype=penerimamanfaat.individu.detail]'
    },
    {
        ref: 'PenerimaManfaatIndividuMergeWindow',
        selector: '[xtype=penerimamanfaat.individu.merge]'
    },    
    {
        ref: 'PenerimaManfaatIndividuEditAjuanWindow',
        selector: '[xtype=penerimamanfaat.individu.edit.ajuan.window]'
    },
    {
        ref: 'PenerimamanfaatIndividuEditTabAjuan',
        selector: '[xtype=penerimamanfaat.individu.edit.tab.ajuan]'
    }    
    ],
    init: function() {        
    	this.listen({
    		controller: {},
    		component: {
    			'grid[xtype=penerimamanfaat.individu.list]': {
   			      beforerender: this.loadRecords,
   			      itemdblclick: this.edit,
   			      itemcontextmenu: this.showContextMenu
 			    }, 
 			    'grid[xtype=penerimamanfaat.individu.list] button#tambah': {
 			       click: this.add	
 			     },
  	            'grid[xtype=penerimamanfaat.individu.list] button#search': {
 	                click: this.showSearch
 	            },
 	            'grid[xtype=penerimamanfaat.individu.list] button#clear': {
 	                click: this.clearSearch
 	            },
 	            'form[xtype=penerimamanfaat.individu.edit.form] button#upload': {
 	                click: this.upload
 	            }, 	             	            
 			    'window[xtype=penerimamanfaat.individu.edit.window] button#simpan':{
 			       click: this.save
 			    },
 			    'window[xtype=penerimamanfaat.individu.edit.window] button#batal':{
 	 			   click: this.close
 	 			},
 	            'window[xtype=penerimamanfaat.individu.search.window] button#cari': {
 	                click: this.search
 	            },
 	            'window[xtype=penerimamanfaat.individu.search.window] button#batal': {
 	                click: this.close
 	            },
 	            '[xtype=penerimamanfaat.individu.edit.tab.foto] dataview': {
 	            	itemcontextmenu: this.showFotoContextMenu
 	            },
  			    'grid[xtype=penerimamanfaat.individu.edit.tab.ajuan]': {
  			    	beforerender: this.loadRecordsAjuan,
  			    	itemdblclick: this.editAjuan,
  			    	itemcontextmenu: this.showContextMenuAjuan
    			 },  			      	            
 			    'grid[xtype=penerimamanfaat.individu.edit.tab.ajuan] button#tambah': {
  			       click: this.addAjuan	
  			    },
   	            'grid[xtype=penerimamanfaat.individu.edit.tab.ajuan] button#search': {
  	                click: this.showSearchAjuan
  	            },
  	            'grid[xtype=penerimamanfaat.individu.edit.tab.ajuan] button#clear': {
  	                click: this.clearSearchAjuan
  	            },
 			    'window[xtype=penerimamanfaat.individu.edit.ajuan.window] button#simpan':{
  			       click: this.saveAjuan
  			    },
  			    'window[xtype=penerimamanfaat.individu.edit.ajuan.window] button#batal':{
  	 			   click: this.closeAjuan
  	 			}  	            
    		},
    		global: {},
    		store: {},
    		proxy: {}  
    	}) ;
    },
    
    /**
    * Clears search form and resets results
    * @param {Ext.button.Button} button
    * @param {Ext.EventObject} e
    * @param {Object} eOpts
    */
    clearSearch: function( button, e, eOpts ) {
        var me = this,
            grid = me.getPenerimaManfaatIndividuList(),
            store = grid.getStore();
        // clear filter
        store.clearFilter( false );
    },
    
    /**
     * Clears search form and resets results
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
     clearSearchAjuan: function( button, e, eOpts ) {
    	 Ext.Msg.alert('Informasi', 'Mohon maaf, fitur ini belum diimplementasikan.');
    	 /**
         var me = this,
             grid = me.getPenerimamanfaatIndividuEditTabAjuan(),
             store = grid.getStore();
         
         // clear filter
         store.clearFilter( false );
         **/
     },        
    
    /**
    * Displays search form
    * @param {Ext.button.Button} button
    * @param {Ext.EventObject} e
    * @param {Object} eOpts
    */
    showSearch: function( button, e, eOpts ) {
        var me = this,
            win = me.getPenerimaManfaatIndividuSearchWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'penerimamanfaat.individu.search.window', {
                title: 'Cari Penerima Manfaat Individu'
            });
        }
        // show window
        win.show();
    },
    
    /**
     * Displays search form
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
     showSearchAjuan: function( button, e, eOpts ) {
    	 Ext.Msg.alert('Informasi', 'Mohon maaf, fitur ini belum diimplementasikan.');
    	 /**
         var me = this,
             win = me.getPenerimaManfaatIndividuSearchWindow();
         // if window exists, show it; otherwise, create new instance
         if( !win ) {
             win = Ext.widget( 'penerimamanfaat.individu.search.window', {
                 title: 'Cari Penerima Manfaat Individu'
             });
         }
         // show window
         win.show();**/
     },    
    
    /**
    * Executes search
    * @param {Ext.button.Button} button
    * @param {Ext.EventObject} e
    * @param {Object} eOpts
    */
    search: function( button, e, eOpts ) {
        var me = this,
            win = me.getPenerimaManfaatIndividuSearchWindow(),
            form = win.down( 'form' ),
            grid = me.getPenerimaManfaatIndividuList(),
            store = grid.getStore(),
            values = form.getValues(),
            filters=[];
        // loop over values to create filters
        Ext.Object.each( values, function( key, value, myself ) {
            if( !Ext.isEmpty( value ) ) {
                filters.push({
                    property: key,
                    value: value
                })
            }
        });
        // clear store filters
        store.clearFilter( true );
        store.filter( filters );
        // close window
        win.hide();
    },    
        
    
    /**
     * Displays context menu 
     * @param {Ext.view.View} view
     * @param {Ext.data.Model} record 
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    showContextMenu: function( view, record, item, index, e, eOpts ) {
    	var me = this;
    	// stop event so browser's normal right-click action doesn't continue
    	e.stopEvent();
    	// if a menu doesn't already exist, create one
    	if( !item.contextMenu ) {
    		// add menu
    		item.contextMenu = new Ext.menu.Menu({
    			items: [
    				{
    					text: 'Edit Penerima Manfaat',
    					iconCls: 'icon_edit',
    					handler: function( item, e ) {
    						me.edit(view, record, item, index, e, eOpts);
    					}
    				},
                    {
                        text: 'Lihat Detail',
                        iconCls: 'icon_detail',
                        handler: function( item, e ) {
                            me.view( view, record, item, index, e, eOpts );
                        }
                    },
                    {
                        text: 'Merge',
                        iconCls: 'icon_merge',
                        handler: function( item, e ) {
                            me.merge( view, record, item, index, e, eOpts );
                        }
                    },    				                    
                    {
                        text: 'Delete Penerima Manfaat',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.remove( record );
                        }
                    }
    			]
    		})
    	}
    	// show menu relative to item which was right-clicked
    	item.contextMenu.showBy( item );
    },
    
    /**
     * Displays context menu 
     * @param {Ext.view.View} view
     * @param {Ext.data.Model} record 
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    showContextMenuAjuan: function( view, record, item, index, e, eOpts ) {
    	var me = this;
    	// stop event so browser's normal right-click action doesn't continue
    	e.stopEvent();
    	// if a menu doesn't already exist, create one
    	if( !item.contextMenu ) {
    		// add menu
    		item.contextMenu = new Ext.menu.Menu({
    			items: [
    				{
    					text: 'Edit Ajuan',
    					iconCls: 'icon_edit',
    					handler: function( item, e ) {
    						me.editAjuan(view, record, item, index, e, eOpts);
    					}
    				},
                    {
                        text: 'Lihat Detail Ajuan',
                        iconCls: 'icon_detail',
                        handler: function( item, e ) {
                            me.viewAjuan( view, record, item, index, e, eOpts );
                        }
                    },    				
                    {
                        text: 'Delete Ajuan',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.removeAjuan( record );
                        }
                    }
    			]
    		})
    	}
    	// show menu relative to item which was right-clicked
    	item.contextMenu.showBy( item );
    },    
    
    /**
    * Displays context menu for thumbnails
    * @param {Ext.view.View} view
    * @param {Ext.data.Model} record
    * @param {HTMLElement} item
    * @param {Number} index
    * @param {Ext.EventObject} e
    * @param {Object} eOpts
    */
    showFotoContextMenu: function( view, record, item, index, e, eOpts ) {
        var me = this;
        // stop event so browser's normal right-click action doesn't continue
        e.stopEvent();
        // if a menu doesn't already exist, create one
        if( !item.contextMenu ) {
            // add menu
            item.contextMenu = new Ext.menu.Menu({
                items: [
                    {
                        text: 'Hapus Foto',
                        iconCls: 'icon_delete',
                        handler: function( item, e ) {
                            me.removeImage( record );
                        }
                    }
                ]
            })
        }
        // show menu relative to item which was right-clicked
        item.contextMenu.showBy( item );
    },    
    
    /**
     * Loads the grid's store
     * @param {Ext.grid.Panel}
     * @param {Object}
     */
    loadRecords: function( grid, eOpts ) {
    	var me = this,
    		store = grid.getStore();
    	// clear any fliters that have been applied
    	store.clearFilter( true );
    	// load the store
    	store.load();
    },
    
    /**
     * Loads the grid's store
     * @param {Ext.grid.Panel}
     * @param {Object}
     */
    loadRecordsAjuan: function( grid, eOpts ) {
    	var me = this,
    		store = grid.getStore();
    	// clear any fliters that have been applied
    	store.clearFilter( true );
    	// load the store
    	store.load();
    },    
    
    
    /**
     * Handles request to edit
     * @param {Ext.view.View} view
     * @param {Ext.data.Model} record 
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    edit: function( view, record, item, index, e, eOpts ) {
        var me = this;
        // show window
        me.loadDetail( record, me, me.showEditWindow );
    },
    
    /**
     * Handles request to edit
     * @param {Ext.view.View} view
     * @param {Ext.data.Model} record 
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    editAjuan: function( view, record, item, index, e, eOpts ) {
        var me = this;
        // show window
        me.loadDetailAjuan( record, me, me.showEditWindowAjuan );
    },    
    
    /**
    * Handles request to view details
    * @param {Ext.view.View} view
    * @param {Ext.data.Model} record
    * @param {HTMLElement} item
    * @param {Number} index
    * @param {Ext.EventObject} e
    * @param {Object} eOpts
    */
    view: function( view, record, item, index, e, eOpts ) {
        var me = this;
        // show window
        me.loadDetail( record, me, me.showDetailWindow );
    },
    
    /**
     * Handles request to view merge
     * @param {Ext.view.View} view
     * @param {Ext.data.Model} record
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
     merge: function( view, record, item, index, e, eOpts ) {
         var me = this;
         // show window
         me.loadDetail( record, me, me.showMergeWindow );
     },        
    
    
    /**
     * Handles request to view details
     * @param {Ext.view.View} view
     * @param {Ext.data.Model} record
     * @param {HTMLElement} item
     * @param {Number} index
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
     viewAjuan: function( view, record, item, index, e, eOpts ) {
    	 Ext.Msg.alert('Informasi', 'Mohon maaf, fitur ini belum diimplementasikan.');
         //var me = this;
         // show window
         //me.loadDetail( record, me, me.showDetailWindowAjuan );
     },    
    
    /**
     * Creates a new record and prepares it for editing
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    add: function( button, e, eOpts ) {
        var me = this,
            record = Ext.create( 'ebmt.model.penerimamanfaat.Individu' );

        // show window
        me.showEditWindow( record );
    },
    
    
    /**
     * Creates a new record and prepares it for editing
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    addAjuan: function( button, e, eOpts ) {
        var me = this,
            record = Ext.create( 'ebmt.model.penerimamanfaat.Ajuan' );
        var win  = button.up('window');
            form = win.down('form');
        
        var kode_mustahik = form.getForm().findField('kode_mustahik').getValue() ; 
           

        // show window
        me.showEditWindowAjuan( record , kode_mustahik);
    },    
   
    
    /**
     * Persists edited record
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    save: function( button, e, eOpts ) {
        var me = this,
            grid = me.getPenerimaManfaatIndividuList(),
            store = grid.getStore(),
            win = button.up( 'window' ),
            form = win.down( 'form' ),
            record = form.getRecord(),
            values = form.getValues(),
            callbacks;
        
        // set values of record from form
        record.set( values );

        // check if form is even dirty...if not, just close window and stop everything...nothing to see here
        if( !record.dirty ) { 
            win.close();
            return;
        }

        // setup generic callback config for create/save methods
        callbacks = {
            success: function( records, operation ) {
                win.close();
            },
            failure: function( records, operation ) {
                // if failure, reject changes in store
                store.rejectChanges();
            }
        };
        
        // mask to prevent extra submits
        Ext.getBody().mask( 'Simpan Data Penerima Manfaat Individu...' );
        
        // if new record...
        if( record.phantom ) {
            // reject any other changes
            store.rejectChanges();
            // add the new record
            store.add( record );
        } 
        
        // persist the record
        store.sync( callbacks );
    },
    
    /**
     * Persists edited record
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    saveAjuan: function( button, e, eOpts ) {
        var me = this,
            grid = me.getPenerimamanfaatIndividuEditTabAjuan() ;

            store = grid.getStore(),
            win = button.up( 'window' ),
            form = win.down( 'form' ),
            record = form.getRecord(),
            values = form.getValues(),
            // setup generic callback config for create/save methods
            callbacks ={
                success: function( records, operation ) {
                    win.close();
                },
                failure: function( records, operation ) {
                    // if failure, reject changes in store
                    store.rejectChanges();
                }
            };
        
        // set values of record from form
        record.set( values );
        

        // check if form is even dirty...if not, just close window and stop everything...nothing to see here
        if( !record.dirty ) { 
            win.close();
            return;
        }

        
        // mask to prevent extra submits
        Ext.getBody().mask( 'Simpan Data Ajuan Penerima Manfaat Individu...' );
        
        // if new record...
        if( record.phantom ) {
            // reject any other changes
            store.rejectChanges();
            // add the new record
            store.add( record );
        } 
        
        // persist the record
        store.sync( callbacks );
    },
    
    /**
     * Persists edited record
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    close: function( button, e, eOpts ) {
        var me = this,
            win = button.up( 'window' );
        // close the window
        win.close();
    },
    
    /**
     * Persists edited record
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    closeAjuan: function( button, e, eOpts ) {
        var me = this,
            win = button.up( 'window' );
        // close the window
        win.close();
    },        
    
    /**
     * Displays context menu 
     * @param {Ext.data.Model[]} record
     */
    remove: function( record ) {
    	var me = this,
    		store = record.store;
    	// show confirmation before continuing
    	Ext.Msg.confirm( 'Perhatian', 'Anda yakin ingin menghapus penerima manfaat ini ? Aksi ini tidak dapat dibatalkan.', function( buttonId, text, opt ) {
    		if( buttonId=='yes' ) {
    			store.remove( record );
    			store.sync({
    				/**
    				 * On failure, add record back to store at correct index
    				 * @param {Ext.data.Model[]} records
    				 * @param {Ext.data.Operation} operation
    				 */
    				failure: function( records, operation ) {
    					store.rejectChanges();
    				}
    			})
    		}
    	})
    },
    
    /**
     * Displays context menu 
     * @param {Ext.data.Model[]} record
     */
    removeAjuan: function( record ) {
    	var me = this,
    		store = record.store;
    	// show confirmation before continuing
    	Ext.Msg.confirm( 'Perhatian', 'Anda yakin ingin menghapus ajuan ini ? Aksi ini tidak dapat dibatalkan.', function( buttonId, text, opt ) {
    		if( buttonId=='yes' ) {
    			store.remove( record );
    			store.sync({
    				/**
    				 * On failure, add record back to store at correct index
    				 * @param {Ext.data.Model[]} records
    				 * @param {Ext.data.Operation} operation
    				 */
    				failure: function( records, operation ) {
    					store.rejectChanges();
    				}
    			})
    		}
    	})
    },    
    
    /**
     * Displays common editing form for add/edit operations
     * @param {Ext.data.Model} record
     */
    showEditWindow: function( record ) {
        var me = this,
            win = me.getPenerimaManfaatIndividuEditWindow(),
            isNew = record.phantom;

        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'penerimamanfaat.individu.edit.window', {
                title: isNew ? 'Tambah Penerima Manfaat Individu Baru' : 'Edit Penerima Manfaat Individu'
            });
        }
        // show window
        win.show();

        
        //pre-select
        var kd_kotamadya_kabupaten = Ext.getCmp('kd_kotamadya_kabupaten');
	    kd_kotamadya_kabupaten.getStore().load({
	    	params:{
	    	  node:record.get('kd_propinsi') 
	    	}
	    });
	    
        var kd_kecamatan = Ext.getCmp('kd_kecamatan');
        kd_kecamatan.getStore().load({
	    	params:{
	    	  node:record.get('kd_kotamadya_kabupaten') 
	    	}
	    });
        
        var kd_kelurahan_desa = Ext.getCmp('kd_kelurahan_desa');
        kd_kelurahan_desa.getStore().load({
	    	params:{
	    	  node:record.get('kd_kecamatan') 
	    	}
	    });	        
      //end pre-select        
        

        
        // load form with data
        win.down( 'form' ).loadRecord( record );        
        // prepare data for store
        data = me.prepareImageData( record.get( 'foto_pemohon' ) );
        //load image view with data
        win.down( '#images' ).getStore().loadData( data );
        //load data untuk ajuan
        win.down( '#ajuans' ).getStore().load({ params: { 'kode_mustahik': record.get( 'kode_mustahik' ) } });
    },
    
    /**
     * Displays common editing form for add/edit operations
     * @param {Ext.data.Model} record
     */
    showEditWindowAjuan: function( record , kode_mustahik) {
        var me = this,
            win = me.getPenerimaManfaatIndividuEditAjuanWindow(),
            isNew = record.phantom;

        // if window exists, show it; otherwise, create new instance
        if( !win ) { 
            win = Ext.widget( 'penerimamanfaat.individu.edit.ajuan.window', {
                title: isNew ? 'Tambah Ajuan Baru Penerima Manfaat Individu' : 'Edit Ajuan Penerima Manfaat Individu'
            });
        }
        // show window
        win.show();
        
        // load form with data               
        win.down( 'form' ).loadRecord( record );        
        win.down( '#berkas' ).getStore().loadData( data );
        // prepare data for store
        data = me.prepareBerkasData( record.get( 'berkas_ajuan' ) );
        //load image view with data
        win.down( '#berkas' ).getStore().loadData( data );
        
        if(isNew) {
          Ext.getCmp('kode_mustahik_ajuan').setValue(kode_mustahik);
        } 
    },    
    
    /**
    * Displays details window for selected penerima manfaat individu
    * @param {Ext.data.Model} record
    */
    showDetailWindow: function( record ) {
        var me = this,
            win = me.getPenerimaManfaatIndividuDetailWindow();
        // if window exists, show it; otherwise, create new instance
        if( !win ) {
            win = Ext.widget( 'penerimamanfaat.individu.detail', {
                title: 'Detail Informasi Penerima Manfaat Individu'
            });
        }
        // show window
        win.show();
        // update data
        win.update( record.data );
    },
    
    /**
     * Displays merge  window for selected penerima manfaat individu
     * @param {Ext.data.Model} record
     */
     showMergeWindow: function( record ) {
         var me = this,
             win = me.getPenerimaManfaatIndividuMergeWindow();
         // if window exists, show it; otherwise, create new instance
         if( !win ) {
             win = Ext.widget( 'penerimamanfaat.individu.merge', {
                 title: 'Merge Informasi Penerima Manfaat Individu'
             });
         }
         // show window
         win.show();
         // update data
         win.update( record.data );
     },        
    
    /**
     * @private
     * Prepares raw image path data for store
     * @param {Array} paths
     */
    prepareImageData: function( paths ) {
        var data = [];
        Ext.Array.each( paths, function( item, index, allItems ) {
            if( !Ext.isEmpty( item ) ) {
                data.push({
                    'foto_pemohon':item
                });    
            }
        });
        return data;
    },
    
    /**
     * @private
     * Prepares raw image path data for store
     * @param {Array} paths
     */
    prepareBerkasData: function( paths ) {
        var data = [];
        Ext.Array.each( paths, function( item, index, allItems ) {
            if( !Ext.isEmpty( item ) ) {
                data.push({
                    'berkas_ajuan':item
                });    
            }
        });
        return data;
    },    
    
    /**
    * Manages uploading images
    * @param {Ext.button.Button} button
    * @param {Ext.EventObject} e
    * @param {Object} eOpts
    */
    upload: function( button, e, eOpts ) {
        var me = this,
            form   = button.up( 'form' ),
            image  = form.down( '[name=foto_pemohon]' ),
            record = form.getRecord(),
            view = me.getPenerimaManfaatIndividuFotoView().down( 'dataview' ),
            uploadform = form.down( '#uploadform' );

        // validate upload
        if( Ext.isEmpty( image.getValue() ) ) {
            Ext.Msg.alert( 'Perhatian', 'Silahkan pilih foto terlebih dahulu' );
            return false;
        }
        // submit form
        uploadform.submit({
            url: '/api/PenerimaManfaatIndividu?act=upload_foto',
            params: {
                kode_mustahik: record.get( 'kode_mustahik' ) ? record.get( 'kode_mustahik' ) : 'new',
                foto_pemohon: image.getValue()
            },
            waitMsg: 'Mengupload foto...',
            success: function( form, action ) {
                // add new record to store
                view.getStore().add({
                    foto_pemohon: action.result.data
                });
            },
            failure: function( form, action ) {
                Ext.Msg.alert( 'Ups!', 'Mohon maaf, telah terjadi kesalahan ketika mengupload file Anda. Pastikan file tersebut adalah foto (.jpg, .gif, .png)' );
            }
        })
    },   
    
	loadDetailAjuan: function(record, scope, callbackFn, extraData) {
		// first, reject any changes currently in the store so we don't build up
		// an array of records to save by viewing the records
		record.store.rejectChanges();
		// make request for detail record
		Ext.Ajax.request({
			url : record.store.getProxy().url + '?act=get_by_id&id=' + record.internalId,
					//+ '.json',
			callback : function(options, success, response) {
				if (success) {
					// set "safe mode" so we don't get hammered with giant
					// Ext.Error
					data = Ext.decode(response.responseText, true);
					record.set(data);
					// call callback method
					callbackFn.call(scope, record, extraData);
				}
			}
		});
	}    
});
