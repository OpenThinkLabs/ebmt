Ext.define('ebmt.view.master.karakterprogram.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.master.karakterprogram.list',
    requires: [
        'Ext.grid.column.Boolean'
    ],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me,{
            columns: {
                defaults: {},
                items: [
                        {
                          header: 'ID',
                          dataIndex: 'id',
                          locked   : false,
                          filterable    :true
                        },
                        {
                          header: 'Karakter Program',
                          dataIndex: 'karakter_program',
                          locked   : false,
                          width    : 200
                        },
                        {
                          header: 'Status',
                          dataIndex: 'status',
                          locked   : false
                        }                        
                ]
            },
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'tambah',
                            iconCls: 'icon_add',
                            text: 'Tambah Karakter Program'
                        }
                    ]
                },
                {
                    xtype: 'pagingtoolbar',
                    ui: 'footer',
                    defaultButtonUI: 'default',
                    dock: 'bottom',
                    displayInfo: true,
                    store: me.getStore()
                }
            ]
        });
        me.callParent( arguments );
    } 
});