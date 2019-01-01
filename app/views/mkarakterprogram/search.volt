
{{ content() }}

<table width="100%">
    <tr>
        <td align="left">
            {{ link_to("mkarakterprogram/index", "Kembali") }}
        </td>
        <td align="right">
            {{ link_to("mkarakterprogram/new", "Tambah Karakter Program") }}
        </td>
    <tr>
</table>

<table class='table table-bordered table-striped table-condensed'>
    <thead>
        <tr>
            <th>ID</th>
            <th>Karakter Program</th>
            <th>Created</th>
            <th>Updated</th>
         </tr>
    </thead>
    <tbody>
    {% if page.items is defined %}
    {% for m_karakter_program in page.items %}
        <tr>
            <td>{{ m_karakter_program.getId() }}</td>
            <td>{{ m_karakter_program.getKarakterProgram() }}</td>
            <td>{{ m_karakter_program.getCreatedAt() }}</td>
            <td>{{ m_karakter_program.getUpdatedAt() }}</td>
            <td>{{ link_to("mkarakterprogram/edit/"~m_karakter_program.getId(), "Edit") }}</td>
            <td>{{ link_to("mkarakterprogram/delete/"~m_karakter_program.getId(), "Delete") }}</td>
        </tr>
    {% endfor %}
    {% endif %}
    </tbody>
    <tbody>
        <tr>
            <td colspan="2" align="right">
                <table align="center">
                    <tr>
                        <td>{{ link_to("mkarakterprogram/search", "First") }}</td>
                        <td>{{ link_to("mkarakterprogram/search?page="~page.before, "Previous") }}</td>
                        <td>{{ link_to("mkarakterprogram/search?page="~page.next, "Next") }}</td>
                        <td>{{ link_to("mkarakterprogram/search?page="~page.last, "Last") }}</td>
                        <td>{{ page.current~"/"~page.total_pages }}</td>
                    </tr>
                </table>
            </td>
        </tr>
    <tbody>
</table>
