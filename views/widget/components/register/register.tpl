{% include "../cover/cover.tpl"%}
<div class="cover" data-coverName="register">
    <div class="coverContent">
        <div class="login-logo">注册</div>
        <input type="text" name="userName" placeholder="用户名" id="">
        <input type="text" name="nickName" placeholder="昵称" id="">
        <input type="password" name="password" placeholder="密码" id="">
        <input type="password" name="repassword" placeholder="重复输入密码" id="">
        <div class="error"></div>
        <input type="submit" name="" value="注册" id="J-register" >
        <div class="close" id="J-close"></div>
    </div>
</div>

{#下边不要写任何代码(注释也不要删)，否则会发生无法挽回的错误#}
<!--SCRIPT_PLACEHOLDER-->
<script type="text/javascript">
    require ('./register')
</script>
<link rel="stylesheet" href="./register.less">


