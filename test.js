var mongodb = require('mongodb').MongoClient;
var url = "mongodb+srv://jas:12345@cluster0-5zpp0.mongodb.net/test?retryWrites=true&w=majority";

mongodb.connect(url, { useUnifiedTopology: true },function(err, db){
	if (err)
	{
		throw err;
	}
	var mydatabase = db.db('exam3_c0742733');

	var mycol = {Name :"jasbir", class :"csat"};
	
	mydatabase.collection("Cestar_c0742733").insertOne(mycol,function(err, respond){
		if (err)
			throw err;
		console.log('Connection Established');
		db.close();
	})
})
	
