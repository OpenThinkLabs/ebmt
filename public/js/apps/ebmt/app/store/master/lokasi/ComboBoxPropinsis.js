Ext.define('ebmt.store.master.lokasi.ComboBoxPropinsis', {
    extend: 'ebmt.store.master.Base',
    alias: 'store.master.lokasi.comboboxpropinsi',
    requires: [
               'ebmt.model.master.LokasiPropinsi'               
              ],
    restPath: '/api/Lokasi?mode=combobox_propinsi',
    storeId: 'LokasiComboBoxPropinsis',
    model: 'ebmt.model.master.LokasiPropinsi',
    autoLoad:true
});

