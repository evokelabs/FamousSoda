'use strict';
const fs = require('fs');
const packageJSON = require('../package.json');
const path = require('path');
const sh = require('shelljs');

module.exports = function renderScripts() {
    const sourcePath = path.resolve(path.dirname(__filename), '../src/js/scripts.js');
    const destPath = path.resolve(path.dirname(__filename), '../public/js/scripts.js');
    const destMinPath = path.resolve(path.dirname(__filename), '../public/js/scripts.min.js');
    
    const copyright = `/*!
    * ${packageJSON.title} v${packageJSON.version} (${packageJSON.homepage})
    * Copyright 2020-${new Date().getFullYear()} ${packageJSON.author}
    * Licensed under ${packageJSON.license}
    */
    `
    const scriptsJS = fs.readFileSync(sourcePath);
    const destPathDirname = path.dirname(destPath);
    
    if (!sh.test('-e', destPathDirname)) {
        sh.mkdir('-p', destPathDirname);
    }
    
    fs.writeFileSync(destPath, copyright + scriptsJS);
    fs.writeFileSync(destMinPath, copyright + scriptsJS);
};