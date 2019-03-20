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

router.post("/", (req, res) => {
	const newStudent = req.body;
	if (!newStudent.name || !newStudent.cohort_id) {
		res.status(400).json({ error: "students require a name and cohort_id" });
	} else {
		db.add(newStudent)
			.then(id => {
				db.find(id).then(student => res.status(200).json(student));
			})
			.catch(({ errno }) =>
				res.status(500).json({ error: "student could not be added", errno })
			);
	}
});

module.exports = router;
