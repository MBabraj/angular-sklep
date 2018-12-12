var express = require('express');
// var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin1@ds131784.mlab.com:31784/angular-sklep', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'błąd połączenia...'));
db.once('open', function() {
// połączenie udane!
});


var fs = require("fs");

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

app.get('/products', function (req, res) {
fs.readFile( __dirname + "/" + "product.json", 'utf8', function (err, data) {console.log( data );
res.end( data );
});
})



// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json()); // parse application/json

var Schema = mongoose.Schema;
var ProductSchema = new Schema({
	id: Number,
	name: String,
	quantity: Number,
	price: Number,
	description: String,
	image: String,
	kategoria: String
});

var prodModel = mongoose.model('Products', ProductSchema);


app.get('/', function(req, res) {
	// var data = prodModel.find();
	// console.log(data.keys());
	// res.end();

	var collections = db.db.listCollections(function (e,c) {
		if (e) {
			console.log('error');
		} else {
			return c.map(col => col.name)
		}
	});
	console.log(collections);
	res.end('chuj'+collections);
})
app.listen(5000);