const db = require("../dbConfig.js");

module.exports = {
	find: id => {
		let query = db("students");
		if (id) {
			query.where({ id: id }).first();
		}
		return query;
	},
	add: student => {
		return db
			.insert(student)
			.into("students")
			.then(ids => ids[0]);
	},
	update: (id, student) => {
		return db("students")
			.where({ id: id })
			.update(student);
	}
};
