/**
* {@link Ext.data.Model} for Security User
*/
Ext.define('ebmt.model.security.User', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'username',
            type: 'string'
        },
        {
            name: 'password',
            type: 'string'
        },
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },        
        {
            name: 'active',
            type: 'integer'
        },        
        {
            name: 'Roles',
            type: 'any',
            persist: false
        }
    ],
    inRole: function( RoleID ) {
        var me = this;
        return Ext.Array.contains( me.get( 'Roles' ), RoleID );
    }
});