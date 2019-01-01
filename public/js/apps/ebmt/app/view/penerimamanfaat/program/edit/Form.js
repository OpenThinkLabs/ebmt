/**
 * Form yang digunakan untuk menambah dan mengedit penerima manfaat program
 */
Ext.define('ebmt.view.penerimamanfaat.program.edit.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.penerimamanfaat.program.edit.form',
    autoScroll:true,
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
        'ebmt.view.penerimamanfaat.program.edit.tab.Detail',
        'ebmt.view.penerimamanfaat.program.edit.tab.Ajuan',
        'ebmt.view.penerimamanfaat.program.edit.tab.Foto'
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
                            xtype: 'penerimamanfaat.program.edit.tab.detail',
                            title: 'Detail Informasi Kontak'
                        },
                        {
                            xtype: 'penerimamanfaat.program.edit.tab.ajuan',
                            title: 'Histori Ajuan'
                        },
                        {
                            xtype: 'penerimamanfaat.program.edit.tab.foto',
                            title: 'Foto'
                        }                        
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});