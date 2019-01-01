Ext.define('ebmt.store.penerimamanfaat.Lembagas', {
    extend: 'ebmt.store.penerimamanfaat.Base',
    alias: 'store.penerimamanfaat.lembaga',
    requires: [
               'ebmt.model.penerimamanfaat.Lembaga'               
              ],
    restPath: '/api/PenerimaManfaatLembaga/index',
    storeId: 'PenerimaManfaatLembagas',
    model: 'ebmt.model.penerimamanfaat.Lembaga',
});

