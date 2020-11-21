const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter employee name',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Enter employee ID',
            name: 'id'
        },
        {
            type: 'checkbox',
            message: 'What is this employee/s role?',
            choices: [
                {
                    name: 'Manager ',
                    checked: true
                },
                {
                    name: 'Engineer ',
                    checked: true
                },
                {
                    name: 'Intern ',
                    checked: true
                },

            ],
            name: 'role'
        },
        
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },

    ])
    .then((response) => {
        let user = {
            name: response.name,
            id: response.id,
            role: response.role,            
            email: response.email

        };
       


        fs.writeFile('index.html', htmlDoc, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    });

    //function renderHTML() {
     //   fs.writeFile(outputPath, render(employees), (err) => {
     //     if (err) throw err;
     //     console.log('The file has been saved!');
     //   });
     // }