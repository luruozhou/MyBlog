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
    <script src="../../static/mod.js"></script><!--ignore--> {#这一行不要删掉，连注释都不要删，听话#}
</head>

<body>
<div class="resume-block ">
		<!-- <div class="iconfont open">
			&#xe611;
		</div> -->
		<div class="left">
			<p>
				<img src="img/logo.jpg" alt="">
			</p>
			<p><i class="iconfont">&#xe609;</i>Ctrl</p>
			<p><i class="iconfont">&#xe6d6;</i>15634081002</p>
			<p><i class="iconfont">&#xe741;</i>940356361@qq.com</p>
			<p><i class="iconfont">&#xe69f;</i>
			<a href="https://github.com/MsCtrl0" title="">
			https://github.com/MsCtrl0</a>
			</p>
			<p><i class="iconfont">&#xe63b;</i>lijingwen-me</p>
			<p><i class="iconfont">&#xe612;</i>前端工程师</p>
			<!-- <p><i class="iconfont">&#xe69f;</i>
			<a href="https://github.com/luruozhou/MyBlog" title="">https://github.com/luruozhou/MyBlog</a>
			</p> -->
		</div>
		<div class="right">
			<!-- <div class="main-block">
				<p class="title">个人信息</p>
				<div class="main">
					<table border="1" >
						<tbody>
							<tr>
								<td>姓名:</td>
								<td>李婧雯</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div> -->
			<div class="main-block">
				<p class="title">工作经验</p>
				<div class="main">
					<span class="time">2016.6-至今 </span>
					<span class="name">中兴软件（济南）有限公司</span>
					<p class="main-content">
						<span class="important">主动学习：</span>主要工作是开发后台管理页面，使用easyui组件实现后台管理页面效果。根据不同项目的设计图，在原有框架的基础上，利用easyui自带的jquery结合原生js进行二次开发。并且在开发过程中，主动使用适当的CSS3动画等，加强设计效果，增强用户体验，受到了项目经理的好评。
					</p>
					<p class="main-content">
						<span class="important">关注于开发效率的提高：</span>
						期间推进公司使用阿里巴巴iconfont平台，让前端开发人员和UI设计人员从繁重的切图工作中解放出来，缩短了交流时间，提高了开发效率。
					</p>
					<p class="main-content">
						<span class="important">乐于接触新技术：</span>
						在开发过程中开始接触less，并且在一次负责小型整站前端开发的过程中，使用less。从项目需求开始，根据功能点，拆分页面结构，组织less样式文件结构，对自己来说也是一次小小的提高。在这次开发过程中，由gulp开始初步接触前端工程化，有过一定的使用经验。
					</p>
					
				</div>
			</div>
			<div class="main-block">
				<p class="title">项目经验</p>
				<div class="main">
					<p class="main-content">
						工作之余，与人合作开发的博客项目已经上线。在这个项目中，负责前端页面的开发工作。
						使用css3和js实现首页的全屏视差滚动，文章详情页瀑布流效果，配合后端人员实现登录注册及数据展示。使用ajax实现异步渲染，熟悉swig模板语法。
					</p>
					<p class="main-content">
						博客地址：<a href="lijingwen.me" title="">lijingwen.me</a>
					</p>
					<p class="main-content">
						项目源码：<a href="https://github.com/luruozhou/MyBlog" title="">https://github.com/luruozhou/MyBlog</a>
					</p>
				</div>
			</div>
			
			<div class="main-block">
				<p class="title">教育经历</p>
				<div class="main">
					<span class="time">2012.9-2016.6 </span>
					<span class="name">山东科技大学 计算机科学与技术专业</span>
					
				</div>
				
			</div>
			<div class="main-block">
				<p class="title">其他技能</p>
				<div class="main">
					<span class="time">数据库</span>
					<span class="name">熟悉关系型数据库如MySQL</span><br>
					<span class="time">后端基础</span>
					<span class="name">熟悉java，对面向对象的编程语言有一定了解</span>
					
				</div>
				
			</div>
		</div>
		
	</div>



{#下边不要写任何代码(注释也不要删)，否则会发生无法挽回的错误#}
<!--SCRIPT_PLACEHOLDER-->
<script type="text/javascript">
    require ('../../static/resume/lijingwen/lijingwen')
</script>
<link rel="stylesheet" href="../../static/resume/lijingwen/lijingwen.less">
</body>

</html>



