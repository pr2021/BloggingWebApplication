const { Pool} = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'db.c1mxmtuo85dq.us-east-1.rds.amazonaws.com',
  database: 'db_cancel',
  password: 'admin123',
  port: 5432,
})

function mydata() {
    console.log('Data Connectivity Pool')
}