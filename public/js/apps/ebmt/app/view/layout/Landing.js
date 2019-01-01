/**
* Generic landing page for application
*/
Ext.define('ebmt.view.layout.Landing', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout.landing',
    title: 'Selamat Datang!',
    bodyPadding: 10,
    html: 'Selamat Datang di Sistem Informasi Penerima Manfaat',
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{

        });
        me.callParent( arguments );
    }
});