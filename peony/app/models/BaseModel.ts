import mysql from 'promise-mysql';

export class BaseModel
{
    //private _whereList: string[][] = [[],[]];

	public selectAll(tableName: string): Promise<object> {
		// Use arrow if you want to use 'this'. (NG: "function() {}", OK:"() => {}")
		// https://stackoverflow.com/questions/52533350/angular-call-function-with-promise-in-typescript
		return new Promise((resolve, reject) => {
			this._connection().then(con => {
				const res = con.query(`select * from ${tableName}`);
				con.end();
				resolve(res);
			});
		});
	}

	public selectWhere(tableName: string) {
	}

	public execQuery() {
	}

    public where(target: string, op: BaseModel.WHERE_OP, value: string) {
        //this._whereList[] = [target, op, value];
    }

/*
	private async _connection() {
		return await mysql.createConnection({
			host: 'mysql',
			user: 'laradock',
			password: 'secret',
			database: 'rose',
			multipleStatements: true
		});
	}
*/
	private _connection(): Promise<any> {
		return new Promise((resolve, reject) => {
			const con = mysql.createConnection({
				host: 'mysql',
				user: 'laradock',
				password: 'secret',
				database: 'rose',
				multipleStatements: true
			});
			resolve(con);
		});
	}
}

// https://stackoverflow.com/questions/29844959/enum-inside-class-typescript-definition-file
export namespace BaseModel
{
    export enum WHERE_OP
    {
        EQ = '=',
        NE = '<>',
        GT = '>',
        LT = '<',
        GE = '>=',
        LE = '<=',
    }
}
