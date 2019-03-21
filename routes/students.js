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

router.get("/:id", (req, res) => {
	const { id } = req.params;
	db.findById(id)
		.then(student => {
			console.log(student);
			if (!student) {
				res.status(404).json({ error: "student does not exist." });
			} else {
				res.status(200).json(student);
			}
		})
		.catch(error => {
			console.log(error);
			res.status(500).json({ error: "could not get student", errno });
		});
});

router.put("/:id", (req, res) => {
	const { id } = req.params;
	const updatedStudent = req.body;
	db.update(id, updatedStudent)
		.then(count => {
			if (count) {
				db.find(id).then(student => res.status(200).json(student));
			} else {
				res.status(404).json({ error: "student does not exist.", errno });
			}
		})
		.catch(({ errno }) =>
			res.status(500).json({ error: "student could not be updated", errno })
		);
});

router.get("/:id", (req, res) => {
	const { id } = req.params;
	db.find(id)
		.then(student => {
			student
				? res.status(200).json(student)
				: res.status(404).json({ error: "student does not exist.", errno });
		})
		.catch(({ errno }) =>
			res.status(500).json({ error: "student could not be found", errno })
		);
});

router.delete("/:id", (req, res) => {
	const { id } = req.params;
	db.remove(id)
		.then(count => {
			count
				? res.status(200).json({ message: "Student Deleted" })
				: res.status(404).json({ error: "student does not exist.", errno });
		})
		.catch(({ errno }) =>
			res.status(500).json({ error: "student could not be deleted", errno })
		);
});

module.exports = router;
