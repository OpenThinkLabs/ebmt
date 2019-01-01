Ext.define('ebmt.store.master.lokasi.ComboBoxKecamatans', {
    extend: 'ebmt.store.master.Base',
    alias: 'store.master.lokasi.comboboxkecamatan',
    requires: [
               'ebmt.model.master.LokasiKecamatan'               
              ],
    restPath: '/api/Lokasi?mode=combobox_kecamatan',
    storeId: 'LokasiKecamatans',
    model: 'ebmt.model.master.LokasiKecamatan'
});

