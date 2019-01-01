Ext.define('ebmt.view.layout.North', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.north',
    region: 'north',
    bodyPadding: 5,
    html: '<img src="resources/images/ebmt.png" /><h1>Sistem Informasi Penerima Manfaat</h1>',
    cls: 'header',                   
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{

        });
        me.callParent( arguments );
    } 
});