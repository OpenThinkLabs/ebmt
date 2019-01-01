
{{ content() }}

<div align="right">
    {{ link_to("mmekanismebantuan/new", "Tambah Mekanisme Bantuan") }}
</div>

{{ form("mmekanismebantuan/search", "method":"post", "autocomplete" : "off") }}

<div align="center">
    <h1>Cari Mekanisme Bantuan</h1>
</div>

<table>
    <tr>
        <td align="right">
            <label for="mekanisme_bantuan">Mekanisme Bantuan</label>
        </td>
        <td align="left">
            {{ text_field("mekanisme_bantuan", "size" : 30) }}
        </td>
    </tr>
    <tr>
        <td></td>
        <td>{{ submit_button("Cari") }}</td>
    </tr>
</table>

</form>
