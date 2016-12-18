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
    <script src="../../static/mod.js"></script>
</head>

<body>
<div id="wrapper">
   {# {% include "../../widget/admin/header/header.tpl"%} #}
  {#  {% include "../../widget/admin/asider/asider.tpl"%} #}
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
                    <select name="sub_category" id="sub_category">
                        <option value="">请选择</option>
                    </select>
                </div>
                <div class="form-control">
                    <input type="text" class="article_title" name="title">
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
<script type="text/javascript">
    require ('../../static/admin/addArticle/addArticle')
</script>
<link rel="stylesheet" href="../../static/admin/addArticle/addArticle.less">
</body>

</html>



