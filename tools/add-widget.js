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

var pageTpl = FS.readFileSync(__dirname + '/templates/widget.page.tpl', 'utf-8');
pageTpl = pageTpl.replace(/\$(fileName)\$/g, fileName);

var staticJsPath = Path.join(__dirname, '../views', 'widget', path, fileName) + '.js';
var staticCssPath = Path.join(__dirname, '../views', 'widget', path, fileName) + '.less';
var widgeTPLPath = Path.join(__dirname, '../views', 'widget', path, fileName) + '.tpl';

createFile(staticCssPath);
var addedTsFile = createFile(widgeTPLPath,pageTpl) && createFile(staticJsPath);


if (addedTsFile) {
    console.log('syncing jsconfig.json...');
    var jsConfig = require('./jsConfig.json');

    var addEntry = {}
    widgeTPLPath = widgeTPLPath.replace(/\\/g, '/').match(/views\/widget.+/g);
    staticJsPath = staticJsPath.replace(/\\/g, '/').match(/views\/widget[^.]+/g);

    addEntry.entry = staticJsPath[0];
    addEntry.template = widgeTPLPath[0];
    addEntry.type = "widget";
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
