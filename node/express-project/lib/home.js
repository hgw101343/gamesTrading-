//封装连接mongo和增删改查语句
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'h51905';
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useNewUrlParser: true
        }, function (err, client) {
            if (err !== null) {
                throw err;
                reject(err)
            } else {
                // 得到连接端
                resolve(client);
            };
        });
    })
}
//查找
const find = (col, par) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(col);
        // Find some documents
        collection.find(par).toArray(function (err, docs) {
            // console.log("Found the following records");
            // console.log(docs)
            if (err) {
                throw err;
                reject(err);
            }
            else {
                resolve(docs);
            }
        });
        client.close();
    })
}
//增
const show = (col, par) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(col);
        // Find some documents
        collection.insertMany(par, function (err, result) {
            // console.log("Found the following records");
            // console.log(docs)
            if (err) {
                throw err;
                reject(err);
            }
            else {
                resolve(result);
            }
        });
        client.close();
    });
}
//删
const remov = (col, par) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(col);
        // Find some documents
        collection.deleteOne(par, function (err, result) {
            // console.log("Found the following records");
            // console.log(docs)
            if (err) {
                throw err;
                reject(err);
            }
            else {
                resolve(result);
            }
        });
        client.close();
    });
}
//改
const updata = (col, par, par2) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        // 选中表
        const collection = db.collection(col);
        // Find some documents
        collection.updateOne(par, { $set: par2 }, function (err, result) {
            // console.log("Found the following records");
            // console.log(docs)
            if (err) {
                throw err;
                reject(err);
            }
            else {
                resolve(result);
            }
        });
        client.close();
    });
}
//封装mysql得增删改查
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wuge'
});
const getConnection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
                throw err;
            }
            else {
                resolve(connection);
            }; // not connected!
            // Use the connection
        });
    });
}
const query = (connection, sql, par) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, [par ? par : ''], function (error, results, fields) {
            connection.release();
            if (error) {
                reject(error);
                throw error;
            }
            else {
                resolve(results);
            }

        });
    })
}
//mysql的查
const find1 = async (table, par) => {
    const connection = await getConnection();
    if (par) {
        return await query(connection, `SELECT * FROM ${table} where ?`, par);
    }
    else {
        return await query(connection, `SELECT * FROM ${table} where ?`, null);
    }
}
//mysql的增
const show1 = async (table, par) => {
    const connection = await getConnection();
    if (par) {
        return await query(connection, `INSERT INTO ${table} SET ?`, par);
    }
    else {
        return await query(connection, `INSERT INTO ${table} SET ?`, null);
    }
}
//mysql的删
const remov1 = async (table, par) => {
    const connection = await getConnection();
    if (par) {
        return await query(connection, `DELETE FROM ${table} WHERE ?`, par);
    }
    else {
        return await query(connection, `DELETE FROM ${table} WHERE ?`, null);
    }
}
const updata1 = async (table, par) => {
    const connection = await getConnection();
    if (par) {
        return await query(connection, `UPDATE ${table} SET name = '${par.name}' WHERE age= ${par.age}`);
    }
    //     else {
    //         return await query(connection, `UPDATE ${table} SET name = '${par.name}' WHERE age= ${par.age}`, null);
    //     }
}
module.exports = {
    find,
    show,
    remov,
    updata,
    find1,
    show1,
    remov1,
    updata1
}

