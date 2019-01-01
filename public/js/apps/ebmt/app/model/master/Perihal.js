/**
 * Model representing a Perihal object
 */
Ext.define('ebmt.model.master.Perihal', {
    extend: 'ebmt.model.Base',    
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        {
            name: 'perihal',
            type: 'string'
        },
        {
            name: 'status',
            type: 'boolean'
        }
    ] 
});