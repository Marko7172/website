 // database.js
 const Pool = require('pg').Pool;
 const pool = new Pool({
     user: "postgres",
     password: "7172",
     database: "testWad",
     host: "localhost",
     port: "5432"
 });

 const startPool = async (query1, query2) => {
    try {
        await pool.connect();
        await pool.query(query1);
        await pool.query(query2);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
  };
  
  const postList = `
      CREATE TABLE IF NOT EXISTS "postlist" (
          id SERIAL PRIMARY KEY,
          title VARCHAR(200) NOT NULL,
          body VARCHAR(200) NOT NULL,
        date VARCHAR(200) NOT NULL
      );`;
  
  const userTable =
    `CREATE TABLE IF NOT EXISTS "users" (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
      email VARCHAR(200) NOT NULL UNIQUE,
      password VARCHAR(200) NOT NULL
      );`
  
  startPool(postList, userTable).then(result => {
    if (result) {
        console.log('Tables "users" and  table "postlist" are created');
    }
  });
 
 module.exports = pool;
 