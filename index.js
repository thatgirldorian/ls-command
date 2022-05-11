#!/usr/bin/env node
//add a comment to run the dls command in our bin as an executable command 

//require the file system module
const fs = require('fs')

//open up the current directory we're in
fs.readdir(process.cwd(), (err, filenames) => {
    //figure out if err = error object 
    if (err) {
        //handle the error
        console.log(err)
    }

    //or if there is no error
    console.log(filenames)
} )