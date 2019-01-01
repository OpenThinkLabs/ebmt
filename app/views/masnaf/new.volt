
{{ form("masnaf/create", "method":"post") }}

<table width="100%">
    <tr>
        <td align="left">{{ link_to("masnaf", "Kembali") }}</td>
        <td align="right">{{ submit_button("Simpan") }}</td>
    <tr>
</table>

{{ content() }}

<div align="center">
    <h1>Tambah Asnaf</h1>
</div>

<table>
    <tr>
        <td align="right">
            <label for="asnaf">Asnaf</label>
        </td>
        <td align="left">
            {{ text_field("asnaf", "size" : 30) }}
        </td>
    </tr>
    <tr>
        <td></td>
        <td>{{ submit_button("Cari") }}</td>
    </tr>
</table>

</form>
