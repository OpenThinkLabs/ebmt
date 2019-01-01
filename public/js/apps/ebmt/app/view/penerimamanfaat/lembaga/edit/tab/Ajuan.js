Ext.define('ebmt.view.penerimamanfaat.lembaga.edit.tab.Ajuan', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.penerimamanfaat.lembaga.edit.tab.ajuan',
    requires: [
        'Ext.grid.column.Boolean',
        'Ext.grid.column.Date'
    ],
    title: 'Manajemen Ajuan',
    iconCls: 'icon_penerima_manfaat_ajuan',
    store: 'ebmt.store.penerimamanfaat.Ajuans',
    autoScroll:true,
    id: 'ajuans',
    initComponent: function() {
        var me = this;
        Ext.applyIf(me,{
            columns: {
                defaults: {},
                items: [
                        {
                            header: 'Tanggal Ajuan',
                            dataIndex: 'tgl_masuk',
                            width    : 110,
                            filterable :true,
                            renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                            locked   : true
                        },
                        {
                            header: 'Deskripsi Ajuan',
                            dataIndex: 'catatan',
                            width    : 180,
                            filterable :true,
                            locked   : true
                        },
                        {
                            header: 'Karakter Program',
                            dataIndex: '_KarakterProgram',
                            width    : 120,
                            filterable :true
                        },
                        {
                            header: 'Asnaf',
                            dataIndex: '_Asnaf',
                            width    : 100,
                            filterable :true
                        },
                        {
                            header: 'Tanggal Persetujuan',
                            dataIndex: 'tgl_disetujui',
                            width    : 140,
                            filterable :true,
                            renderer: Ext.util.Format.dateRenderer('d/m/Y')
                        },
                        {
                            header: 'Nominal Usulan',
                            dataIndex: 'nilai_bantuan_usulan',
                            width    : 120,
                            filterable :true
                        },
                        {
                            header: 'Nominal Disetujui',
                            dataIndex: 'nilai_bantuan_disetujui',
                            width    : 120,
                            filterable :true
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
                    store: 'ebmt.store.penerimamanfaat.Ajuans'
                }
            ]
        });
        me.callParent( arguments );
        //me.on('render', this.loadStore, this);
    }
    //loadStore: function() {
    //    this.getStore().load({ params: { 'kode_mustahik': 'kode_mustahik' } });
    //}
});