// This file isn't transpiled

// register babel to transpile before the tests run
require('babel-register')();

// disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};