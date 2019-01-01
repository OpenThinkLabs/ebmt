/**
* Controller for all security functionality
*/
Ext.define('ebmt.controller.Security', {
    extend: 'ebmt.controller.Base',
    requires: [
        'ebmt.security.crypto.SHA1'
    ],
    models: [
        'security.User'
    ],
    views: [
        'security.login.Form',
        'security.login.Window'
    ],
    refs: [
        {
            ref: 'LoginForm',
            selector: '[xtype=security.login.form]'
        },
        {
            ref: 'LoginWindow',
            selector: '[xtype=security.login.window]'
        }
    ],
    init: function() {
        this.listen({
            controller: {},
            component: {
                '[xtype=security.login.window] button#login': {
                    click: this.doLogin
                },
                'menu[xtype=layout.menu] menuitem#logout': {
                    click: this.doLogout
                }
            },
            global: {
                beforeviewportrender: this.processLoggedIn
            },
            store: {},
            proxy: {}
        });
    },
    /**
* Main method process security check
*/
    processLoggedIn: function() {
        var me = this;
        // make remote request to check session
        Ext.Ajax.request({
        	method: 'POST',
            url: '/api/Security/login',
            success: function( response, options ) {
                // decode response
                var result = Ext.decode( response.responseText );
                // check if success flag is true
                if( result.success ) {
                    // has session...add to application stack
                    ebmt.LoggedInUser = Ext.create( 'ebmt.model.security.User', result.data );
                    // fire global event aftervalidateloggedin
                    Ext.globalEvents.fireEvent( 'aftervalidateloggedin' );
                }
                // couldn't login...show error
                else {
                    Ext.widget( 'security.login.window' ).show();
                }
            },
            failure: function( response, options ) {
                Ext.Msg.alert( 'Perhatian', 'Mohon maaf, telah terjadi kesalahan pada sistem. Silahkan dicoba lagi.' );
            }
        })
    },
    /**
* Handles form submission for login
* @param {Ext.button.Button} button
* @param {Ext.EventObject} e
* @param {Object} eOpts
*/
    doLogin: function( button, e, eOpts ) {
        var me = this,
            win = button.up( 'window' ),
            form = win.down( 'form' ),
            values = form.getValues(),
            hashedPassword;
        // simple validation
        if( Ext.isEmpty( values.Username ) || Ext.isEmpty( values.Password ) ) {
            Ext.Msg.alert( 'Perhatian', 'Silahkan isi username dan password terlebih dahulu' );
            return false;
        }
        Ext.Ajax.request({
            url: '/api/Security/login',
            params: {
                username: values.Username,
                password: ebmt.security.crypto.SHA1.hash( values.Password )
            },
            success: function( response, options ) {
                // decode response
                var result = Ext.decode( response.responseText );
                // check if success flag is true
                if( result.success ) {
                    // has session...add to application stack
                    ebmt.LoggedInUser = Ext.create( 'ebmt.model.security.User', result.data );
                    // fire global event aftervalidateloggedin
                    Ext.globalEvents.fireEvent( 'aftervalidateloggedin' );
                    // show message
                    Ext.Msg.alert( 'Perhatian', 'Anda telah berhasil login. Selamat Datang di Sistem Informasi Penerima Manfaat' );
                    // close window
                    win.close();
                }
                // couldn't login...show error
                else {
                    Ext.Msg.alert( 'Perhatian', result.message );
                }
            },
            failure: function( response, options ) {
                Ext.Msg.alert( 'Perhatian', 'Mohon maaf, telah terjadi kesalahan pada sistem. Silahkan dicoba lagi.' );
            }
        });
    },
    /**
	* Handles logout
	* @param {Ext.button.Button} button
	* @param {Ext.EventObject} e
	* @param {Object} eOpts
	*/
    doLogout: function( button, e, eOpts ) {
        var me = this;
        Ext.Msg.confirm( 'Perhatian', 'Anda yakin ingin logout dari Sistem Informasi Penerima Manfaat ?', function( button ) {
            if( button=='yes' ) {
                Ext.Ajax.request({
                    url: '/api/Security/logout',
                    method: 'GET',
                    success: function( response, options ) {
                        window.location.reload( true );
                    },
                    failure: function( response, options ) {
                        Ext.Msg.alert( 'Perhatian', 'Mohon maaf, telah terjadi kesalahan pada sistem. Silahkan dicoba lagi.' );
                    }
                });
            }
        });
    }
});