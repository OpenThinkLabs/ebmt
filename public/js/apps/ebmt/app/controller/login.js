Ext.define('ebmt.controller.login', { 
	extend : 'Ext.app.Controller', 
	init: function() { 
		this.control({ 
			'loginview button': { 
				signin: this.signinuser 
			 } 
		}); 
		}, 
		signinuser : function(username, password) { // check if the username and password is valid 
			Ext.create('Ext.container.Viewport',{ 
				items:[{ 
					     xtype: 'mainmenuview'
					  }] 
			} ); } 
}); 
