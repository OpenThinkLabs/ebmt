
{{ form("mkarakterprogram/create", "method":"post") }}

<table width="100%">
    <tr>
        <td align="left">{{ link_to("mkarakterprogram", "Go Back") }}</td>
        <td align="right">{{ submit_button("Save") }}</td>
    <tr>
</table>

{{ content() }}

<div align="center">
    <h1>Tambah Karakter Program</h1>
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
        <td></td>
        <td>{{ submit_button("Search") }}</td>
    </tr>
</table>

</form>
