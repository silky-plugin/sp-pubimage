'use strict';
/**
 * Copy public modul's images dir to build dir
 */
const _path = require('path');
const _fs = require('fs-extra');

exports.registerPlugin = (cli, options)=>{
  cli.registerHook('build:end', (buildConfig, cb)=>{
    for(let key in cli.options.pluginsConfig){
      if(key.indexOf('sp') == 0){
        continue
      }
      let moduleImagesDir = _path.join(cli.cwd(), cli.options.pubModulesDir, key, "images")
      let outputImageDir =  _path.join(cli.options.buildConfig.outdir, "images", key)
      _fs.copySync(moduleImagesDir, outputImageDir)
    }
    cb(null)
  }, 1)
}