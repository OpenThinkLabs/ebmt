{{ content() }}

<table width="100%">
    <tr>
        <td align="left">
            {{ link_to("mperihal/index", "Kembali") }}
        </td>
        <td align="right">
            {{ link_to("mperihal/new", "Tambah Perihal") }}
        </td>
    <tr>
</table>

<table class="table table-bordered table-striped table-condensed">
    <thead>
        <tr>
            <th>ID</th>
            <th>Perihal</th>
            <th>Status</th>
            <th>Created</th>
            <th>Updated</th>
         </tr>
    </thead>
    <tbody>
    {% if page.items is defined %}
    {% for m_perihal in page.items %}
        <tr>
            <td>{{ m_perihal.getId() }}</td>
            <td>{{ m_perihal.getPerihal() }}</td>
            <td>{{ m_perihal.getStatus() }}</td>
            <td>{{ m_perihal.getCreatedAt() }}</td>
            <td>{{ m_perihal.getUpdatedAt() }}</td>
            <td>{{ link_to("mperihal/edit/"~m_perihal.getId(), "Edit") }}</td>
            <td>{{ link_to("mperihal/delete/"~m_perihal.getId(), "Delete") }}</td>
        </tr>
    {% endfor %}
    {% endif %}
    </tbody>
    <tbody>
        <tr>
            <td colspan="2" align="right">
                <table align="center">
                    <tr>
                        <td>{{ link_to("m_perihal/search", "First") }}</td>
                        <td>{{ link_to("m_perihal/search?page="~page.before, "Previous") }}</td>
                        <td>{{ link_to("m_perihal/search?page="~page.next, "Next") }}</td>
                        <td>{{ link_to("m_perihal/search?page="~page.last, "Last") }}</td>
                        <td>{{ page.current~"/"~page.total_pages }}</td>
                    </tr>
                </table>
            </td>
        </tr>
    <tbody>
</table>
