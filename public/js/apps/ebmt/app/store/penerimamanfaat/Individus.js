Ext.define('ebmt.store.penerimamanfaat.Individus', {
    extend: 'ebmt.store.penerimamanfaat.Base',
    alias: 'store.penerimamanfaat.individu',
    requires: [
               'ebmt.model.penerimamanfaat.Individu'               
              ],
    restPath: '/api/PenerimaManfaatIndividu/index',
    storeId: 'PenerimaManfaatIndividus',
    model: 'ebmt.model.penerimamanfaat.Individu',
});

