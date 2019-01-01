
{{ content() }}

<div align="right">
    {{ link_to("mperihal/new", "Tambah Perihal") }}
</div>

{{ form("mperihal/search", "method":"post", "autocomplete" : "off") }}

<div align="center">
    <h1>Cari Perihal</h1>
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
        <td></td>
        <td>{{ submit_button("Cari") }}</td>
    </tr>
</table>

</form>
