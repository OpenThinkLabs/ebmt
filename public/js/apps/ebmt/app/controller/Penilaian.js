Ext.define('ebmt.controller.Penilaian', {
    extend: 'ebmt.controller.Base',
    stores: [
             'ebmt.store.master.Penilaians'
    ],
    views: [
              'master.penilaian.List',
              //'penerimamanfaat.individu.edit.Form',
              //'penerimamanfaat.individu.edit.Window'
    ],
    refs: [
    {
      ref: 'PenilaianList',
      selector: '[xtype=master.penilaian.list]'
    },
    //{
    //  ref: 'PenerimaManfaatIndividuEditWindow',
    //  selector: '[xtype=penerimamanfaat.individu.edit.window]'
    //},
   // {
   //   ref: 'PenerimaManfaatIndividuEditForm',
   //   selector: '[xtype=penerimamanfaat.individu.edit.form]'
   // }    
    ],
    init: function() {        
    	this.listen({
    		controller: {},
    		component: {
    			'grid[xtype=master.penilaian.list]': {
   			      beforerender: this.loadRecords,
   			      itemdblclick: this.edit,
   			      itemcontextmenu: this.showContextMenu
 			    }, 
 			    'grid[xtype=master.penilaian.list] button#tambah': {
 			       click: this.add	
 			     },
 			    //'window[xtype=master.mekanismebantuan.list.edit.window] button#simpan':{
 			     //  click: this.save
 			    //},
 			    //'window[xtype=penerimamanfaat.individu.edit.window] button#batal':{
 	 			//   click: this.close
 	 			//} 			    
    		},
    		global: {},
    		store: {},
    		proxy: {}  
    	}) ;
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
    					text: 'Edit Penilaian',
    					iconCls: 'icon_edit',
    					handler: function( item, e ) {
    						me.edit(view, record, item, index, e, eOpts);
    					}
    				},
                    {
                        text: 'Delete Penilaian',
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
        me.showEditWindow( record );
    },
    
    /**
     * Creates a new record and prepares it for editing
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    add: function( button, e, eOpts ) {
        var me = this,
            record = Ext.create( 'ebmt.model.master.Penilaian' );
        // show window
        me.showEditWindow( record );
    },
    
    /**
     * Persists edited record
     * @param {Ext.button.Button} button
     * @param {Ext.EventObject} e
     * @param {Object} eOpts
     */
    save: function( button, e, eOpts ) {
        var me = this,
            grid = me.getMekanismeBantuanList(),
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
        callbacks ={
            success: function( records, operation ) {
                win.close();
            },
            failure: function( records, operation ) {
                // if failure, reject changes in store
                store.rejectChanges();
            }
        };
        // mask to prevent extra submits
        Ext.getBody().mask( 'Simpan Data Penilaian...' );
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
     * Displays context menu 
     * @param {Ext.data.Model[]} record
     */
    remove: function( record ) {
    	var me = this,
    		store = record.store;
    	// show confirmation before continuing
    	Ext.Msg.confirm( 'Perhatian', 'Anda yakin ingin menghapus Penilaian ini ? Aksi ini tidak dapat dibatalkan.', function( buttonId, text, opt ) {
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
            win = Ext.widget( 'master.penilaian.edit.window', {
                title: isNew ? 'Tambah Penilaian Baru' : 'Edit Penilaian'
            });
        }
        // show window
        win.show();
        // load form with data
        win.down( 'form' ).loadRecord( record );
    }    
});