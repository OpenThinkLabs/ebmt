Ext.define('ebmt.view.penerimamanfaat.lembaga.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.penerimamanfaat.lembaga.list',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date'
    ],
    initComponent: function() {
        var me = this;
        Ext.applyIf(me,{
            columns: {
                defaults: {},
                items: [
                        {
                            header: 'Kode Mustahik',
                            dataIndex: 'kode_mustahik',
                            width    : 180,
                            locked   : true,
                            filterable    :true
                        },
                        {
                              header: 'Nama Lembaga',
                              dataIndex: 'nama_kk',
                              width    : 180,
                              locked   : false,
                              editor: {
                                  xtype: 'textfield',
                                  allowBlank: true
                              }
                        },                                                    
                        {
                             header: 'Nama Pemohon',
                             dataIndex: 'nama_pemohon',
                             width    : 200,
                             locked   : true,
                             editor: {
                                 xtype: 'textfield',
                                 allowBlank: false
                             }                             
                         },                          
                          {
                             header: 'Jalan',
                             dataIndex: 'jalan',
                             width    : 300
                          },
                          {
                             header: 'Alamat',
                             dataIndex: 'alamat',
                             width    : 400
                          },
                          {
                             header: 'Keterangan',
                             dataIndex: 'keterangan' 	       	    	
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
                            text: 'Tambah'
                        },
                        '-',
                        {
                            xtype: 'button',
                            itemId: 'search',
                            iconCls: 'icon_search',
                            text: 'Cari'
                        },
                        '-',
                        {
                            xtype: 'button',
                            itemId: 'clear',
                            iconCls: 'icon_delete',
                            text: 'Bersihkan Pencarian'
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