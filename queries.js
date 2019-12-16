const express = require('express');
const mongo = require('mongodb');
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.post('/api/agency', (req,res)=> {
	var MongoClient = mongo.MongoClient;
	var url = "mongodb+srv://jas:12345@cluster0-5zpp0.mongodb.net/test?retryWrites=true&w=majority";

var id = req.body.id;
var name = req.body.name;
var gender = req.body.gender;
var payRate = req.body.payrate;
var address = req.body.adress;
var contactNo = req.body.contact;
var Nationality = req.body.nationality;

	MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
	  if (err) throw err;
	var dbo = db.db("Best_Employment_Agencies");

	var col = {Employee_id : id, e_name : name, e_gender : gender, e_payRate : payRate, e_address : address, e_contactNo : contactNo, e_nationality : Nationality};

	dbo.collection("Great_staffing").insertOne(col,function(err, respond){
		if (err)
			throw err;
		
		res.send("Document Inserted");
		console.log('Connection Established');
		db.close();
	})
	});

});



const port = process.env.PORT || 9099;
app.listen(port, () => console.log(`Listening on port ${port}..`));