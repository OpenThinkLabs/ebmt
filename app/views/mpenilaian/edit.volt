{{ content() }}
{{ form("mpenilaian/save", "method":"post") }}

<table width="100%">
    <tr>
        <td align="left">{{ link_to("mpenilaian", "Kembali") }}</td>
        <td align="right">{{ submit_button("Simpan") }}</td>
    <tr>
</table>

<div align="center">
    <h1>Edit Penilaian</h1>
</div>

<table>
    <tr>
        <td align="right">
            <label for="penilaian">Penilaian</label>
        </td>
        <td align="left">
            {{ text_field("penilaian", "size" : 30) }}
        </td>
    </tr>
    <tr>
        <td>{{ hidden_field("id") }}</td>
        <td>{{ submit_button("Simpan") }}</td>
    </tr>
</table>

</form>
