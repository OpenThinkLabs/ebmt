Ext.define('ebmt.store.master.lokasi.ComboBoxKelurahanDesas', {
    extend: 'ebmt.store.master.Base',
    alias: 'store.master.lokasi.comboboxkelurahandesa',
    requires: [
               'ebmt.model.master.LokasiKelurahanDesa'               
              ],
    restPath: '/api/Lokasi?mode=combobox_kelurahan_desa',
    storeId: 'LokasiKelurahanDesas',
    model: 'ebmt.model.master.LokasiKelurahanDesa'
});

