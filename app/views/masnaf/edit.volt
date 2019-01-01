{{ content() }}
{{ form("masnaf/save", "method":"post") }}

<table width="100%">
    <tr>
        <td align="left">{{ link_to("masnaf", "Kembali") }}</td>
        <td align="right">{{ submit_button("Simpan") }}</td>
    <tr>
</table>

<div align="center">
    <h1>Edit Asnaf</h1>
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
        <td>{{ hidden_field("id") }}</td>
        <td>{{ submit_button("Simpan") }}</td>
    </tr>
</table>

</form>
