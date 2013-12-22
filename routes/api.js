
var person = {
	tel:""

};


exports.create= function(req, res) {
	console.log(">>>>>>>>>>>>> create");

	person.tel = "123456789";

	res.end();
};

exports.read= function(req, res) {
	console.log(">>>>>>>>>>>>> read");

	res.send(person);
 	res.end();
};

exports.update= function(req, res) {
	console.log(">>>>>>>>>>>>> update");
	console.log(req.query);
	person.tel = req.query.tel;


	res.end();
};

exports.delete= function(req, res) {
	console.log(">>>>>>>>>>>>> delete");


	res.end();
};