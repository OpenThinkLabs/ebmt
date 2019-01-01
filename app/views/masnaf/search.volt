
{{ content() }}

<table width="100%">
    <tr>
        <td align="left">
            {{ link_to("masnaf/index", "Kembali") }}
        </td>
        <td align="right">
            {{ link_to("masnaf/new", "Tambah Asnaf") }}
        </td>
    <tr>
</table>

<table class="table table-bordered table-striped table-condensed">
    <thead>
        <tr>
            <th>Id</th>
            <th>Asnaf</th>
            <th>Status</th>
            <th>Created</th>
            <th>Updated</th>
         </tr>
    </thead>
    <tbody>
    {% if page.items is defined %}
    {% for m_asnaf in page.items %}
        <tr>
            <td>{{ m_asnaf.getId() }}</td>
            <td>{{ m_asnaf.getAsnaf() }}</td>
            <td>{{ m_asnaf.getStatus() }}</td>
            <td>{{ m_asnaf.getCreatedAt() }}</td>
            <td>{{ m_asnaf.getUpdatedAt() }}</td>
            <td>{{ link_to("masnaf/edit/"~m_asnaf.getId(), "Edit") }}</td>
            <td>{{ link_to("masnaf/delete/"~m_asnaf.getId(), "Delete") }}</td>
        </tr>
    {% endfor %}
    {% endif %}
    </tbody>
    <tbody>
        <tr>
            <td colspan="2" align="right">
                <table align="center">
                    <tr>
                        <td>{{ link_to("masnaf/search", "First") }}</td>
                        <td>{{ link_to("masnaf/search?page="~page.before, "Previous") }}</td>
                        <td>{{ link_to("masnaf/search?page="~page.next, "Next") }}</td>
                        <td>{{ link_to("masnaf/search?page="~page.last, "Last") }}</td>
                        <td>{{ page.current~"/"~page.total_pages }}</td>
                    </tr>
                </table>
            </td>
        </tr>
    <tbody>
</table>
