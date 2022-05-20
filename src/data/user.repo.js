'use-strict'

const mysql = require('mysql');

const UserRepo = () => {
    const connection = mysql.createConnection({
        host: process.env.DB_HOSTNAME,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    const findAllUsers = async () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM users', function (error, results, fields) {
                if (error) reject(error);
                
                resolve(results);
            });
        })
    }
    const createUser = async ({ name, email, password }) => {
        return new Promise((resolve, reject) => {
            let query = mysql.format("INSERT INTO users(name, email, password) VALUES (?, ?, ?)", [name, email, password]);

            connection.query(query, function (error, result, fields) {
                if (error) reject(error);

                resolve(result.affectedRows > 0 ? {
                    id: result.insertId, name, email, password
                } : null);
            });
        })
    }

    return {
        findAll: findAllUsers,
        create: createUser,
    }
}

module.exports = UserRepo();