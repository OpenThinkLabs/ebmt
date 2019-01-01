Ext.define('ebmt.view.layout.Menu', {
    extend: 'Ext.menu.Menu',
    alias: 'widget.layout.menu',
    floating: false,
    initComponent: function(){
        var me = this;
        Ext.applyIf(me,{
            items: [
                {
                    text: 'Penerima Manfaat',
                    itemId: 'penerima_manfaat',
                    iconCls: 'icon_penerima_manfaat',
                    menu: [
                           {
                        	 text: 'Penerima Manfaat Individu',
                        	 itemId: 'penerima_manfaat/individu',
                        	 iconCls: 'icon_penerima_manfaat_individu'
                           },
                           {
                             text: 'Penerima Manfaat Lembaga',
                             itemId: 'penerima_manfaat/lembaga',
                             iconCls: 'icon_penerima_manfaat_lembaga'                        	   
                           },
                           {
                               text: 'Penerima Manfaat by Program',
                               itemId: 'penerima_manfaat/program',
                               iconCls: 'icon_penerima_manfaat_program'                        	   
                           }                           
                          ]
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Laporan',
                    itemId: 'laporan',
                    iconCls: 'icon_laporan',
                    menu: [
                           {
                          	 text: 'Jumlah Penerima Manfaat Total Mingguan',
                          	 itemId: 'laporan/jumlahpenerimamanfaattotalmingguan',
                          	 iconCls: 'icon_laporan_jumlah_penerima_manfaat_total_mingguan'
                           },
                           {
                             text: 'Jumlah Penerima Manfaat Per Kategori Program',
                             itemId: 'laporan/jumlahpenerimamanfaatperkategoriprogram',
                             iconCls: 'icon_laporan_jumlah_penerima_manfaat_per_kategori_program'
                           },
                           {
                             text: 'Jumlah Penerima Manfaat Per Asnaf',
                             itemId: 'laporan/jumlahpenerimamanfaatperasnaf',
                             iconCls: 'icon_laporan_jumlah_penerima_manfaat_per_asnaf'
                           },
                           {
                             text: 'Jumlah Penerima Manfaat Per Unit/Kepala dan Per Kepala Keluarga',
                             itemId: 'laporan/jumlahpenerimamanfaatperunitkepaladanperkepalakeluarga',
                             iconCls: 'icon_laporan_jumlah_penerima_manfaat_per_unitkepaladanperkepalakeluarga'
                           },
                           {
                             text: 'Grafik',
                             itemId: 'laporan/grafik',
                             iconCls: 'icon_master_grafik'
                           },                           
                           {
                             text: 'Chart Pie Asnaf dan Karakter Program',
                             itemId: 'laporan/chartpieasnafdankarakterprogram',
                             iconCls: 'icon_laporan_chat_pie_asnaf_dan_karakter_program'
                           },                                                      
                           {
                             text: 'Peta Sebaran Penerima Manfaat',
                             itemId: 'laporan/petasebaranpenerimamanfaat',
                             iconCls: 'icon_laporan_peta_sebaran_penerima_manfaat'
                           },                                                                                 
                           {
                             text: 'Export',
                             itemId: 'laporan/export',
                             iconCls: 'icon_laporan_export'
                           },                                                                                                            
                          ]
                },
                {
                	xtype: 'menuseparator'
                },
                {
                    text: 'Data Master',
                    itemId: 'master',
                    iconCls: 'icon_data_master',
                    menu: [
                           {
                        	 text: 'Asnaf',
                        	 itemId: 'master/asnaf',
                        	 iconCls: 'icon_master_asnaf'
                           },
                           {
                             text: 'Karakter Program',
                             itemId: 'master/karakterprogram',
                             iconCls: 'icon_master_karakterprogram'                        	   
                           },
                           {
                             text: 'Lokasi',
                             itemId: 'master/lokasi',
                             iconCls: 'icon_master_lokasi'                        	   
                           },                           
                           {
                             text: 'Mekanisme Bantuan',
                             itemId: 'master/mekanismebantuan',
                             iconCls: 'icon_master_mekanisme_bantuan'                        	   
                           },                                                      
                           {
                             text: 'Penilaian',
                             itemId: 'master/penilaian',
                             iconCls: 'icon_master_penilaian'                        	   
                           },
                           {
                               text: 'Perihal',
                               itemId: 'master/perihal',
                               iconCls: 'icon_master_perihal'                        	   
                           },                                                                                                            
                           {
                               text: 'Sumber Dana',
                               itemId: 'master/sumberdana',
                               iconCls: 'icon_master_sumberdana'                        	   
                           },                                                                                                                                       
                          ]
                },
                {
                    xtype: 'menuseparator'
                },
                {
                    text: 'Logout',
                    itemId: 'logout',
                    iconCls: 'icon_login'
                }                
            ]
        });
        me.callParent( arguments );
    } 
});