Ext.define('ebmt.view.master.sumberdana.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.master.sumberdana.list',
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
                          header: 'Sumber Dana',
                          dataIndex: 'sumber_dana',
                          locked   : false
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
                            text: 'Tambah Sumber Dana'
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