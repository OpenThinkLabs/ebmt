Ext.define('ebmt.view.penerimamanfaat.individu.edit.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.penerimamanfaat.individu.edit.window',
    requires: [
        'ebmt.view.penerimamanfaat.individu.edit.Form'
    ],
    iconCls: 'icon_user',
    width: 800,
    height:600,
    modal: true,
    resizable: true,
    draggable: true,
    constrainHeader: true,
    autoScroll:false,
    layout: 'fit',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'penerimamanfaat.individu.edit.form'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'batal',
                            text: 'Tutup',
                            iconCls: 'icon_delete'
                        },
                        '->',
                        {
                            xtype: 'button',
                            itemId: 'simpan',
                            text: 'Simpan',
                            iconCls: 'icon_save'
                        }
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});