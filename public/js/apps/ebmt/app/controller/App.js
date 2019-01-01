Ext.define('ebmt.controller.App', {
    extend: 'ebmt.controller.Base',
    views: [
            'layout.Menu',
            'layout.Center',
            'layout.Landing'
        ],
    refs: [
           {
               ref: 'Menu',
               selector: '[xtype=layout.menu]'
           },
           {
               ref: 'CenterRegion',
               selector: '[xtype=layout.center]'
           }
       ],       
    init: function() {
        this.listen({
            controller: {
        	 '#App': {
                 tokenchange: this.dispatch
             }            	
            },
            component: {
                'menu[xtype=layout.menu] menuitem': {
                    click: this.addHistory
                }             	
            },
            global: {
            	aftervalidateloggedin: this.setupApplication
            },
            store: {},
            proxy: {
                '#baserest': {
                   requestcomplete: this.handleRESTResponse
                }
            }             
        });
    },
    
    /**
     * Entry point for our application. Will render the viewport, and do any other setup required for our application
     */
    setupApplication: function() {
        var me = this;

        // create the viewport, effectively creating the view for our application
        Ext.create( 'ebmt.view.Viewport' );
         // init Ext.util.History on app launch; if there is a hash in the url,
        // our controller will load the appropriate content
        Ext.util.History.init(function(){
            var hash = document.location.hash;
            me.fireEvent( 'tokenchange', hash.replace( '#', '' ) );
        })
        // add change handler for Ext.util.History; when a change in the token
        // occurs, this will fire our controller's event to load the appropriate content
        Ext.util.History.on( 'change', function( token ){
            //me.fireEvent( 'tokenchange', token );
        });    
    },    
    
    /**
    * Add history token to Ext.util.History
    * @param {Ext.menu.Item} item
    * @param {Object} e
    * @param {Object} opts
    */
    addHistory: function( item, e, opts ) {
        var me = this,
                 token = item.itemId;
        Ext.util.History.add( token );
        me.fireEvent( 'tokenchange', token )
    },
    
    /**
    * Handles token change and directs creation of content in center region
    * @param {String} token
    */
    dispatch: function( token ) {
        var me = this,
            config;
        // switch on token to determine which content to create
        switch( token ) {
            case 'penerima_manfaat/individu':
                config = {
                    xtype: 'penerimamanfaat.individu.list',
                    title: 'Daftar Penerima Manfaat Individu',
                    iconCls: 'icon_penerima_manfaat_individu',
                    store: Ext.create( 'ebmt.store.penerimamanfaat.Individus', {
                        pageSize: 20
                    })
                };
                break;
            case 'penerima_manfaat/lembaga':
                config = {
                    xtype: 'penerimamanfaat.lembaga.list',
                    title: 'Daftar Penerima Manfaat Lembaga',
                    iconCls: 'icon_penerima_manfaat_lembaga',
                    store: Ext.create( 'ebmt.store.penerimamanfaat.Lembagas', {
                        pageSize: 20
                    })
                };
                break;
            case 'penerima_manfaat/program':
                config = {
                    xtype: 'penerimamanfaat.program.list',
                    title: 'Daftar Penerima Manfaat By Program',
                    iconCls: 'icon_penerima_manfaat_program',
                    store: Ext.create( 'ebmt.store.penerimamanfaat.Programs', {
                        pageSize: 20
                    })
                };
                break;                
            case 'laporan':
                config = {
                    xtype: 'panel',
                    title: 'Laporan',
                    html: 'Isi Laporan'
                };
                break;
            case 'master':
                config = {
                    xtype: 'panel',
                    title: 'Data Master',
                    html: 'Isi Data Master'
                };            	
            	break;
            case 'master/asnaf':
                config = {
                    xtype: 'master.asnaf.list',
                    title: 'Daftar Asnaf',
                    iconCls: 'icon_master_asnaf',
                    store: Ext.create( 'ebmt.store.master.Asnafs', {
                        pageSize: 30
                    })
                };
                break;            
            case 'master/karakterprogram':
                config = {
                    xtype: 'master.karakterprogram.list',
                    title: 'Daftar Karakter Program',
                    iconCls: 'icon_master_karakterprogram',
                    store: Ext.create( 'ebmt.store.master.KarakterPrograms', {
                        pageSize: 30
                    })
                };
                break;
	        case 'master/lokasi':
                config = {
                    xtype: 'master.lokasi.tree',
                    title: 'Daftar Lokasi',
                    iconCls: 'icon_master_lokasi',
                    store: Ext.create( 'ebmt.store.master.Lokasis', {
                        pageSize: 30
                    })
                };
                break;
            case 'master/mekanismebantuan':
                config = {
                    xtype: 'master.mekanismebantuan.list',
                    title: 'Daftar Mekanisme Bantuan',
                    iconCls: 'icon_master_mekanismebantuan',
                    store: Ext.create( 'ebmt.store.master.MekanismeBantuans', {
                        pageSize: 30
                    })
                };
                break;
            case 'master/penilaian':
                config = {
                    xtype: 'master.penilaian.list',
                    title: 'Penilaian',
                    iconCls: 'icon_master_penilaian',
                    store: Ext.create( 'ebmt.store.master.Penilaians', {
                        pageSize: 30
                    })
                };
                break;
            case 'master/perihal':
                config = {
                    xtype: 'master.perihal.list',
                    title: 'Perihal',
                    iconCls: 'icon_master_perihal',
                    store: Ext.create( 'ebmt.store.master.Perihals', {
                        pageSize: 30
                    })
                };
                break;
            case 'master/sumberdana':
                config = {
                    xtype: 'master.sumberdana.list',
                    title: 'Sumber Dana',
                    iconCls: 'icon_master_sumberdana',
                    store: Ext.create( 'ebmt.store.master.SumberDanas', {
                        pageSize: 30
                    })
                };                                
                break;	        	                
            default:
                config = {
                    xtype: 'layout.landing'
                };
                break;
        }
        me.updateCenterRegion( config );
    },
        
    /**
    * Updates center region of app with passed configuration
    * @param {Object} config
    * @private
    */
    updateCenterRegion: function( config ) {
        var me = this,
            center = me.getCenterRegion();
        
        // remove all existing content
        center.removeAll( true );
        // add new content
        center.add( config );
    },
    
    /**
     * After a REST response is completed, this method will marshall the response data and inform other methods with relevant data
     * @param {Object} request
     * @param {Boolean} success The actual success of the AJAX request. For success of {@link Ext.data.Operation}, see success property of request.operation
     */
    handleRESTResponse: function( request, success ) {    	
        var me = this,
            rawData = request.proxy.reader.rawData;
        // in all cases, let's hide the body mask
        Ext.getBody().unmask();
        ///if proxy success
        if( success ) {
            // if operation success
            if( request.operation.wasSuccessful() ) {
                //....
            }
            // if operation failure
            else {
                // switch on operation failure type
                switch( rawData.type ) {
                    case 'validation':
                        me.showValidationMessage( rawData.data, rawData.success, rawData.message, rawData.type );
                        break;
                }
            }
        }
        // otherwise, major failure...
        else {
            //.....
        }
    },
    
    /**
    * Displays errors from JSON response and tries to mark offending fields as invalid
    * @param {CarTracker.proxy.Rest} proxy
    * @param {Array} data
    * @param {Boolean} success
    * @param {String} message
    * @param {String} type
    */
    showValidationMessage: function( data, success, message, type ) {
        var me = this,
            errorString = '<ul>';
        // looping over the errors
        for( var i in data ) {
            var error = data[ i ];
            errorString += '<li>' + error.message + '</li>';
            // match form field with same field name
            var fieldMatch = Ext.ComponentQuery.query( 'field[name=' + error.field + ']' );
            // match?
            if( fieldMatch.length ) {
                // add extra validaiton message to the offending field
                fieldMatch[ 0 ].markInvalid( error.message );
            }
        }
        errorString += '</ul>';
        // display error messages in modal alert
        Ext.Msg.alert( message, errorString );
    }    
});