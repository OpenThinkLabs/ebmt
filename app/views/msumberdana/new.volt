{{ form("msumberdana/create", "method":"post") }}

<table width="100%">
    <tr>
        <td align="left">{{ link_to("m_sumber_dana", "Kembali") }}</td>
        <td align="right">{{ submit_button("Simpan") }}</td>
    <tr>
</table>

{{ content() }}

<div align="center">
    <h1>Tambah Sumber Dana</h1>
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
        <td></td>
        <td>{{ submit_button("Cari") }}</td>
    </tr>
</table>

</form>
