
{{ form("mmekanismebantuan/create", "method":"post") }}

<table width="100%">
    <tr>
        <td align="left">{{ link_to("mmekanismebantuan", "Kembali") }}</td>
        <td align="right">{{ submit_button("Simpan") }}</td>
    <tr>
</table>

{{ content() }}

<div align="center">
    <h1>Tambah Mekanisme Bantuan</h1>
</div>

<table>
    <tr>
        <td align="right">
            <label for="mekanisme_bantuan">Mekanisme Bantuan</label>
        </td>
        <td align="left">
            {{ text_field("mekanisme_bantuan", "size" : 30) }}
        </td>
    </tr>
    <tr>
        <td></td>
        <td>{{ submit_button("Cari") }}</td>
    </tr>
</table>

</form>
