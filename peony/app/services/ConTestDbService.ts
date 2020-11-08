//import mysql from 'promise-mysql';
import { BaseModel } from '../models/BaseModel';

export interface ITest {
	res: object;
    //res: string;
}

export class ConTestDbService {
	public async select(): Promise<ITest> {
		// sample_01
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
		// sample_02
/*
		const conn = await mysql.createConnection({
			host: 'mysql',
			user: 'laradock',
			password: 'secret',
			database: 'rose',
			multipleStatements: true
		});
		const result = await conn.query('select * from memos');
		conn.end();
*/
		const m = new BaseModel();
		// sample_03
		m.selectAll('memos').then(function(res: object) {
			console.log(res);
		});
		return {
			//res: 'empty return...'
            res: {}
		}
/*
		const result = await m.selectAll('memos');
		//console.log(result);

		return {
			res: result
		}
*/
	}

	public async connectSample(): Promise<ITest> {
		const m = new BaseModel();
		const result = await m.selectAll('memos');
		return {
			res: result
		}
    }
}
