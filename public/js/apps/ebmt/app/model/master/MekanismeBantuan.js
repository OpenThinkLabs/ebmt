/**
 * Model representing a MekanismeBantuan object
 */
Ext.define('ebmt.model.master.MekanismeBantuan', {
    extend: 'ebmt.model.Base',    
    idProperty: 'id',
    fields: [
        {
            name: 'id',
            type: 'int',
            useNull : true
        },
        {
            name: 'mekanisme_bantuan',
            type: 'string'
        },
        {
            name: 'status',
            type: 'boolean'
        }
    ] 
});