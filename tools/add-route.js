/// <reference path="../typings/node/node.d.ts"/>

var program = require("commander");
var FS = require('fs-extra');
var fs = require('fs');
var Path = require('path');
var ChildProcess = require('child_process');

program
    .version("0.0.1")
    .option('[<path>] ', 'assign route path, Plase ignore "client"')
    .option('-s, --static', 'create static resource');

program.on('--help', function () {
    console.log("  This is a quick tool to create a page. \n  It can create route,tpl file and add <-s> param can create static resource directory(.less and .js)");
    console.log('');
    console.log('  Examples:');
    console.log('');
    console.log('    $ node tools/add-route.js desktop zmlearn');
    console.log('    $ node tools/add-route.js desktop zmlearn -s');
    console.log('');
});

program.parse(process.argv);

if (program.args.length < 1)
    throw new Error("missing param");


var path = program.args[0].replace(/\\/g, '/');
var nameArr = path.split("/");
var fileName = nameArr[nameArr.length - 1];
var routeTpl = FS.readFileSync(__dirname + '/templates/route.js.tpl', 'utf-8');
var pageTpl = FS.readFileSync(__dirname + '/templates/route.page.tpl', 'utf-8');
var routePath = Path.join(__dirname, '..', 'routes', path) + '.js';

createFile(routePath, routeTpl);
var pageTplPath = Path.join(__dirname, '../views', 'page', path) + '.tpl';

var pageTplData = {
    relDir: Array((path.match(/\//g) || []).length + 1).join('../'),
    path: path+'/'+fileName
};

pageTpl = pageTpl.replace(/\$(relDir)\$/g, function (m, variable) {
    return pageTplData[variable];
}).replace(/\$(path)\$/g, function (m, variable) {
    return pageTplData[variable];
});


var staticJsPath = Path.join(__dirname, '../views', 'static', path, fileName) + '.js';
var staticCssPath = Path.join(__dirname, '../views', 'static', path, fileName) + '.less';

var addedTsFile = createFile(staticJsPath) && createFile(pageTplPath, pageTpl);

createFile(staticCssPath);

if (addedTsFile) {
    console.log('syncing jsconfig.json...');
    var jsConfig = require('./jsConfig.json');

    var addEntry = {}
    pageTplPath = pageTplPath.replace(/\\/g, '/').match(/views\/page.+/g);
    staticJsPath = staticJsPath.replace(/\\/g, '/').match(/views\/static[^.]+/g);
    addEntry.entry = staticJsPath[0];
    addEntry.template = pageTplPath[0];
    addEntry.type = "page";
    jsConfig.files.push(addEntry);

    fs.writeFile('tools/jsConfig.json', JSON.stringify(jsConfig, null, '    ') + '\n', function (err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("ok")

    });
}

/**
 * 创建文件
 * @param path {string}     路径
 * @defaultFileContent ?{string}    默认文件内容
 * @return {bollean}
 */
function createFile(path, defaultFileContent) {
    defaultFileContent = defaultFileContent || "";
    if (FS.existsSync(path)) {
        console.log('\x1b[31mfile already exists:\x1b[0m ' + path);
        return false;
    } else {
        FS.outputFileSync(path, defaultFileContent);
        console.log('created "' + path + '".');
        return true;
    }
}
