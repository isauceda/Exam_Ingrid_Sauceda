import {db} from '../db/conn.js'

const getbeneficiario = async (req,res)=>{

    const sql = `select * from tbl_beneficiarios order by id`
    const result = await db.query (sql);

res.json(result);

}

const postbeneficiario = async(req,res)=>{

    const {nombre, apellido}= req.body;
    const params = [nombre, apellido];

    const sql = `insert into tbl_beneficiarios
                (nombre, apellido)
                values
                ($1, $2) returning *`


   const result = await db.query (sql, params);

   res.json(result);
    
    }

    const putbeneficiario =  async(req, res)=>{

        const {nombre, apellido} = req.body
        const {id} = req.params

        const params = [
            nombre, 
            apellido,
             id
        ]

        const sql = `update tbl_beneficiarios
        set
         nombre = $1,
         apellido = $2,
         where id = $3 returning *`

         const result = await db.query (sql, params)

        res.json(result);

    }

    const deletebeneficiario = async (req, res)=>{

        const params = [
      req.params.id];

      const sql = `delete from tbl_cliente where id = $1  returning *`;

       const result = await db.query (sql, params);

      res.json(result);

  }

export {getbeneficiario , postbeneficiario,putbeneficiario, deletebeneficiario}
