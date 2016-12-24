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
        <div class="logo">白鹭若舟
            <p></p>
        </div>
        <ul  class="topbar-nav">
            <li><a href="#" title="">首页</a></li>
            {%for section in sections%}
            <li><a href="">{{section.name}}</a>
                {%if section.sons.length%}
                    <ul class="dropdown-content">
                        {%for son in section.sons%}
                            <li><a href="#">{{son.name}}</a></li>
                        {%endfor%}
                    </ul>
                {%endif%}
            
            </li>
                
            {%endfor%}
        </ul>
    </header>
    <div class="bgi">
        
    </div>
    <div class="toggle">
        <div class="section">
            
        </div>
        <div class="section">

        </div>
        <div class="section">
            
        </div>
        <div class="section">
           
        </div>
        
    </div>
    <div class="down">
        
    </div>
    <script type="text/javascript">
        require ('../static/index/index')
    </script>
    <link rel="stylesheet" href="../static/index/index.less">
</body>

</html>



