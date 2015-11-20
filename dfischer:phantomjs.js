var phantomjs = Npm.require('phantomjs2'), path = Npm.require('path'); // include
process.env.PATH += ':' + path.dirname(phantomjs.path);
