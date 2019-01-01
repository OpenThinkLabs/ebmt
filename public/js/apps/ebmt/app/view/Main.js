Ext.define('ebmt.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'ebmt.view.layout.North',
        'ebmt.view.layout.West',
        'ebmt.view.layout.Center'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [
                   {xtype: 'layout.north'},
                   {xtype: 'layout.west'},
                   {xtype: 'layout.center'}
           ]
});