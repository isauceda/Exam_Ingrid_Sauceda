import {db} from '../Basededatos/conn.js';

const getPoliza = async (req,res)=>{

    const sql = `select * from tbl_poliza order by id`
    const result = await db.query (sql);
    res.json(result);

}

const postPoliza = async(req,res)=>{

    const {nombre}= req.body;
    const params = [nombre];

    const sql = `insert into tbl_poliza
                (nombre)
                values
                ($1) returning *`


   const result = await db.query (sql, params);

   res.json(result);
    
    }

    const putPoliza =  async(req, res)=>{

        const {nombre} = req.body
        const {id} = req.params

        const params = [
            nombre, 
             id
        ]

        const sql = `update tbl_poliza
        set
         nombre = $1,
         where id = $2 returning *`

         const result = await db.query (sql, params)

        res.json(result);

    }

    const deletePoliza = async (req, res)=>{

       
       const {id} = req.params;
        const params = [id];

      const sql = `delete from tbl_poliza where id = $1  returning *`;

       const result = await db.query (sql, params);

      res.json(result);

  }

export {getPoliza , postPoliza,putPoliza, deletePoliza}
