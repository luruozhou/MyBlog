<!doctype html>
<html>

<head>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8"/>
    <title>{{title}}</title>
    <meta name="keywords" content="{{keywords}}">
    <meta name="description" content="{{description}}" name="description">
    {%if jsData%}
    <script type="application/json" data-id="data.jsData">
        {% autoescape false %} {{ jsData|json }} {% endautoescape %}
    </script>
    {%endif%}
    <script src="../static/mod.js"></script><!--ignore-->{#这一行不要删掉，连注释都不要删#}
</head>

<body>
{% include "../widget/components/loading/loading.tpl"%}
{% include "../widget/layout/header/header.tpl"%}
    <div class="bgi">
        <img src="../static/index/img/main_bg3.jpg" alt="" style="width: 0px;height: 0px;">
    </div>
    <div class="toggle">
        <div class="section">
            <div class="person person1">
                <p class="p-show">
                    路若洲
                    <img src="../static/index/img/lrz.jpg"/>
                </p>
                <p class="p-show">三短一长选最长三长一端选最短</p>
                <p class="p-show">三长一端选最短</p>
                <p class="p-show">所以这个题的答案是什么呢</p>
            </div>
            <div class="person person2">
                <p class="p-show">
                    <img src="../static/index/img/ljw.jpg"/>
                    Ctrl<i class="iconfont">&#xe69a;</i>
                </p>
                <p class="p-show">我也不知道写点啥啊就这么凑合着看吧</p>
                <p class="p-show">这句话还要写点啥有啥建议么</p>
                <p class="p-show">
                    详情点击
                </p>
            </div>
        </div>
        <div class="section">
            <div class="HotArticles">
                {%for article in hotArticles%}
                    <div class="article article{{JSON.stringify(loop.key)}}">
                        <img src="{{article.cover}}" alt="">
                        <!--{{JSON.stringify(loop.key)}}-->
                    </div>
                    <div class="articleInfor articleInfor{{JSON.stringify(loop.key)}}">
                        <p>
                            <a href="#" class="articleType">{{article.sName}}</a>
                            {%if article.subSName%}
                               >  <a href="#" class="articleType"> {{article.subSName}}</a>
                            {%endif%}
                        </p>
                        
                        <a class="articleTitle" href="/article/{{article.id}}" title="{{article.title}}">
                            {{loop.key+1}}&nbsp;&nbsp;
                            {{article.title}}
                        </a>
                        <p><span class="articleTime">2016.12.26</span></p>
                        <p class="articleDetail">
                           {{article.description}}
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
                <span>  
                fis3 gulp   
                </span>
                 <div class="bottomIrc"></div>
            </div>
            <div class="tecStack">语法</div>
            <div class="tecStack">模板</div>
            <div class="tecStack">前端相关</div>
        </div>
        <div class="section">
           <div class="sectionTitle">Demo</div>
           <a href="#" class="demoBlock">
               <p>一个小demo</p>
               <img src="../static/index/img/main_bg1.jpg" />
           </a>
           <a href="#" class="demoBlock">
               <p>一个小demo</p>
               <img src="../static/index/img/main_bg1.jpg" />
           </a>
           <a href="#" class="demoBlock">
               <p>一个小demo</p>
               <img src="../static/index/img/main_bg1.jpg" />
           </a>
           <a href="#" class="demoBlock">
               <p>一个小demo</p>
               <img src="../static/index/img/main_bg1.jpg" />
           </a>
           <a href="#" class="demoBlock">
               <p>一个小demo</p>
               <img src="../static/index/img/main_bg1.jpg" />
           </a>
           <a href="#" class="demoBlock">
               <p>一个小demo</p>
               <img src="../static/index/img/main_bg1.jpg" />
           </a>
        </div>
        
    </div>
    <div  class="down">
        <i class="iconfont">&#xe69e;</i>
        
    </div>

    {#下边不要写任何代码(注释也不要删)，否则会发生无法挽回的错误#}
    <!--SCRIPT_PLACEHOLDER-->
    <script type="text/javascript">
        require ('../static/index/index')
    </script>
    <link rel="stylesheet" href="../static/index/index.less">
</body>

</html>



