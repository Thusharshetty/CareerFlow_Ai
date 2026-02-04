
const dotenv=require("dotenv");
const mysql=require("mysql2");
dotenv.config();
 
const mysqlPool=mysql.createPool(
    {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const dbMySQL=mysqlPool.promise();

mysqlPool.getConnection((err, connection) => {
    if (err) {
        console.error('MySQL Connection Failed:', err.message);
    } else {
        console.log(' MySQL Connected Successfully');
        connection.release();
    }
});

module.exports = dbMySQL;