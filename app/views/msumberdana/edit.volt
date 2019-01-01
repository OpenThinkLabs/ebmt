{{ content() }}
{{ form("msumberdana/save", "method":"post") }}

<table width="100%">
    <tr>
        <td align="left">{{ link_to("msumberdana", "Kembali") }}</td>
        <td align="right">{{ submit_button("Simpan") }}</td>
    <tr>
</table>

<div align="center">
    <h1>Edit Sumber Dana</h1>
</div>

<table>
    <tr>
        <td align="right">
            <label for="sumber_dana">Sumber Dana</label>
        </td>
        <td align="left">
            {{ text_field("sumber_dana", "size" : 30) }}
        </td>
    </tr>
    <tr>
        <td>{{ hidden_field("id") }}</td>
        <td>{{ submit_button("Simpan") }}</td>
    </tr>
</table>

</form>
