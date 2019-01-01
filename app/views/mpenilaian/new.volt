{{ form("mpenilaian/create", "method":"post") }}

<table width="100%">
    <tr>
        <td align="left">{{ link_to("mpenilaian", "Kembali") }}</td>
        <td align="right">{{ submit_button("Simpan") }}</td>
    <tr>
</table>

{{ content() }}

<div align="center">
    <h1>Tambah Penilaian</h1>
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
        <td></td>
        <td>{{ submit_button("Cari") }}</td>
    </tr>
</table>

</form>
