const path = require('path')

//print out current working directory/folder
const cwd = path.dirname(__filename)
console.log({cwd});
const cwd1 = path.resolve()
console.log({cwd1});

//get path seperator
const seperator = path.sep
console.log({seperator});

// get extension name
const extName = path.extname('/Users/oluwaferanmiadeyemi/Documents/node-assignment/path/path.js')
console.log({extName});
