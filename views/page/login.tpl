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
    <script src="../static/mod.js"></script><!--ignore--> {#这一行不要删掉，连注释都不要删，听话#}
</head>

<body>

<div class="cover" data-coverName="login">
    <form class="coverContent" action="" method="post">
        <div class="login-logo">登陆</div>
        <input type="text" name="userName" placeholder="用户名" id="">
        <input type="password" name="password" placeholder="密码" id="">
        <div class="error">{{error}}</div>
        <input type="submit" name="" value="登陆" id="J-submit" >
        <div class="close" id="J-close"></div>
    </form>
</div>




{#下边不要写任何代码(注释也不要删)，否则会发生无法挽回的错误#}
<!--SCRIPT_PLACEHOLDER-->
<script type="text/javascript">
    require ('../static/login/login')
</script>
<link rel="stylesheet" href="../static/login/login.less">
</body>

</html>



