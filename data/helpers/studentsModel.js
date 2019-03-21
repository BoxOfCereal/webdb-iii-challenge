const db = require("../dbConfig.js");

module.exports = {
	find: _ => {
		return "students";
	},
	findById: id => {
		let query = db
			.select("students.name as name", "cohorts.name as cohorts")
			.where({ "students.id": id })
			.from("students")
			.join("cohorts", "students.cohort_id", "=", "cohorts.id")
			.first();
		console.log(query.toSQL().toNative());
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
	},
	remove: id => {
		return db("students")
			.where({ id })
			.del();
	}
};
