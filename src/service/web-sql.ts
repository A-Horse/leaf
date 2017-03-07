
export class WebSql {
  constructor() {

  }

  openDb(name, version, description, fn, size = 5 * 1024 * 1024) {
    this.db = openDatabase(name, version, description, size, fn);
  }

  execSQL(sql, params = []) {
    this.db.transaction((tx) => {
      tx.executeSql(sql, params);
    });
  }

  createAtomTable() {
    this.execSQL(`
    CREATE TABLE IF NOT EXISTS atoms (
    id INTEGER PRIMARY KEY,
    atom TEXT,
    author TEXT,
    date TEXT)
    `)
  }

}
