
{{ content() }}

<table width="100%">
    <tr>
        <td align="left">
            {{ link_to("mmekanismebantuan/index", "Kembali") }}
        </td>
        <td align="right">
            {{ link_to("mmekanismebantuan/new", "Tambah Mekanisme Bantuan ") }}
        </td>
    <tr>
</table>

<table class="table table-bordered table-striped table-condensed">
    <thead>
        <tr>
            <th>ID</th>
            <th>Mekanisme Bantuan</th>
            <th>Status</th>
            <th>Created</th>
            <th>Updated</th>
         </tr>
    </thead>
    <tbody>
    {% if page.items is defined %}
    {% for m_mekanisme_bantuan in page.items %}
        <tr>
            <td>{{ m_mekanisme_bantuan.getId() }}</td>
            <td>{{ m_mekanisme_bantuan.getMekanismeBantuan() }}</td>
            <td>{{ m_mekanisme_bantuan.getStatus() }}</td>
            <td>{{ m_mekanisme_bantuan.getCreatedAt() }}</td>
            <td>{{ m_mekanisme_bantuan.getUpdatedAt() }}</td>
            <td>{{ link_to("m_mekanisme_bantuan/edit/"~m_mekanisme_bantuan.getId(), "Edit") }}</td>
            <td>{{ link_to("m_mekanisme_bantuan/delete/"~m_mekanisme_bantuan.getId(), "Delete") }}</td>
        </tr>
    {% endfor %}
    {% endif %}
    </tbody>
    <tbody>
        <tr>
            <td colspan="2" align="right">
                <table align="center">
                    <tr>
                        <td>{{ link_to("mmekanismebantuan/search", "First") }}</td>
                        <td>{{ link_to("mmekanismebantuan/search?page="~page.before, "Previous") }}</td>
                        <td>{{ link_to("mmekanismebantuan/search?page="~page.next, "Next") }}</td>
                        <td>{{ link_to("mmekanismebantuan/search?page="~page.last, "Last") }}</td>
                        <td>{{ page.current~"/"~page.total_pages }}</td>
                    </tr>
                </table>
            </td>
        </tr>
    <tbody>
</table>
