let dbParams = {};
if (process.env.DATABASE_URL) {
  dbParams.connectionString = process.env.DATABASE_URL;
} else {
  dbParams = {
    host: 'localhost',
    port: process.env.DB_PORT,
    user: 'vagrant',
    password: '123',
    database: 'midterm_db'
  };
}

module.exports = dbParams;
