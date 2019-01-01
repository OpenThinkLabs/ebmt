Ext.define('ebmt.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'Ext.layout.container.Fit',
        'ebmt.view.Main'
    ],

    layout: {
        type: 'fit',
    },
    
    items: [{
        xtype: 'app-main'
    }]
});
