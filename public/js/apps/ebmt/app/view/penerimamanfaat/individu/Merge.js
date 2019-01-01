Ext.define('ebmt.view.penerimamanfaat.individu.Merge', {
	extend: 'Ext.window.Window',
	alias: 'widget.penerimamanfaat.individu.merge',
	modal: true,
	bodyPadding:10,
	width: 800,
	minHeight:600,
	iconCls: 'icon_detail',
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			tpl: Ext.create('Ext.XTemplate', 
				'TODO'
			)
		});
		me.callParent( arguments );
	}
});