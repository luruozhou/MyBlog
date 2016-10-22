<!doctype html>
<html>

<head>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8"/>
    <meta charset="utf-8">
    <title>{{title}}</title>
    <meta name="keywords" content="{{keywords}}">
    <meta name="description" content="{{description}}" name="description">
</head>

<body>
    <h1>welcome to Home Page-=-=-</h1>
    {%for i in a %}
        <p>{{i.name}}</p>
    {%endfor%}

   {#
    {% include "../widget/sub/forthWidget/forthWidget.tpl"%}
    #}
</body>

</html>



