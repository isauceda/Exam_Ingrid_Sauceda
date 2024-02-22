import pg from 'pg-promise'
import dotenv from 'dotenv';
dotenv.config();
const pgp = pg()

const user = process.env.user_;
const pass = process.env.pass;
const dataBase = process.env.db;
const host = process. env.host;
const portdb = process.env.port_db;

const cnstr = `postgresql://${user}:${pass}@${host}:${portdb}/${dataBase}`;
const db = pgp (cnstr);

db.connect()
    .then(()=>{
        console.log("conexion exitosa")

    })
    .catch((err)=>{

        console.log(`Error de conexion , ${err}`)

    })

    export{db}