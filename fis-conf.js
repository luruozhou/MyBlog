fis.match(/(.*\.less)$/i, {
    // fis-parser-less 插件进行解析
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css',
    release:'$1'
})

fis.match(/(.*\.tpl)$/i, {
    release:'$1',
    isMod: true,
    isHtmlLike:true,
    extras:{
        isPage:true
    }
})



fis.match(/(.*\.js)$/i, {
    parser: fis.plugin('babel-5.x', {
        // preset: [
        // 注意一旦这里在这里添加了preset配置，则会覆盖默认加载的preset-2015等插件，因此需要自行添加所有需要使用的preset
        // ]
    }),
    rExt: 'js',
    isMod: true,
    release:'$1'
});

fis.match('::package', {
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        useInlineMap: true, // 资源映射表内嵌
        obtainScript:false
    })
});

fis.match('mod.js', {
    isMod: false,
});

// 加 md5
fis.media('prod').match('*.{js,css,png,less}', {
    useHash: true
});

// 启用 fis-spriter-csssprites 插件
fis.media('prod').match('::package', {
    spriter: fis.plugin('csssprites')
});

// 对 CSS 进行图片合并
fis.media('prod').match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});

fis.media('prod').match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});

fis.media('prod').match('*.less', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

fis.media('prod').match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

fis.hook('commonjs', {
    // baseUrl: './views',
    extList: ['.js', '.es']
});

