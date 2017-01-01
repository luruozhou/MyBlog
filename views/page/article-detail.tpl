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
        {% autoescape false %} {{extras|json}} {% endautoescape %}
    </script>
    {%endif%}
    <script src="../static/mod.js"></script><!--ignore--> {#这一行不要删掉，连注释都不要删，听话#}
    <script>
        
    </script>
</head>

<body>
    {% include "../widget/layout/header/header.tpl"%}
    {% include "../widget/components/login/login.tpl"%}

    <div class="article-type">
        <a href="#">技术</a>
        <a href="#">nodeJS</a>

    </div>
    <div class="article-title">
        {{articleRecord.title}}
    </div>
    <div class="article-time">
        {{ articleRecord.created_at.toString()}}
    </div>
    <div class="article-main">
        <!--{% autoescape false%}
        {{ articleRecord.html_content }}
        {% endautoescape %}-->
        
    </div>
    
    <div class="article-reply">
        <div class="reply-block">
            <p>小可爱：</p>
            <p>回复的内容</p>
            <p>时间</p>
        </div>
        <div class="reply-block">
            <p>小可爱：</p>
            <p>回复的内容</p>
            <p>时间</p>
        </div>
        <div class="reply-user">
            {%if isLogin%}
                <img src="{{avatar}}" class="userImg">
                <span class="userName">{{nickName}}</span>
            {%else%}
                <button class="toLogin">登录</button>
                <button>注册</button>
            {%endif%}
            <textarea name="a">
                这里写内容
            </textarea>
        </div>
        
    </div>
    <div class="back-top"></div>
    {#下边不要写任何代码(注释也不要删)，否则会发生无法挽回的错误#}
    <!--SCRIPT_PLACEHOLDER-->
    <script type="text/javascript">
        require('../static/article-detail/article-detail')
    </script>
    <link rel="stylesheet" href="../static/article-detail/article-detail.less">
</body>

</html>



