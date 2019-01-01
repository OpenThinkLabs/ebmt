
{{ content() }}

<table width="100%">
    <tr>
        <td align="left">
            {{ link_to("msumberdana/index", "Kembali") }}
        </td>
        <td align="right">
            {{ link_to("msumberdana/new", "Tambah Sumber Dana") }}
        </td>
    <tr>
</table>

<table class="table table-bordered table-striped table-condensed">
    <thead>
        <tr>
            <th>ID</th>
            <th>Sumber Dana</th>
            <th>Status</th>
            <th>Created</th>
            <th>Updated</th>
         </tr>
    </thead>
    <tbody>
    {% if page.items is defined %}
    {% for m_sumber_dana in page.items %}
        <tr>
            <td>{{ m_sumber_dana.getId() }}</td>
            <td>{{ m_sumber_dana.getSumberDana() }}</td>
            <td>{{ m_sumber_dana.getStatus() }}</td>
            <td>{{ m_sumber_dana.getCreatedAt() }}</td>
            <td>{{ m_sumber_dana.getUpdatedAt() }}</td>
            <td>{{ link_to("msumberdana/edit/"~m_sumber_dana.getId(), "Edit") }}</td>
            <td>{{ link_to("msumberdana/delete/"~m_sumber_dana.getId(), "Delete") }}</td>
        </tr>
    {% endfor %}
    {% endif %}
    </tbody>
    <tbody>
        <tr>
            <td colspan="2" align="right">
                <table align="center">
                    <tr>
                        <td>{{ link_to("msumberdana/search", "First") }}</td>
                        <td>{{ link_to("msumberdana/search?page="~page.before, "Previous") }}</td>
                        <td>{{ link_to("msumberdana/search?page="~page.next, "Next") }}</td>
                        <td>{{ link_to("msumberdana/search?page="~page.last, "Last") }}</td>
                        <td>{{ page.current~"/"~page.total_pages }}</td>
                    </tr>
                </table>
            </td>
        </tr>
    <tbody>
</table>
