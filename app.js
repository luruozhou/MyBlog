var express = require('express');
var swig = require('swig');
var config = require("./dest/server/config")
var log = require('./dest/server/logger');
var Path = require("path")
var PAGERouter = require("./dest/server/utils/page-router.js").Router;
var APIRouter = require("./dest/server/utils/api-router.js").Router;


// var ChildProcess = require('child_process');
// ChildProcess.exec('gulp build');

var app = express();

log.use(app);
app.use('/static', express.static('dest/views/static'));
app.use('/views/static', express.static('dest/views/static'));
app.use('/widget', express.static('dest/views/widget'));
app.use('/views/widget', express.static('dest/views/widget'));


//设置模板引擎
app.set('views', './dest/views/page')
app.set('view engine', 'tpl');

app.engine('tpl', swig.renderFile);

new PAGERouter(app);
new APIRouter(app);


var server = app.listen(config.ServerHost.port, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

// 其他 router ...
// 404
// app.get('*', function(req, res){
//     res.render('404', {
//         title: 'No Found'
//     })
// });



