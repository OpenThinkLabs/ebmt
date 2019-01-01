{{ content() }}
{{ form("mperihal/save", "method":"post") }}

<table width="100%">
    <tr>
        <td align="left">{{ link_to("mperihal", "Kembali") }}</td>
        <td align="right">{{ submit_button("Simpan") }}</td>
    <tr>
</table>

<div align="center">
    <h1>Edit Perihal</h1>
</div>

<table>
    <tr>
        <td align="right">
            <label for="perihal">Perihal</label>
        </td>
        <td align="left">
            {{ text_field("perihal", "size" : 30) }}
        </td>
    </tr>
    <tr>
        <td>{{ hidden_field("id") }}</td>
        <td>{{ submit_button("Save") }}</td>
    </tr>
</table>

</form>
