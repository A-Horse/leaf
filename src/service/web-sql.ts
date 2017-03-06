
export class WebSql {
  constructor() {

  }

  openDb(name, version, description, size = 5 * 1024 * 1024) {
    this.db = openDatabase(name, version, description, size);
  }

  execSQL(sql) {
    this.db.transaction((tx) => {
      tx.executeSql(sql, []);
    });
  }

}
