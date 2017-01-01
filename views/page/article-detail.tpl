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
    <div class="article-main" data-articleid="{{articleRecord.id}}">
        <!--{% autoescape false%}
       
            {{ articleRecord.html_content }}
        {% endautoescape %}-->
        
    </div>
    
    <div class="article-reply">
        <div class="reply-block">
            <div class="authorInfor">
                <img src="http://www.ld12.com/upimg358/allimg/c150703/14359134Z05360-1G024.jpg" alt=""
                 class="authorAvatar" />
                <span class="authorName">小可爱</span>
            </div>
            <p class="authorContent">回复的内容</p>
            <p class="replyer-block">
                @somebody：被回复的内容被回复的内容
            </p>
            <p class="reply-bottom">
                2017.1.1
                <span class="to-authorContent">回复</span>
            </p>
        </div>
        <div class="reply-block">
            <div class="authorInfor">
                <img src="http://www.ld12.com/upimg358/allimg/c150703/14359134Z05360-1G024.jpg" alt=""
                 class="authorAvatar" />
                <span class="authorName">小可爱</span>
            </div>
            <p class="authorContent">回复的内容</p>
            <!--<p class="replyer-block">被回复的内容</p>-->
            <p class="reply-bottom">
                2017.1.1
                <span>回复</span>
            </p>
        </div>
        <div class="reply-user">
            {%if isLogin%}
                <img src="{{avatar}}" class="userImg">
                <span class="userName">{{nickName}}</span>                
            {%else%}
                <button class="toLogin">登录</button>
                <button>注册</button>
            {%endif%}
            <textarea class="authorContent">@somebody：</textarea>
            <div class="publish">发布</div>
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



