<div class="page-header">
  <h1>Asnaf</h1>
</div>

{{ content() }}

<div align="right">
    {{ link_to("masnaf/new", "Tambah masnaf") }}
</div>

{{ form("masnaf/search", "method":"post", "autocomplete" : "off") }}

<div align="center">
    <h1>Cari Asnaf</h1>
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
        <td></td>
        <td>{{ submit_button("Cari") }}</td>
    </tr>
</table>

</form>
