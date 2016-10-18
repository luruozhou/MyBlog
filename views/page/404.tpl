{% extends 'layout.tpl' %}

{% block title %}{{title}}{%endblock%}

{% block head %}
{{title}}
{% endblock %}

{% block content %}
<link rel="stylesheet" href="../static/404/404.css">
<p>然后呢</p>
<img src="./static/404/404.png" alt="404">
<img src="./static/404/guide.png" alt="">
<h3>欸？可以了</h3>
{% include "../widget/template/firstWidget.tpl"%}
<script src="../static/404/404.js"></script>

{% endblock %}

