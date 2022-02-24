const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv");
// const FileSystem = require ("fs");

CSVToJSON().fromFile("./covid19.csv").then((source:any) => {
    var covid19:any = [];
    var porcentajesMuertes:any = [];
    var muertes:any = {};
    var poblaciones:any = {};
    var mayorMuertes:any = 0;


    covid19 = JSON.parse(JSON.stringify(source));
    // console.log(covid19[0]);

    covid19.forEach((e:any, i:any) => {
        var cabeceras = Object.keys(covid19[i])
        var last:any = cabeceras[cabeceras.length - 1]
        muertes[e.Province_State] = muertes[e.Province_State] != undefined ? parseInt(muertes[e.Province_State]) + parseInt(e[last]) : parseInt(e[last])
        poblaciones[e.Province_State] = muertes[e.Province_State] != undefined ? parseInt(e.Population) + parseInt(e.Population) : parseInt(e.Population)
    });
    
    Object.keys(muertes).forEach((e:any) => {
        console.log(muertes[e],poblaciones[e])
        // let muertesMayor = 0;
        // if(muertesMayor < muertes[e]){
        //     muertesMayor = muertes[e];
        //     mayorMuertes = e + ' ' + String(muertesMayor)
        // }
        // console.log((Object.entries(poblaciones)))
        // console.log(100 * muertes[e] / poblaciones[e])
    });

//    console.log(Object.keys(muertes).length)
});

