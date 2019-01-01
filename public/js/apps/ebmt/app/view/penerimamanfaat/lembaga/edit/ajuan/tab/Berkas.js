/**
 * Panel untuk menampilkan berkas-berkas ajuan {@link ebmt.model.penerimamanfaat.lembaga} 
 */
Ext.define('ebmt.view.penerimamanfaat.lembaga.edit.ajuan.tab.Berkas', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.penerimamanfaat.lembaga.edit.ajuan.tab.berkas',
    bodyPadding: 10,
    margin:-5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'dataview',
                    itemId: 'berkas',
                    tpl: [
                        '<tpl for=".">',
                            '<div class="thumb-wrap">',
                                '<div class="thumb"><img src="/files/berkas_ajuan/{berkas_ajuan}"></div>',
                            '</div>',
                        '</tpl>',
                        '<div class="x-clear"></div>'
                    ],
                    overItemCls: 'x-item-over',
                    itemSelector: 'div.thumb-wrap',
                    emptyText: 'Tidak ada berkas untuk ditampilkan',
                    store: Ext.create('Ext.data.Store', {
                        fields: [ 'berkas_ajuan' ]
                    })
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'top',
                    ui: 'footer',
                    items: [
                        {
                            xtype: 'form',
                            itemId: 'uploadform',
                            border: false,
                            frame: false,
                            bodyPadding:0,
                            margins: '0 0 -5 0',
                            baseCls: 'x-plain',
                            items: [
                                {
                                    xtype: 'filefield',
                                    name: 'berkas_ajuan',
                                    fieldLabel: 'Upload Berkas',
                                    allowBlank: false, 
                                    fieldWidth: 300,
                                    buttonConfig: {
                                        iconCls: 'icon_berkas',
                                        text: ''
                                    },
                                    labelAlign: 'left'
                                }
                            ]
                        },
                        {
                            xtype: 'button',
                            itemId: 'upload',
                            text: 'Upload'
                        }
                    ]
                }
            ]
        });
        me.callParent( arguments );
    }
})