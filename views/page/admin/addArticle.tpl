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
                        <option value="0">技术</option>
                        <option value="1">生活</option>
                    </select>
                </div>
                <div class="form-control">
                    <select name="sub_category" id="sub_category">
                        <option value="0">js</option>
                        <option value="1">node</option>
                        <option value="2">css</option>
                    </select>
                </div>
                <div class="form-control">
                    <input type="text" class="title" name="title">
                </div>
            </div>
        </div>
        <div class="box-body">
            <textarea name="" id="" cols="30" rows="10" style="width: 100%;height:300px;"></textarea>
        </div>
    </div>
</div>

</body>

</html>



