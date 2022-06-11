const DataModel = require("../models/data.model");

//get all databank
exports.getAllData = (req, res) => {
    //console.log(`here all datas list`);
    DataModel.getAllData( (err, tabel_bankReqData) =>{
        console.log('Here is the data');
        if(err)
        res.send(err);
        console.log('All data', tabel_bankReqData);
        res.send(tabel_bankReqData)
    })
}

//get data by ID
exports.getDataByID = (req, res) =>{
    //console.log("Get data by ID");
    DataModel.getDataByID(req.params.id, (err, tabel_bankReqData)=>{
        if(err)
        res.send(err);
        console.log('Single data', tabel_bankReqData);
        res.send(tabel_bankReqData);
    })
}

//create new databank
exports.createNewData = (req, res) =>{
    const tabel_bankReqData = new DataModel(req.body);
    console.log("request data", tabel_bankReqData);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, messange: 'Please fill all fields'
        });
    }else{
        DataModel.createNewData(tabel_bankReqData, (err, tabel_bank) =>{
            if(err)
            res.send(err);
            res.json({status: true, message: "Data created successfully", data: tabel_bank.insertId})
        })
    }
}

//update Data (MASIH ERROR KETIKA TESTING POSTMAN)
exports.updateData = (req, res) => {
    const tabel_bankReqData = new DataModel(req.body);
    console.log("tabel_bankReqData update", tabel_bankReqData);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, messange: 'Please fill all fields'
        });
    }else{
        DataModel.updateData(req.params.id, tabel_bankReqData, (err, tabel_bank) =>{
            if(err)
            res.send(err);
            res.json({status: true, message: "Data updated successfully", data: tabel_bank.insertId})
        })
    }
}

//delete data
exports.deleteData = (req, res) =>{
    DataModel.deleteData(req.params.id, (err, tabel_bank)=>{
        if(err)
        res.send(err);
        res.json({success: true, message: "Data deleted successfully"});
    })
}