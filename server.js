const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db;

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

MongoClient.connect('mongodb+srv://app:appuser@sport-stuff-apgxc.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, (err, client) => {
	if (err) return console.log(err);
	db = client.db('shop')
});

app.get('/products', function(req, res) {
	db.collection('products').find({}).toArray(function(err, results) {
		console.log(results);
		res.end(JSON.stringify(results));
	});
});

app.get('/categories', function(req, res) {
	db.collection('category').find({}).toArray(function(err, results) {
		console.log(results);
		if (err) res.send(err);
		res.end(JSON.stringify(results));
	});
});

app.post('/products', function(req, res) {
	var status = db.collection('products').insertOne(req.body);
	res.end(JSON.stringify(status));
});

app.post('/categories', function(req, res) {
	var status = db.collection('category').insertOne(req.body);
	res.end(JSON.stringify(status));
});

app.put('/products/:prodId', function(req, res) {
	db.collection('product').findOneAndUpdate({_id: new ObjectID(req.params['prodId'])}, (err, result) => {
		if (err) return res.send(err);
		res.send(JSON.stringify(result));
	})
});

app.put('/categories/:categoryId', function(req, res) {
	db.collection('category').findOneAndUpdate({_id: new ObjectID(req.params['categoryId'])}, (err, result) => {
		if (err) return res.send(err);
		res.send(JSON.stringify(result));
	})
});


app.listen(5000);
