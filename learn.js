// THis is just fo testing purpose

const express = require('express');
const mongo = require('mongodb');
const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.post('/api/students', (req,res)=> {
	var MongoClient = mongo.MongoClient;
	var url = "mongodb://localhost:27017/";

var name = req.body.user;
console.log(name+"------------------");
	MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db) {
	  if (err) throw err;
    var dbo = db.db("local");
    dbo.listCollections().toArray((err, items)=>{
				console.log(items);
	});
	  dbo.collection("Student").find({}, { projection: { _id: 0, firstName: 1, lastName: 1 } }).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		res.send(result);
		db.close();
	  });
	}); 
});
/*
app.get('/api/students/:fname', (req,res)=> {
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("mydb");
	  dbo.collection("students").find({}, { projection: { _id: 0, fname: 1, lname: 1 } }).toArray(function(err, result) {
		if (err) throw err;
		console.log(result);
		res.send(result);
		db.close();
	  });
	}); 
});

*/
app.get('/api/testo', (req,res)=> {
res.send("Hi this is a test API for testo");
});


const port = process.env.PORT || 9099;
app.listen(port, () => console.log(`Listening on port ${port}..`));
