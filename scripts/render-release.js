'use strict';
var compressor = require('node-minify');
var UglifyJS = require("uglify-es");
var CleanCSS = require('clean-css');
const fs = require('fs');
const path = require('path');
const sh = require('shelljs');

module.exports = function releaseScript() {
    
    const sourcePath = path.resolve(path.dirname(__filename), '../public');
    
    fs.writeFileSync (
        sourcePath+'/js/scripts.min.js',
        '/* Coded by Alberto bebbo Capponi <bebbo@bebbo.it> */' + UglifyJS.minify({ "scripts.js": fs.readFileSync(sourcePath+'/js/scripts.js', "utf8")}).code,
        "utf8");
    sh.rm('-rf', `${sourcePath}/js/scripts.js`)

    var minCSS = new CleanCSS({}).minify(fs.readFileSync(sourcePath+'/css/styles.css', "utf8"));
    fs.writeFileSync (
        sourcePath+'/css/styles.min.css',
        minCSS.styles,
        "utf8");
};