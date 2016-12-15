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
</head>

<body>
<header class="am-topbar">
    <h1 class="am-topbar-brand">
        <a href="#">blog</a>
    </h1>

    <button class="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only"
            data-am-collapse="{target: '#doc-topbar-collapse'}"><span class="am-sr-only">导航切换</span> <span
            class="am-icon-bars"></span></button>

    <div class="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
        <ul class="am-nav am-nav-pills am-topbar-nav">
            {{JSON.stringify(sections)}}
            <li class="am-active"><a href="#">首页</a></li>
            {%for section in sections%}
            <li class="{%if section.sons && section.sons.length>0%}am-dropdown{%endif%}" data-am-dropdown>
                <a class="{%if section.sons && section.sons.length>0%}am-dropdown-toggle{%endif%}"
                   data-am-dropdown-toggle href="/{{section.tab}}" data-id="{{section.id}}">
                    {{section.name}} <span class="am-icon-caret-down"></span>
                </a>
                {%if section.sons && section.sons.length>0%}
                <ul class="am-dropdown-content">
                    {%for sub_section in section.sons%}
                    <li>
                        <a href="/{{section.tab+'/'+sub_section.tab}}" data-id="{{sub_section.id}}">
                            {{sub_section.name}}
                        </a>
                    </li>
                    {%endfor%}
                </ul>
                {%endif%}
            </li>
            {%endfor%}
        </ul>

    </div>
</header>

<div class="am-g am-g-fixed blog-g-fixed">
    <div class="am-u-md-8">
        <article class="blog-main">
            <h3 class="am-article-title blog-title">
                <a href="#">Google fonts 的字體（display 篇）</a>
            </h3>
            <h4 class="am-article-meta blog-meta">by <a href="">open</a> posted on 2014/06/17 under <a href="#">字体</a>
            </h4>

            <div class="am-g blog-content">
                <div class="am-u-lg-7">
                    <p><!-- 本demo来自 http://blog.justfont.com/ -->你自信滿滿的跟客戶進行第一次 demo。秀出你精心設計的內容時，你原本期許客戶冷不防地掉下感動的眼淚。</p>

                    <p>因為那實在是太高級了。</p>

                    <p>除了各項基本架構幾乎完美無缺之外，內文是高貴的，有著一些距離感的，典雅的襯線字體。不是 Times New
                        Roman，而是很少有人見過的，你精心挑選過的字體，凸顯你品味的高超。而且它並沒有花上你與業主一毛錢，或許這也非常重要。</p>
                </div>
                <div class="am-u-lg-5">
                    <p><img src="http://f.cl.ly/items/451O3X0g47320D203D1B/不夠活潑.jpg"></p>
                </div>
            </div>
            <div class="am-g">
                <div class="am-u-sm-12">
                    <p>看著自己的作品，你的喜悅之情溢於言表，差點就要說出我要感謝我的父母之類的得獎感言。但在你對面的客戶先是一點表情也沒有，又瞬間轉為陰沉，抿了抿嘴角冷冷的說……</p>

                    <p>「我要一種比較跳的感覺懂嗎？」</p>
                </div>
            </div>
        </article>

        <hr class="am-article-divider blog-hr">

        <article class="blog-main">
            <h3 class="am-article-title">
                <a href="#">身邊的字體: Arial (上)</a>
            </h3>
            <h4 class="am-article-meta blog-meta">by <a href="">ben</a> posted on 2014/06/17 under <a href="#">javascript</a>
            </h4>

            <div class="am-g blog-content">
                <div class="am-u-lg-7">
                    <p><!--本demo文字来自 http://blog.justfont.com/--> 这次要介绍的是大家似乎都狠熟悉却又狠陌生的字体：Arial。不只是对 Typography
                        特别有兴趣的人、碰过排版的人，就算毫无接触，只要打开过电脑的字型选单，应该都有看过这个字型吧。尤其它还是以 A 开头，总是会出现在选单最前面。</p>

                    <p>Arial 常常跟 Helvetica 搞混，也常被当作是没有 Helvetica 时的替代字体使用。事实上 Arial 确实就是故意做得跟 Helvetica
                        狠相似，连每个字母的宽度都刻意做得一模一样。</p>
                </div>
                <div class="am-u-lg-5">
                    <p><img src="https://farm3.staticflickr.com/2917/14186214720_5d0b8ca2e3_b.jpg"></p>
                </div>
            </div>
            <div class="am-g">
                <div class="am-u-sm-12">
                    <p>在欧美的排版业界中，使用 Arial 的作品意即是「不使用 Helvetica 的作品」，会被认為是设计师对字体的使用没有概念或是太容易妥协，基本上我大致也是同意。</p>

                    <p>因為 Helvetica 只有 Mac 上才有內建，Windows 用戶除非花錢買，不然是沒有 Helvetica 能用，所以使用 Arial 的設計師往往被看成是不願意對 Typography
                        花錢，專業素養不到家的人。除了在確保網頁相容性等絕對必需的情況外，幾乎可以說是不應該使用的字體。</p>

                    <p>但是，在此之前，我們對 Arial 又有多少認識呢？</p>
                </div>
            </div>
        </article>

        <hr class="am-article-divider blog-hr">
        <ul class="am-pagination blog-pagination">
            <li class="am-pagination-prev"><a href="">&laquo; 上一页</a></li>
            <li class="am-pagination-next"><a href="">下一页 &raquo;</a></li>
        </ul>
    </div>

    <div class="am-u-md-4 blog-sidebar">
        <div class="am-panel-group">
            <section class="am-panel am-panel-default">
                <div class="am-panel-hd">关于我</div>
                <div class="am-panel-bd">
                    <p>前所未有的中文云端字型服务，让您在 web
                        平台上自由使用高品质中文字体，跨平台、可搜寻，而且超美。云端字型是我们的事业，推广字型学知识是我们的志业。从字体出发，关心设计与我们的生活，justfont blog
                        正是為此而生。</p>
                    <a class="am-btn am-btn-success am-btn-sm" href="#">查看更多 →</a>
                </div>
            </section>
            <section class="am-panel am-panel-default">
                <div class="am-panel-hd">文章目录</div>
                <ul class="am-list blog-list">
                    <li><a href="#">Google fonts 的字體（sans-serif 篇）</a></li>
                    <li><a href="#">[but]服貿最前線？－再訪桃園機場</a></li>
                    <li><a href="#">到日星鑄字行學字型</a></li>
                    <li><a href="#">glyph font vs. 漢字（上）</a></li>
                    <li><a href="#">浙江民間書刻體上線</a></li>
                    <li><a href="#">[極短篇] Android v.s iOS，誰的字體好讀？</a></li>
                </ul>
            </section>

        </div>
    </div>

</div>

<footer class="blog-footer">
    <p>blog template<br/>
        <small>© Copyright XXX. by the AmazeUI Team.</small>
    </p>
</footer>
</body>

</html>



