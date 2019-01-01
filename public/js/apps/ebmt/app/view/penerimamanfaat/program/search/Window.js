/**
 * Window for searching {@link ebmt.model.penerimamanfaat.Program} records
 */
Ext.define('ebmt.view.penerimamanfaat.program.search.Window', {
    extend: 'Ext.window.Window',
    alias: 'widget.penerimamanfaat.program.search.window',
    requires: [
        'ebmt.view.penerimamanfaat.program.search.Form'
    ],
    iconCls: 'icon_search',
    width: 600,
    modal: true,
    resizable: true,
    draggable: true,
    constrainHeader: true,
    bodyPadding: 10, 
    layout: 'fit',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'penerimamanfaat.program.search.form'
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
                            text: 'Batal',
                            iconCls: 'icon_delete'
                        },
                        '->',
                        {
                            xtype: 'button',
                            itemId: 'cari',
                            text: 'Cari',
                            iconCls: 'icon_search'
                        }
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
});