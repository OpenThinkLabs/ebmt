{{ content() }}
{{ form("mkarakterprogram/save", "method":"post") }}

<table width="100%">
    <tr>
        <td align="left">{{ link_to("mkarakterprogram", "Kembali") }}</td>
        <td align="right">{{ submit_button("Simpan") }}</td>
    <tr>
</table>

<div align="center">
    <h1>Edit Karakter Program</h1>
</div>

<table>
    <tr>
        <td align="right">
            <label for="karakter_program">Karakter Program</label>
        </td>
        <td align="left">
            {{ text_field("karakter_program", "size" : 30) }}
        </td>
    </tr>
    <tr>
        <td>{{ hidden_field("id") }}</td>
        <td>{{ submit_button("Simpan") }}</td>
    </tr>
</table>

</form>
