Ext.define('ebmt.store.master.lokasi.ComboBoxKotamadyaKabupatens', {
    extend: 'ebmt.store.master.Base',
    alias: 'store.master.lokasi.comboboxkotamadyakabupaten',
    requires: [
               'ebmt.model.master.LokasiKotamadyaKabupaten'               
              ],
    restPath: '/api/Lokasi?mode=combobox_kotamadya_kabupaten',
    storeId: 'LokasiKotamadyaKabupatens',
    model: 'ebmt.model.master.LokasiKotamadyaKabupaten'
});

