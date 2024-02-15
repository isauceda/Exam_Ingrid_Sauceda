import pg from 'pg-promise'
const pgp = pg()

const cnstr = `postgresql://postgres:Ingrid2033$@localhost:5432/api_cliente`;

const db = pgp (cnstr);

db.connect()
    .then(()=>{
        console.log("conexion exitosa")

    })
    .catch((err)=>{

        console.log(`Error de conexion , ${err}`)

    })

    export{db}