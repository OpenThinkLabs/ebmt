Ext.define('ebmt.store.penerimamanfaat.Programs', {
    extend: 'ebmt.store.penerimamanfaat.Base',
    alias: 'store.penerimamanfaat.program',
    requires: [
               'ebmt.model.penerimamanfaat.Program'               
              ],
    restPath: '/api/PenerimaManfaatProgram/index',
    storeId: 'PenerimaManfaatPrograms',
    model: 'ebmt.model.penerimamanfaat.Program',
});

