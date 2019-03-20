const express = require("express");
const router = express.Router();
const db = require("../data/helpers/studentsModel.js");

router.get("/", (req, res) => {
	db.find()
		.then(students => res.status(200).json(students))
		.catch(({ errno }) =>
			res.status(500).json({ error: "students could not be retrieved", errno })
		);
});

module.exports = router;
