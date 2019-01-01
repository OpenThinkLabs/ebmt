/**
 * Model representing a SumberDana object
 */
Ext.define('ebmt.model.master.SumberDana', {
    extend: 'ebmt.model.Base',    
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        {
            name: 'sumber_dana',
            type: 'string'
        },
        {
            name: 'status',
            type: 'boolean'
        }
    ] 
});