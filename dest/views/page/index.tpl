<!doctype html>
<html>

<head>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <meta charset="utf-8">
    <title>{{title}}</title>
    <meta name="keywords" content="{{keywords}}">
    <meta name="description" content="{{description}}" name="description">
<link href="/views/static/index/index.css?v=cda1d0c0aaece0f01d064223336fff52" rel="stylesheet"></head>

<body>
    <h1>welcome to Home Page!</h1>
    {%for i in a %}
        <p>{{i.name}}</p>
    {%endfor%}

   {#
    {% include "../widget/sub/forthWidget/forthWidget.tpl"%}
    #}
<script type="text/javascript" src="/views/static/index/index.js?v=055a7cf91e9b4364bd27"></script></body>

</html>



