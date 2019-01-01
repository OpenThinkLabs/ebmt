/**
 * Model representing a Penilaian object
 */
Ext.define('ebmt.model.master.Penilaian', {
    extend: 'ebmt.model.Base',    
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        {
            name: 'penilaian',
            type: 'string'
        },
        {
            name: 'status',
            type: 'boolean'
        }
    ] 
});