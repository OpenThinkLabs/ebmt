Ext.define('ebmt.store.master.lokasi.ComboBoxs', {
    extend: 'ebmt.store.master.Base',
    alias: 'store.master.lokasi.combobox',
    requires: [
               'ebmt.model.master.Lokasi'               
              ],
    restPath: '/api/Lokasi?mode=combobox',
    storeId: 'LokasiComboBoxs',
    model: 'ebmt.model.master.Lokasi',
    autoLoad:true
});

