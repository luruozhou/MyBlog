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
<div id="wrapper">
   {% include "../../widget/admin/header/header.tpl"%}
   {% include "../../widget/admin/asider/asider.tpl"%}
    <div class="main">
        <h1>文章发布</h1>
        <div class="box">
            <div class="box-header">
                <div class="form-control">
                    <select name="category" id="category">
                        <option value=""}>请选择</option>
                        {%for section in sections%}
                            <option value="{{section.id}}"}>{{section.name}}</option>
                        {%endfor%}
                    </select>
                </div>
              
                <div class="form-control">
                    <input type="text" class="article_title" name="title">
                </div>

                <div class="form-control">
                    <input type="file" class="cover" name="cover">
                </div>
            </div>
            <div class="box-body">
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>

            <div class="box-footer">
                <button class="submit">提交</button>
            </div>
        </div>

    </div>
</div>

{#下边不要写任何代码(注释也不要删)，否则会发生无法挽回的错误#}
<!--SCRIPT_PLACEHOLDER-->
<script type="text/javascript">
    require ('../../static/admin/addArticle/addArticle')
</script>
<link rel="stylesheet" href="../../static/admin/addArticle/addArticle.less">
</body>

</html>



