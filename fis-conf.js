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
        resourceType: 'commonJs',
        useInlineMap: true // 资源映射表内嵌
    })
});

fis.match('mod.js', {
    isMod: false,
});

fis.hook('commonjs', {
    // baseUrl: './views',
    extList: ['.js', '.es']
});

