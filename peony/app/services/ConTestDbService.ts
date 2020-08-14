import mysql from 'promise-mysql';

export interface ITest {
	res: object;
}

export class ConTestDbService {
	public async select(): Promise<ITest> {
/*
		mysql.createConnection({
			host: 'mysql',
			user: 'laradock',
			password: 'secret',
			database: 'rose',
			multipleStatements: true
		}).then(function(con) {
			const res = con.query('select * from memos');
			con.end();
			return res;
		}).then(function(rows) {
			console.log(rows);
		});
*/
		const conn = await mysql.createConnection({
			host: 'mysql',
			user: 'laradock',
			password: 'secret',
			database: 'rose',
			multipleStatements: true
		});
		const result = await conn.query('select * from memos');
		conn.end();

		return {
			res: result
		}
	}
}
