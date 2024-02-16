import {db} from '../db/conn.js'

const getsiniestros = async (req,res)=>{

    const sql = `select * from tbl_siniestros order by id`
    const result = await db.query (sql);

res.json(result);

}

const postsiniestros = async(req,res)=>{

    const {descripcion, fecha_siniestro}= req.body;
    const params = [descripcion, fecha_siniestro];

    const sql = `insert into tbl_siniestros
                (descripcion, fecha_siniestro)
                values
                ($1, $2) returning *`


   const result = await db.query (sql, params);

   res.json(result);
    
    }

    const putsiniestros =  async(req, res)=>{

        const {descripcion, fecha_siniestro} = req.body
        const {id} = req.params

        const params = [
            descripcion, 
            fecha_siniestro,
            id
        ]

        const sql = `update tbl_siniestros
        set
         descripcion = $1,
         fecha_siniestro = $2,
         where id = $3 returning *`

         const result = await db.query (sql, params)

        res.json(result);

    }

    const deletesiniestros = async (req, res)=>{

        const params = [
      req.params.id];

      const sql = `delete from tbl_siniestros where id = $1  returning *`;

       const result = await db.query (sql, params);

      res.json(result);

  }

export {getsiniestros , postsiniestros,putsiniestros, deletesiniestros}
