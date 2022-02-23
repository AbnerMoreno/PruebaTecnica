const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv");
const FileSystem = require("fs");

CSVToJSON().fromFile("./covid19.csv").then(source => {
    var covid19 = [''];
    var covid19 = JSON.parse(JSON.stringify(source));
    console.log(covid19[1]);
});

