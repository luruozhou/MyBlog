{% include "../cover/cover.tpl"%}
<div class="cover" data-coverName="login">
    <div class="coverContent">
		<div class="login-logo">登陆</div>
		<input type="text" name="userName" placeholder="用户名" id="">
		<input type="password" name="pwd" placeholder="密码" id="">
		<div class="error"></div>
		<input type="submit" name="" value="登陆" id="J-submit" >
		<div class="close" id="J-close"></div>
    </div>
</div>
{#下边不要写任何代码(注释也不要删)，否则会发生无法挽回的错误#}
<!--SCRIPT_PLACEHOLDER-->
<script type="text/javascript">
    require ('./login')
</script>
<link rel="stylesheet" href="./login.less">


