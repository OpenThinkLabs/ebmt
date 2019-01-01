
{{ content() }}

<div align="right">
    {{ link_to("mpenilaian/new", "Tambah Penilaian") }}
</div>

{{ form("mpenilaian/search", "method":"post", "autocomplete" : "off") }}

<div align="center">
    <h1>Cari Penilaian</h1>
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
