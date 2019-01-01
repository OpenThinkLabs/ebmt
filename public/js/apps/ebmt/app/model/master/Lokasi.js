Ext.define('ebmt.model.master.Lokasi', {
	extend : 'Ext.data.Model',
	idProperty: 'id',
	fields : [ {
		name : 'id',
		type : 'string',
		mapping : 'id'
	}, {
		name : 'name',
		type : 'string',
		mapping : 'name'
	}, {
		name : 'leaf',
		type : 'boolean',
		mapping : 'leaf'
	},
	{
		name : 'lft',
		type : 'int',
		mapping : 'lft'
	},
	{
		name : 'rgt',
		type : 'int',
		mapping : 'rgt'
	},
	{
		name : 'lvl',
		type : 'int',
		mapping : 'lvl'
	}	
	]
});
