Ext.define('ebmt.store.penerimamanfaat.Ajuans', {
    extend: 'ebmt.store.Base',
    alias: 'store.penerimamanfaat.ajuan',
    requires: [
               'ebmt.model.penerimamanfaat.Ajuan'               
              ],
    restPath: '/api/AjuanPenerimaManfaat/index',
    storeId: 'PenerimaManfaatAjuans',
    model: 'ebmt.model.penerimamanfaat.Ajuan'
});

