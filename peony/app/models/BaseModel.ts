import mysql from 'promise-mysql';

class BaseModel {
	private _con: object;
	constructor() {
		this._con = await mysql.createConnection({
			host: 'mysql',
			user: 'laradock',
			password: 'secret',
			database: 'rose',
			multipleStatements: true
		});
	}

	public Query() {
		//todo
	}
}
