/**
 * Model representing a Asnaf object
 */
Ext.define('ebmt.model.master.KarakterProgram', {
    extend: 'ebmt.model.Base',    
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        {
            name: 'karakter_program',
            type: 'string'
        },
        {
            name: 'status',
            type: 'boolean'
        }
    ] 
});