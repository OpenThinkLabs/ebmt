
{{ content() }}

<table width="100%">
    <tr>
        <td align="left">
            {{ link_to("mpenilaian/index", "Kembali") }}
        </td>
        <td align="right">
            {{ link_to("mpenilaian/new", "Tambah Penilaian") }}
        </td>
    <tr>
</table>

<table class="table table-bordered table-striped table-condensed">
    <thead>
        <tr>
            <th>ID</th>
            <th>Penilaian</th>
            <th>Status</th>
            <th>Created</th>
            <th>Updated</th>
         </tr>
    </thead>
    <tbody>
    {% if page.items is defined %}
    {% for m_penilaian in page.items %}
        <tr>
            <td>{{ m_penilaian.getId() }}</td>
            <td>{{ m_penilaian.getPenilaian() }}</td>
            <td>{{ m_penilaian.getStatus() }}</td>
            <td>{{ m_penilaian.getCreatedAt() }}</td>
            <td>{{ m_penilaian.getUpdatedAt() }}</td>
            <td>{{ link_to("mpenilaian/edit/"~m_penilaian.getId(), "Edit") }}</td>
            <td>{{ link_to("mpenilaian/delete/"~m_penilaian.getId(), "Delete") }}</td>
        </tr>
    {% endfor %}
    {% endif %}
    </tbody>
    <tbody>
        <tr>
            <td colspan="2" align="right">
                <table align="center">
                    <tr>
                        <td>{{ link_to("mpenilaian/search", "First") }}</td>
                        <td>{{ link_to("mpenilaian/search?page="~page.before, "Previous") }}</td>
                        <td>{{ link_to("mpenilaian/search?page="~page.next, "Next") }}</td>
                        <td>{{ link_to("mpenilaian/search?page="~page.last, "Last") }}</td>
                        <td>{{ page.current~"/"~page.total_pages }}</td>
                    </tr>
                </table>
            </td>
        </tr>
    <tbody>
</table>
