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
    <header  class="topbar">
        <a href="#" title="">首页</a> >>
        <ul  class="topbar-nav">
            {%for section in sections%}
            <li>{{section.name}} </li>
                {%if section.sons.length%}
                    <ul class="dropdown-content">
                    {%for son in section.sons%}
                        <li>{{son.name}}</li>
                    {%endfor%}
                </ul>
                {%endif%}
            {%endfor%}
        </ul>
    </header>
    <div class="main">
        姐姐,带带我,我是中学生
    </div>
    <script type="text/javascript">
        require ('../static/index/index')
    </script>
    <link rel="stylesheet" href="../static/index/index.less">
</body>

</html>



