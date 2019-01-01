Ext.define('ebmt.store.master.JenisKelamins', {
    extend: 'Ext.data.Store',
    alias: 'store.master.jeniskelamin',
    fields: ['kd_jenis_kelamin','jenis_kelamin'],
    data: [
           {"kd_jenis_kelamin":"L","jenis_kelamin":"Laki-Laki"},
           {"kd_jenis_kelamin":"P","jenis_kelamin":"Perempuan"}
          ]
});

