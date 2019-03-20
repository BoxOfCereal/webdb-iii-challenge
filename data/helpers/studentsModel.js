const db = require("../dbConfig.js");

module.exports = {
	find: id => {
		let query = db("studentssd");
		if (id) {
			query.where({ id: id }).first();
		}
		return query;
	}
};
