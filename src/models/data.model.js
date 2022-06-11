const koneksi = require("../../config/database");
const router = require("../routes/data.route");

const Data = function(tabel_bank){
  this.Name             =     tabel_bank.Name;
  this.Fulladdress      =     tabel_bank.Fulladdress;
  this.Street           =     tabel_bank.Street;
  this.Municipality     =     tabel_bank.Municipality;
  this.Categories       =     tabel_bank.Categories;
  this.Phone            =     tabel_bank.Phone;
  this.Phones           =     tabel_bank.Phones;
  this.Review_Count     =     tabel_bank.Review_Count;
  this.Average_Rating   =     tabel_bank.Average_Rating;
  this.Review_URL       =     tabel_bank.Review_URL;
  this.Google_Maps_URL  =     tabel_bank.Google_Maps_URL;
  this.Latitude         =     tabel_bank.Latitude;
  this.Longitudea       =     tabel_bank.Longitudea;
  this.Website          =     tabel_bank.Website;
  this.Domain           =     tabel_bank.Domain;
  this.Opening_Hours    =     tabel_bank.Opening_Hours;
  this.Featured_Image   =     tabel_bank.Featured_Image;
  this.Cid              =     tabel_bank.Cid;
  this.Place_Id         =     tabel_bank.Place_Id;
}

//get all datas
Data.getAllData = (result) =>{
  koneksi.query("SELECT * FROM tabel_bank", (err, res, rows) => {
    if (err){
      console.log('Something is wrong', err);
      result(null, err);
    }
    console.log("tabel_bank connected", err);
    result(null, res);
  });
}

//get data by ID from database
Data.getDataByID = (id, result) =>{
  koneksi.query("SELECT * FROM tabel_bank WHERE id=?", id, (err, res, rows, field) =>{
    if(err){
      console.log("Error to connect by id", err);
      result(null, err);
    }
    result(null, res);
  })
}

//create new data
Data.createNewData = (tabel_bankReqData, result) =>{
  koneksi.query("INSERT INTO tabel_bank SET ? ", tabel_bankReqData, (err, res) =>{
    if(err){
      console.log("Error while inserting data");
      result(null, err);
    }else{
      console.log("Data created successfully");
      result(null, res);
    }
  })
}

//update data (MASIH ERROR KETIKA TESTING POSTMAN)
Data.updateData = (id, tabel_bankReqData, result) =>{
  koneksi.query("UPDATE tabel_bank SET Name=?,Fulladdress=?,Street=?,Municipality=?,Categories=?,Phone=?,Phones=?,Review_Count=?,Average_Rating=?,Review_URL=?,Google_Maps_URL=?,Latitude=?,Longitudea=?,Website=?,Domain=?,Opening_Hours=?,Featured_Image=?,Cid=?,Place_Id=? WHERE id=?", [tabel_bankReqData.Name,tabel_bankReqData.Fulladdress,tabel_bankReqData.Street,tabel_bankReqData.Municipality,tabel_bankReqData.Categories,tabel_bankReqData.Phone,tabel_bankReqData.Phones,tabel_bankReqData.Review_Count,tabel_bankReqData.Average_Rating,tabel_bankReqData.Review_URL,tabel_bankReqData.Google_Maps_URL,tabel_bankReqData.Latitude,tabel_bankReqData.Longitudea,tabel_bankReqData.Website,tabel_bankReqData.Domain,tabel_bankReqData.Opening_Hours,tabel_bankReqData.Featured_Image,tabel_bankReqData.Cid,tabel_bankReqData.Place_Id, id], (err, res)=>{
    if(err){
      console.log("Error while updating the Data");
      result(null, err);
    }else{
      console.log("Data updated successfully");
      result(null, res);
    }
  });
}
    
// delete data
Data.deleteData = (id, result)=>{
 
    koneksi.query("DELETE FROM tabel_bank WHERE id=?", [id], (err, res)=>{
    if(err){
      console.log("Error while deleting data");
      result(null, err);
    }else{
      result(null, res);
    }
  })



//update after deleted (for delete safely)
/*
koneksi.query("UPDATE FROM tabel_bank set is_deleted=? WHERE id=?", [1, id], (err, res)=>{
  if(err){
    console.log("Error while deleting data");
    result(null, err);
  }else{
    result(null, res);
  }
})
*/

}
module.exports = Data;