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
    {%if extras%}
        <script type="application/json" data-id="data.extras">
            {% autoescape false %} {{ extras|json }} {% endautoescape %}
        </script>
    {%endif%}
     <script src="../static/mod.js"></script>
</head>

<body>
    {{a}}
<script type="text/javascript">
        require ('../static/article-detail/article-detail')
    </script>
    <link rel="stylesheet" href="../static/article-detail/article-detail.less">
</body>

</html>



