#!/usr/bin/env node
var fs = require("fs")
var transliteration = require('transliteration');
var path = process.cwd()
console.log(path)

exports.fntes = function(){
    fs.readdir(path,function(err, files){
        if (err) {
            return console.error(err);
        }
        files.forEach( function (file){
            var subfix = file.substring(file.lastIndexOf('.'))
            var str = transliteration.slugify(file.substring(0,file.lastIndexOf('.')));

            fs.rename(path+"/"+file,path+"/"+str+subfix,function(err){
                if(err){
                    console.error(err);
                }else{
                }
            });
        });
    });
}



