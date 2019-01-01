/**
 * Model representing a Asnaf object
 */
Ext.define('ebmt.model.master.Asnaf', {
    extend: 'ebmt.model.Base',    
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        {
            name: 'asnaf',
            type: 'string'
        },
        {
            name: 'status',
            type: 'boolean'
        }
    ] 
});