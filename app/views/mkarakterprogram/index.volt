<div class="page-header">
  <h1>Karakter Program</h1>
</div>

{{ content() }}

<div align="right">
    {{ link_to("mkarakterprogram/new", "Tambah Karakter Program") }}
</div>

{{ form("mkarakterprogram/search", "method":"post", "autocomplete" : "off") }}

<div align="center">
    <h1>Cari Karakter Program</h1>
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
        <td>{{ submit_button("Cari") }}</td>
    </tr>
</table>

</form>
