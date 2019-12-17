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

	dbo.collection("Friends_staffing").insertOne(col,function(err, respond){
		if (err)
			throw err;
		
		res.send("Document Inserted");
		console.log('Connection Established');
		db.close();
	})
	});

});

//Deleting a perticular column with id
app.post('/api/delete', (req,res)=> {
	var MongoClient = mongo.MongoClient;
	var url = "mongodb+srv://jas:12345@cluster0-5zpp0.mongodb.net/test?retryWrites=true&w=majority";

var id = req.body.id;
var agencyName = req.body.name;

	MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
	  if (err) throw err;
	var dbo = db.db("Best_Employment_Agencies");

	var col = {Employee_id : id};

	dbo.collection(agencyName).deleteOne(col,function(err, respond){
		if (err)
			throw err;
		
		res.send("Document Deleted");
		console.log('Connection Established');
		db.close();
	})
	});

});

//Finding a perticular column with id
app.post('/api/find', (req,res)=> {
	var MongoClient = mongo.MongoClient;
	var url = "mongodb+srv://jas:12345@cluster0-5zpp0.mongodb.net/test?retryWrites=true&w=majority";

var id = req.body.id;
var agencyName = req.body.name;

	MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
	  if (err) throw err;
	var dbo = db.db("Best_Employment_Agencies");

	var col = {Employee_id : id};

	dbo.collection(agencyName).find(col).toArray(function(err,result){
		if (err)
			throw err;
		
		res.send(result);
		console.log(result);
		db.close();
	})
	});

});

//Finding whole collection
app.post('/api/findWhole', (req,res)=> {
	var MongoClient = mongo.MongoClient;
	var url = "mongodb+srv://jas:12345@cluster0-5zpp0.mongodb.net/test?retryWrites=true&w=majority";

var agencyName = req.body.name;

	MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
	  if (err) throw err;
	var dbo = db.db("Best_Employment_Agencies");

	dbo.collection(agencyName).find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
		if (err)
			throw err;
		
		res.send(result);
		console.log(result);
		db.close();
	})
	});

});


//Update a perticulater data with perticular column
app.post('/api/updateName', (req,res)=> {
	var MongoClient = mongo.MongoClient;
	var url = "mongodb+srv://jas:12345@cluster0-5zpp0.mongodb.net/test?retryWrites=true&w=majority";

var id = req.body.id;
var agencyName = req.body.name1;
var name = req.body.name;


	MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
	  if (err) throw err;
	var dbo = db.db("Best_Employment_Agencies");
	
	var val = {Employee_id : id};
	var newVal = { $set: {e_name: name, Employee_id: id}}

	dbo.collection(agencyName).updateOne(val, newVal,function(err,result){
		if (err)
			throw err;
		
		res.send(result);
		console.log("1 document updated");
		db.close();
	})
	});

});

//Update a perticulater data with perticular column
app.post('/api/updateSalary', (req,res)=> {
	var MongoClient = mongo.MongoClient;
	var url = "mongodb+srv://jas:12345@cluster0-5zpp0.mongodb.net/test?retryWrites=true&w=majority";

var id = req.body.id;
var agencyName = req.body.name1;
var salary = req.body.salary;


	MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
	  if (err) throw err;
	var dbo = db.db("Best_Employment_Agencies");
	
	var val = {Employee_id : id};
	var newVal = { $set: {e_payRate: salary, Employee_id: id}}

	dbo.collection(agencyName).updateOne(val, newVal,function(err,result){
		if (err)
			throw err;
		
		res.send(result);
		console.log("1 document updated");
		db.close();
	})
	});

});



const port = process.env.PORT || 9099;
app.listen(port, () => console.log(`Listening on port ${port}..`));