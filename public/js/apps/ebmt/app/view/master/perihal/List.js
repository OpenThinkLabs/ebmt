Ext.define('ebmt.view.master.perihal.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.master.perihal.list',
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
                          header: 'Perihal',
                          dataIndex: 'perihal',
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
                            text: 'Tambah Perihal'
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