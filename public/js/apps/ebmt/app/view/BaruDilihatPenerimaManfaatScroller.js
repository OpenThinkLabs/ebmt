var baruDilihatTpl = new Ext.XTemplate(
    '<tpl for=".">',
        '<div>',
          '<br/><span>{nama_lengkap}</span>',
        '</div>',
    '</tpl>'
);


Ext.define('ebmt.view.BaruDilihatPenerimaManfaatScroller', {
    extend: 'Ext.view.View',
    alias: 'widget.barudilihatpenerimamanfaatscroller',
    tpl: baruDilihatTpl,
    store: 'BaruDilihatPenerimaManfaats'
});