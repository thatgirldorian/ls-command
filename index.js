#!/usr/bin/env node
//add a comment to run the dls command in our bin as an executable command 

//require the file system module & the chalk package
import fs from 'fs'
import util from 'util'
import chalk from 'chalk'

console.log(chalk.blue('Hello world!'));
//add an lstat method
const { lstat } = fs.promises

//open up the current directory we're in
fs.readdir(process.cwd(), async (err, filenames) => {
    
    if (err) {
        //handle the error
        console.log(err)
    }

    //map over the filenames array for each filename
    const statPromises = filenames.map(filename => {
        return lstat(filename)
    })

    //this comprises all the stats objects available
    const allStats = await Promise.all(statPromises)

    for (let stats of allStats) {
        const index = allStats.indexOf(stats)

        //check whether the object is a file or a directory
        if (stats.isFile() === true) {
            console.log(chalk.magenta(filenames[index]))
        } else {
            console.log(chalk.cyan(filenames[index]))
        }
        // console.log(filenames[index],stats.isFile())
        
    }
} )

//figure out which string is a file or directory
