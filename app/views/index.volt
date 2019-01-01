<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        {{ get_title() }}
        {{ stylesheet_link('css/main.css') }}         
        {{ stylesheet_link('js/extjs/resources/css/ext-all.css') }}
        {{ javascript_include('js/extjs/ext-all-debug.js') }}
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Sistem Informasi Penerima Manfaat">
        <meta name="author" content="OpenThink Labs">
    </head>
    <body>
        {{ content() }}
    </body>
</html>