var Realm = require('realm');

const BillSchema = {
	name: 'Bill',
	properties: {
		amt: 'string',
	}
};

let realm = new Realm({schema: [BillSchema]});

module.exports = realm;