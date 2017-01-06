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
        {% autoescape false %} {{jsData|json}} {% endautoescape %}
    </script>
    {%endif%}
    <script src="../static/mod.js"></script><!--ignore--> {#这一行不要删掉，连注释都不要删，听话#}
</head>

<body>
    {% include "../widget/layout/header/header.tpl"%}
    
	<div class="masonry" data-optiones="">
            {%for article in hotArticles%}
                <a class="masonry-block"  href="/article/{{article.id}}">
                    <img class="article-header" src="{{article.cover}}" alt="">
                    <div class="article-title"  title="{{article.title}}">
                        {{article.title}}
                    </div>
                    <p class="article-content">
                        {{article.description}}
                    </p>
                </a>
            {%endfor%} 
            {%for article in hotArticles%}
                <a class="masonry-block"  href="/article/{{article.id}}">
                    <img class="article-header" src="{{article.cover}}" alt="">
                    <div class="article-title"  title="{{article.title}}">
                        {{article.title}}
                    </div>
                    <p class="article-content">
                        {{article.description}}
                    </p>
                </a>
            {%endfor%} 
            {%for article in hotArticles%}
                <a class="masonry-block"  href="/article/{{article.id}}">
                    <img class="article-header" src="{{article.cover}}" alt="">
                    <div class="article-title"  title="{{article.title}}">
                        {{article.title}}
                    </div>
                    <p class="article-content">
                        {{article.description}}
                    </p>
                </a>
            {%endfor%} 
	</div>
{#下边不要写任何代码(注释也不要删)，否则会发生无法挽回的错误#}
<!--SCRIPT_PLACEHOLDER-->
<script type="text/javascript">
    require('../static/article-list/article-list')
</script>
<link rel="stylesheet" href="../static/article-list/article-list.less">
</body>

</html>



