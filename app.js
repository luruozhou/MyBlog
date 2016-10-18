var express = require('express');
var swig = require('swig');
var config = require("./dest/server/config")
var log = require('./dest/server/logger');
var Path = require("path")
var Router = require("./dest/server/utils/page-router.js").Router;

var app = express();

log.use(app);
app.use('/static', express.static('dest/views/static'));
app.use('/widget', express.static('dest/views/widget/static'));


//设置模板引擎
app.set('views', './dest/views/page')
app.set('view engine', 'tpl');

app.engine('tpl', swig.renderFile);

new Router(app);

var server = app.listen(config.ServerHost.port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

// 其他 router ...
// 404
app.get('*', function(req, res){
    res.render('404', {
        title: 'No Found'
    })
});



