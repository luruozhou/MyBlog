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
    <!--{{JSON.stringify(hotArticles)}}-->
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
            <div class="person">
                <div class="personleft">
                    <img src="../static/index/img/lrz.jpg"/>
                </div>
                <div class="personright">
                    <p>路若洲</p>
                    <p>选择题要点</p>
                    <p>三短一长选最长三长一端选最短</p>
                    <p>三长一端选最短</p>
                    <p>所以这个题的答案是什么呢</p>
                </div>
                
            </div>
            <div class="person">
                <div class="personleft">
                    <img src="../static/index/img/ljw.jpg"/>
                </div>
                <div class="personright">
                    <p>李婧雯</p>
                    <p>我也不知道写点啥啊就这么凑合着看吧</p>
                    <p>这句话还要写点啥有啥建议么</p>
                    <p>这是一个绝世无敌美少女</p>
                </div>
                
            </div>
        </div>
       <div class="section">
            <div class="HotArticles">
                {%for article in hotArticles%}
                    <div class="article article{{JSON.stringify(loop.key)}}">
                        <!--<img src="{{article.cover}}" alt="">-->
                        {{JSON.stringify(loop.key)}}
                    </div>
                    <div class="articleInfor articleInfor{{JSON.stringify(loop.key)}}">
                        <a class="articleTitle" href="#" title="{{article.title}}">
                            {{JSON.stringify(loop.key)}}
                            {{article.title}}
                        </a>
                        <p>
                            <span class="articleTime">2016.12.26</span>
                            <a href="#" class="articleType">分类1</a>
                        </p>
                        <p class="articleDetail">
                            Flex布局是什么？
                            Flex布局意为“弹性布局”，可以为盒模型提供最大灵活性。 
                            任何元素可以通过以下指定为弹性布局：

                            ( -webkit- )display: flex | inline-flex;
                            1
                            1
                            被指定为弹性布局以后，float、clear、vertical-align属性都将失效。

                            二、基本概念

                            容器：采用Flex布局的元素；
                            项目：所有子元素自动成为容器成员，这些元素组成一个Flex项目（item），简称“项目”；
                            主轴：水平方向上的(main start->main end)；
                            交叉轴：垂直方向上的(cross start->cross end)。
                        </p>
                    </div>
                {%endfor%}
            </div>
            
        </div>
        <div class="section" style="position: static">
            <div class="sectionTitle">关于本站</div>
            <div class="tecStack">构建工具</div>
            <div class="tecStack">后端框架</div>
            <div class="tecStack">数据库</div>
            <div class="tecDetails">
                <div class="topIrc"></div>
                构建工具:fis3 gulp   
                后端语言框架：nodeJS、express 
                数据库:MySql    
                es6 语法
                模板 swig
                前端：原生js，css3
                jQuery
                 <div class="bottomIrc"></div>
            </div>
            <div class="tecStack">语法</div>
            <div class="tecStack">模板</div>
            <div class="tecStack">前端相关</div>
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



