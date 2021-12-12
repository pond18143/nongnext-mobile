const sql = require('mssql')

const config = {
    user: 'sa',
    password: 'P@ssw0rd',
    server: '68.183.186.117', // You can use 'localhost\\instance' to connect to named instance
    database: 'nongnext',
    trustServerCertificate: true,
}

async function listBrand() {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(config)
        console.log("11111111")
        // const result = await sql.query`select * from brand where id = ${value}`
        var command = `SELECT * from brand `
        const result = await sql.query(command)
        console.log("22222")

        // console.log(result.recordset[0])
        // return model = {s
        //     // name : result.recordset[0].name,
        //     // describtion : result.recordset[0].describtion,

        // }
        // var b = await JSON.stringify(result.recordset[0].name);
        return result.recordset


}

async function listBrandbyName(name) {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect(config)
        // const result = await sql.query`select * from brand where id = ${value}`
        var command = `SELECT * from brand WHERE name='${name}'`
        const result = await sql.query(command)

        // console.log(result.recordset[0])
        // return model = {s
        //     // name : result.recordset[0].name,
        //     // describtion : result.recordset[0].describtion,

        // }
        // var b = await JSON.stringify(result.recordset[0].name);

        return result.recordset
    } catch (err) {
        console.log(err)
    }
}

async function listProduct(value) {
    try {
        await sql.connect(config)
        var command = `SELECT name,capacity,color FROM items WHERE name = '${value}'`
        const result = await sql.query(command);
        return result.recordset
    } catch (err) {
        console.log(err)
    }
}

module.exports.listBrand = listBrand;
module.exports.listProduct = listProduct;


// console.log(dataTest(1))

// async function main(){
//     // let re = await listBrand()
//     let product = await listBrand()
//     // console.log(re[1].name)
//     // console.log(typeof product[0].name);
//     console.log(product)

// }

// main()
