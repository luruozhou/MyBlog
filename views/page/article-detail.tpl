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
        {% autoescape false %} {{jsData|json}} {% endautoescape %}
    </script>
    {%endif%}
    <script src="../static/mod.js"></script><!--ignore--> {#这一行不要删掉，连注释都不要删，听话#}
    <script>
        
    </script>
</head>

<body>
    {% include "../widget/components/register/register.tpl"%}
    {% include "../widget/layout/header/header.tpl"%}
    {% include "../widget/components/login/login.tpl"%}
    {% include "../widget/components/replySomebody/replySomebody.tpl"%}
    
    <div class="article-type">
        <a href="#">技术</a>
        <a href="#">nodeJS</a>

    </div>
    <div class="article-title">
        {{articleRecord.title}}
    </div>
    <div class="article-time">
        {{ articleRecord.date}}
    </div>
    <div class="article-main" data-articleid="{{articleRecord.id}}">
        <!--{% autoescape false%}
            {{ articleRecord.html_content }}
        {% endautoescape %}-->
    </div>
    
    <div class="article-reply">
        <div class="reply-list">

        </div>
        <div class="reply-user">
            {%if isLogin%}
            <img src="{{avatar}}" class="userImg">
            <span class="userName">{{nickName}}</span>
            <span class="logout">退出</span>
            <textarea class="authorContent"></textarea>
            <div class="publish">发布</div>
            {%else%}
            <button class="openCover" data-open="login">登录</button>
            <button class="openCover" data-open="register">注册</button>
            {%endif%}

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



