var form = Ext.create('Ext.form.Panel', {
	bodyPadding : 10,
	border : false,
	defaultType : 'textfield',
	items : [ {
		fieldLabel : 'Username',
		name : 'username',
		allowBlank : false
	}, {
		fieldLabel : 'Password',
		name : 'password',
		inputType : 'password',
		allowBlank : false
	} ],
	buttons : [ {
		text : 'Login',
		formBind : true,
		disabled : true,
		handler : function() {
			alert('Login Button Pressed');
		}
	} ]
});

Ext.create('Ext.window.Window', {
	title : 'Login Window',
	height : 140,
	width : 300,
	layout : 'fit',
	items : [ form ]
}).show();