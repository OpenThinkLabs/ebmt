/**
 * Form yang digunakan untuk menambah dan mengedit ajuan penerima manfaat lembaga
 */
Ext.define('ebmt.view.penerimamanfaat.lembaga.edit.ajuan.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.penerimamanfaat.lembaga.edit.ajuan.form',
    autoScroll:false,
    layout: 'fit',
    requires: [
        'Ext.tab.Panel',
        'Ext.form.FieldContainer',
        'Ext.form.FieldSet',
        'Ext.form.field.Date',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox',
        'Ext.form.field.File',
        'Ext.layout.container.Form',
        'ebmt.view.penerimamanfaat.lembaga.edit.ajuan.tab.Detail',
        'ebmt.view.penerimamanfaat.lembaga.edit.ajuan.tab.Berkas'
    ],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
        	fieldDefaults: {
                allowBlank: false,
                labelAlign: 'top',
                flex: 1,
                margins: 5
            },        	
            items: [
                {
                    xtype: 'tabpanel',
                    bodyPadding: 5,
                    // set to false to disable lazy render of non-active tabs...IMPORTANT!!!
                    deferredRender: false,
                    items: [
                        {
                            xtype: 'penerimamanfaat.lembaga.edit.ajuan.tab.detail',
                            title: 'Detail Informasi Ajuan'
                        },
                        {
                            xtype: 'penerimamanfaat.lembaga.edit.ajuan.tab.berkas',
                            title: 'Berkas'
                        }                        
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});