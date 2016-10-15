var FS = require('fs');
var Path = require('path');

exports.listFiles = function listFiles(path, regex) {
    regex = regex || /./;
    var names = FS.readdirSync(path);
    var files = [];
    var dirs = [];

    for (var name of names) {
        var targetPath = Path.join(path, name);
        if (FS.statSync(targetPath).isFile()) {
            if (regex.test(targetPath)) {
                files.push(targetPath);
            }
        } else {
            dirs.push(targetPath);
        }
    }

    for (var dir of dirs) {
        files = files.concat(listFiles(dir, regex));
    }

    return files;
}
