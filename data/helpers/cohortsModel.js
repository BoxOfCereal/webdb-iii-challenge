const db = require("../dbConfig.js");

module.exports = {
	findAll: () => {
		return db("cohorts");
	},
	findById: id => {
		return db("cohorts").where({ id: id });
	},
	add: cohort => {
		return db
			.insert(cohort)
			.into("cohorts")
			.then(ids => ids[0]);
	},
	findStudentsByCohort: id => {
		return db("cohorts")
			.join("students", "students.cohort_id", "=", "cohorts.id")
			.where("cohort_id", "=", `${id}`);
	}
};
