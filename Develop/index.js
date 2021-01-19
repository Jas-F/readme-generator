// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const generateMarkDown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is GitHub User Name'
    },

     {
        type: 'input',
        name: 'email',
        message: 'What is your email address'
     }, 

     {
        type: 'input',
        name: 'title',
        message: 'What is your project title'
     },

     {
        type: 'input',
        name: 'description',
        message: 'What is your project description'
     },

     {
        type: 'input',
        name: 'license',
        message: 'What is your project license'
     },

     {
        type: 'input',
        name: 'Install',
        message: 'What is command should be ran to install dependencies'
     },

     {
        type: 'input',
        name: 'tests',
        message: 'What command should be ran to install tests'
     },

     {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo'
     },

     {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo'
     },

     {
        type: 'input',
        name: 'image',
        message: 'What is your project image'
     },

     {
        type: 'input',
        name: 'Feature 1',
        message: 'What special function does your code feature'
     },

     {
        type: 'input',
        name: 'feature 2',
        message: 'What special function does your code feature'
     },

     {
        type: 'input',
        name: 'feature 3',
        message: 'What special function does your code feature'
     },

     {
        type: 'input',
        name: 'built',
        message: 'What is your project build with'
     },

     {
        type: 'input',
        name: 'link',
        message: 'What is your project deployed link'
     },

     {
        type: 'input',
        name: 'author',
        message: 'What is your project authors'
     },

     {
        type: 'input',
        name: 'portfolio',
        message: 'author portfolio'
     },

     {
        type: 'input',
        name: 'github',
        message: 'author github'
     },

     {
        type: 'input',
        name: 'LinkedIn',
        message: 'author LinkedIn'
     },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data =>{
        writeToFile('readme.md', generateMarkDown(data))
    })
}

// Function call to initialize app
init();
