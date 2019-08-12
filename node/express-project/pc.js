const request = require('request');
const fs = require('fs');
const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;
// fs.readFile('./jsonimg/wym.json', 'utf8', function (err, data) {
//     if (err) console.log(err);
//     var test1 = JSON.parse(data);
//     // var t = JSON.stringify(test1);
//     // fs.writeFileSync('./index.html', t)
//     for (let i = 0; i < test1.Apic.length; i++) {
//         request(encodeURI(test1.Apic[i])).pipe(fs.createWriteStream(`./public/images/wym/Apic${i}.png`));
//         // console.log(test1.category[i]);
//     }
// });
const client = require('mongodb').MongoClient;
const dbUrl = 'mongodb://localhost:27017';
const dbName = 'students';
const arr = require('./newdata.json');
client.connect(dbUrl, function (err, client) {
    var db = client.db(dbName);
    console.log(db);
    const collection = db.collection('orderlist');
    collection.insertMany(arr, function (err, result) {
        if (err) console.log(err);
        console.log(result);
    });
});