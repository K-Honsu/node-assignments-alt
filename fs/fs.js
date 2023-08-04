const fs = require('fs')
const path = require('path')

// creating  a directory called students
const newPth = path.join(__dirname, 'students')
fs.mkdir(newPth, (err) => {
    if (err) {
        console.log({err});
    }
    console.log('Folder created successfully');
})

const parseFilePth = path.join(__dirname, 'students', 'user.js')
console.log({parseFilePth});
content = ''

// creating a file name carred user.js
fs.writeFile(parseFilePth, content, (err) => {
    if (err){
        console.log({err});
    }
    console.log('File created successfully');
})


// rename folder from students to names
const newFolder = path.join(__dirname, 'names')
fs.rename(newPth, newFolder , (err) => {
    if (err) console.log(err);
    console.log('Folder renamed successfully');
})

// append name to file
const filePth = path.join(newFolder, 'user.js')
fs.appendFile(filePth, 'My name is feranmi adeyemi', (err)=> {
    if (err) console.log(err);
    console.log('Written file successfully');
})

// updating the file to include age, sex, nationality, phone nummber, and track
fs.appendFile(filePth, '\nI am 20 years old\nI am a male\nI am a nigerian\nPhone number is 081-xxx-xxx\nI am a backend track at AltSchool Africa', (err) => {
    if (err) console.log(err);
    console.log('New file written successfully');
})

// rename a file to my name
const oldPath = path.join(__dirname, 'names', 'user.js')
const newPath = path.join(__dirname, 'names', 'feranmi.js')
fs.rename(oldPath, newPath, (err)=>{
    if (err) console.log(err);
    console.log('File renamed successfully');
})

// read a file {feranmi.js}
fs.open(newPath, 'r', (err,fd) =>{
    if (err) {
        console.log(err);
    }
    console.log('File opened successfully');

    fs.readFile(fd, 'utf8', (err, data) =>{
        if (err) console.log(err);
        console.log('File read successfully');
        // console.log(data);
    })
})

// // deleting the file
fs.rm(newPath, (err)=>{
    if (err) console.log(err);
    console.log('File deleted successfully');
})

// deleting the folder
const delFolderPath = path.join(__dirname, 'names')
fs.rmdir(delFolderPath, (err)=>{
    if (err) console.log(err);
    console.log('Folder deleted successfully');
})