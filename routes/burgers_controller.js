var db = require("../models");

module.exports = function(app) {
	app.get("/", function(req, res) {
		db.burger.findAll({}).then(function(data) {
			res.render("index", {burgers: data});
		})
	});

	app.post("/", function(req, res) {
		db.burger.create({
			burger_name: req.body.name
		}).then(function(data) {
			res.redirect("/");
		});
	});

	app.put("/:id", function(req, res) {
		db.burger.update(
		{
			devoured: true
		},
		{
			where: {
				id: req.params.id
			}
		}).then(function(data) {
			res.redirect("/");
		});
	});

	app.delete("/:id", function(req, res) {
		db.burger.destroy({
			where: {
				id: req.params.id
			}
		}).then(function(data) {
			res.redirect("/");
		});
	});
};

// var router = express.Router();

// router.get("/", function(req, res) {
// 	burger.all(function(data) {
// 		res.render("index", {burgers: data});
// 	});
// });

// router.post("/", function(req, res) {
// 	burger.create(["burger_name"], [req.body.name], function() {
// 		res.redirect("/");
// 	});
// });

// router.put("/:id", function(req, res) {
// 	var boolean = (req.body.boolean === "true");
// 	burger.update(["devoured"], [boolean], "id", parseInt(req.params.id), function() {
// 		res.redirect("/");
// 	});
// });

// router.delete("/:id", function(req, res) {
// 	burger.delete("id", req.params.id, function(data) {
// 		res.redirect("/");
// 	});
// });

// module.exports = router;