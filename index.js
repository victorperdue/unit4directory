require('dotenv').config()
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL || `postgres://localhost/acme_hr_directory_db`)

const init = async () => {
    await client.connect();
    console.log("db connected")
    //SQL tables
    let SQL = /*SQL*/ `
    DROP TABLE IF EXISTS notes;
    DROP TABLE IF EXISTS categories;
    CREATE TABLE categories(
        id SERIAL PRIMARY KEY,
        name VARCHAR(100)
    );
    CREATE TABLE notes(
        id SERIAL PRIMARY KEY,
        txt VARCHAR(500),
        category_id INTEGER REFERENCES categories(id) NOT NULL
    )
    `
    )
     

};

init();

//42:31