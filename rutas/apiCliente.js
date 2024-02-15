import  express  from "express"
const cliente = express();
import {db} from '../Basededatos/conn.js'


cliente.get('', async (req,res)=>{

    const sql = `select * from tbl_cliente order by id`
    const result = await db.query (sql);

res.json(result);

})

cliente.post('', async(req,res)=>{

    const {nombre, apellido, direccion}= req.body;
    const params = [nombre, apellido, direccion];

    const sql = `insert into tbl_cliente
                (nombre, apellido, direccion)
                values
                ($1, $2, $3) returning *`


   const result = await db.query (sql, params);

   res.json(result);
    
    })

    cliente.put( '/:id', async(req, res)=>{

        const {nombre, apellido, direccion} = req.body
        const {id} = req.params

        const params = [
            nombre, 
            apellido,
            direccion,
             id
        ]

        const sql = `update tbl_cliente
        set
         nombre = $1,
         apellido = $2,
         direccion= $3
         where id = $4 returning *`

         const result = await db.query (sql, params)

        res.json(result);

    })

    cliente.delete( '/:id', async (req, res)=>{

          const params = [
        req.params.id];

        const sql = `delete from tbl_cliente where id = $1  returning *`;

         const result = await db.query (sql, params);

        res.json(result);

    })

export{ cliente }

