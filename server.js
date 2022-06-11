const express = require("express");
const bodyParser = require("body-parser");
const koneksi = require("./config/database");
const app = express();
const port = process.env.PORT || 2000;

//parse request data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//define root route
app.get("/", (req, res) => {
  res.send('Welcome to TrasHub Database');
  });
  
//import data routes
const dataRoutes = require("./src/routes/data.route");
const Data = require("./src/models/data.model");

//create data routes
app.use('/api/data', dataRoutes);

//alternatif update data yang gagal
// app.put('/api/data/:id', async (req,res) =>{
//   try {
//     const {Name, Fulladdress, Street, Municipality, Categories, Phone, Phones, Review_Count, Average_Rating, Review_URL, Google_Maps_URL, Latitude, Longitudea, Website, Domain, Opening_Hours, Featured_Image, Cid, Place_Id} = req.body
//     const id = req.params.id

//     const updateData = await Data.updateData({
//       Name,Fulladdress,Street,Municipality,Categories,Phone,Phones,Review_Count,Average_Rating,Review_URL,Google_Maps_URL,Latitude,Longitudea,Website,Domain,Opening_Hours,Featured_Image,Cid,Place_Id
//     }, {where : {id:id}});

//     await updateData;
//     res.json("Data updated successfully");
//   }catch (err) {
//     console.error(err.message);
//     res.status(500).send("server error");
//   }
// })

// =======================    A S L I     =====================

// app.get("/api/data", (req, res) => {
//   const querySql = "SELECT * FROM tabel_bank";

//   koneksi.query(querySql, (err, rows, field) => {
//     if (err) {
//       return res.status(500).json({
//         msg: "Something is wrong",
//         error: err,
//       });
//     }
//     res.status(200).json({ success: true, data: rows });
//   });
// });

// listen to the port
app.listen(port, () => console.log(`Server running at port ${port}`));
