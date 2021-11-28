var sql = require("mssql");
// config for your database
var config = {
    user: 'sa',
    password: 'P@ssw0rd',
    server: '68.183.186.117',
    database: 'nongnext',
    options: {
        encrypt: false
    }
  };

var err = sql.connect(config)
if (err) console.log(err);

async function getUser() {
    var request = new sql.Request();
    var command = await request.query(`SELECT *
        FROM nongnext.dbo.brand`);
        console.log(command)
    return 
}

getUser;

// const sql = require('mssql')
// const sqlConfig = {
//   user: 'sa',
//   password: 'P@ssw0rd',
//   database: 'nongnext',
//   server: '68.183.186.117',
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000
//   },
//   options: {
//     trustServerCertificate: false // change to true for local dev / self-signed certs
//   }
// }

// async function getUser() {
//     var request = new sql.Request();
//     var command = await request.query(`SELECT *
//         FROM nongnext.dbo.brand`);
//     return command
// }

// console.log(getUser());

// async () => {
//  try {
//   // make sure that any items are correctly URL encoded in the connection string
//   await sql.connect(sqlConfig)
//   const result = await sql.query`select * from nongnext.dbo.brand`
//   console.dir(result)
//  } catch (err) {
//   // ... error checks
//  }
// }