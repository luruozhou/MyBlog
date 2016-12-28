 <header  class="topbar">
        <div class="logo">白鹭若舟
            <p></p>
        </div>
        <ul  class="topbar-nav">
            <li><a href="#" title="">首页</a></li>
            {%for section in sections%}
            <li><a href="">{{section.name}}</a>
                <!--<div class="line"></div>-->
                {%if section.sons.length%}
                    <ul class="dropdown-content">
                        {%for son in section.sons%}
                            <li>
                                <a href="#">{{son.name}}</a>
                            </li>
                        {%endfor%}
                    </ul>
                {%endif%}
            
            </li>
                
            {%endfor%}
        </ul>
    </header>


{#下边不要写任何代码(注释也不要删)，否则会发生无法挽回的错误#}
<!--SCRIPT_PLACEHOLDER-->
<script type="text/javascript">
    require ('./header')
</script>
<link rel="stylesheet" href="./header.less">


