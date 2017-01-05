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
    {%if jsData%}
        <script type="application/json" data-id="data.jsData">
            {% autoescape false %} {{ jsData|json }} {% endautoescape %}
        </script>
    {%endif%}
    <script src="$relDir$../static/mod.js"></script><!--ignore--> {#这一行不要删掉，连注释都不要删，听话#}
</head>

<body>

{#下边不要写任何代码(注释也不要删)，否则会发生无法挽回的错误#}
<!--SCRIPT_PLACEHOLDER-->
<script type="text/javascript">
    require ('$relDir$../static/$path$')
</script>
<link rel="stylesheet" href="$relDir$../static/$path$.less">
</body>

</html>



