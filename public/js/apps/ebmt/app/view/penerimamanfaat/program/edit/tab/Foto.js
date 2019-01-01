/**
 * Panel untuk menampilkan foto {@link ebmt.model.penerimamanfaat.program} 
 */
Ext.define('ebmt.view.penerimamanfaat.program.edit.tab.Foto', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.penerimamanfaat.program.edit.tab.foto',
    bodyPadding: 10,
    margin:-5,
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'dataview',
                    itemId: 'images',
                    tpl: [
                        '<tpl for=".">',
                            '<div class="thumb-wrap">',
                                '<div class="thumb"><img src="/files/foto_pemohon/{foto_pemohon}"></div>',
                            '</div>',
                        '</tpl>',
                        '<div class="x-clear"></div>'
                    ],
                    overItemCls: 'x-item-over',
                    itemSelector: 'div.thumb-wrap',
                    emptyText: 'Tidak ada foto untuk ditampilkan',
                    store: Ext.create('Ext.data.Store', {
                        fields: [ 'foto_pemohon' ]
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
                                    name: 'foto_pemohon',
                                    fieldLabel: 'Upload Foto',
                                    allowBlank: false, 
                                    fieldWidth: 300,
                                    buttonConfig: {
                                        iconCls: 'icon_picture',
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