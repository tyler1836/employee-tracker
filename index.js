const mysql = require('mysql2');
const cTable = require('console.table');
require('dotenv').config();
const inquirer = require('inquirer');
require('events').EventEmitter.defaultMaxListeners = 30;



teamTable();

function teamTable() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: ['View all employees', 'View employees by department',
                'View employees by manager', 'Add an employee', 'Add a role', 'Add a department',
                'Delete an employee', 'Update employee role', 'Update employee manager', 'Quit'],
        },

    ])
        .then((employees) => {
            console.log(employees)
            if (employees.options === 'View all employees') {
                const sql = `SELECT * FROM employee`

                db.query(sql, (err, rows) => {

                    console.table('\n', rows, '\n')
                })
                next();

            }
            if (employees.options === 'View employees by department') {
                const sql = `SELECT name FROM department`

                db.query(sql, (err, rows) => {

                    console.table('\n', rows, '\n')
                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'dep',
                            message: 'Which department?',
                            choices: rows
                        }
                    ])
                        .then((dep) => {
                            if (dep.dep === 'development') {
                                const sql = `SELECT e.first_name AS name, r.title, d.name AS Department FROM department AS d
                                LEFT JOIN role r ON r.department_id = d.id
                                LEFT JOIN employee e ON e.role_id = r.id
                                WHERE d.name = 'development';`

                                db.query(sql, (err, rows) => {
                                    console.table('\n', rows, '\n')
                                })
                                next();
                            }

                            if (dep.dep === 'marketing') {
                                const sql = `SELECT e.first_name AS name, r.title, d.name AS Department FROM department AS d
                                LEFT JOIN role r ON r.department_id = d.id
                                LEFT JOIN employee e ON e.role_id = r.id
                                WHERE d.name = 'marketing';`

                                db.query(sql, (err, rows) => {
                                    console.table('\n', rows, '\n')
                                })
                                next();
                            }

                            if (dep.dep === 'management') {
                                const sql = `SELECT e.first_name AS name, r.title, d.name AS Department FROM department AS d
                                LEFT JOIN role r ON r.department_id = d.id
                                LEFT JOIN employee e ON e.role_id = r.id
                                WHERE d.name = 'management';`

                                db.query(sql, (err, rows) => {
                                    console.table('\n', rows, '\n')
                                })
                                next();
                            }


                        })
                })
            }
            if (employees.options === 'View employees by manager') {
                const sql = `SELECT first_name AS name FROM employee WHERE role_id = 3`

                db.query(sql, (err, rows) => {
                    console.table('\n', rows, '\n')
                    inquirer.prompt([
                        {
                            type: 'list',
                            name: 'manager',
                            message: 'Which manager?',
                            choices: rows
                        }
                    ])
                        .then(manager => {
                            if (manager.manager === 'Jacob') {
                                const sql = `SELECT 
                            first_name, last_name
                            FROM employee
                            WHERE manager_id = 2; `

                                db.query(sql, (err, rows) => {
                                    console.table('\n', rows, '\n')
                                })
                                next();
                            }

                            if (manager.manager === 'Kendyl') {
                                const sql = `SELECT 
                            first_name, last_name
                            FROM employee
                            WHERE manager_id = 5; `

                                db.query(sql, (err, rows) => {
                                    console.table('\n', rows, '\n')
                                })
                                next();
                            }

                        })
                })

            }
            // if (employees.options === 'Add a department') {
            //     inquirer.prompt([
            //         {
            //             type: 'input',
            //             name: 'addDep',
            //             message: 'What is the name of the department you would like to add?'
            //         }
            //     ])
            //         .then(function(add){


            //             db.query(`INSERT INTO department SET ?`, {
            //                 name = add.addDep,
            //             })
            //             console.table('\n', rows, '\n')
            //             console.log('success')
            //         })
            //         next();
            // }
            if (employees.options === 'Quit') {
                db.end();
                console.log('goodbye!')
            }
        })


};
function next() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'viewEmployees',
            message: 'Go back?',
            choices: ['Start over', 'Done']
        }
    ])
        .then((viewAll) => {
            if (viewAll.viewEmployees === 'Start over') {
                console.log('\n')
                teamTable();
            }
            else {
                db.end();
                console.log('goodbye');
            }
        })
}

const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: process.env.DB_PASS,
    database: 'team'
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
});

// teamTable();
