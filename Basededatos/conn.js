import pg from 'pg-promise'
import dotenv from 'dotenv';
dotenv.config();
const pgp = pg()

const use = process.env.user;
const pass = process.env.pass;
const dataBase = process.env.db;
const host = process. env.host;
const portDb = process.env.port_db;

const cnstr = `postgresql://${user}:${pass}@${host}:${portDb}/${dataBase}`;
const db = pgp (cnstr);

db.connect()
    .then(()=>{
        console.log("conexion exitosa")

    })
    .catch((err)=>{

        console.log(`Error de conexion , ${err}`)

    })

    export{db}