import {db} from '../db/conn.js';

const getPagos = async (req,res)=>{

    const sql = `select * from tbl_Pagos order by id`
    const result = await db.query (sql);
    res.json(result);

}

const postPagos = async(req,res)=>{

    const {fecha_pago,monto}= req.body;
    const params = [fecha_pago,monto];

    const sql = `insert into tbl_poliza
                (fecha_pago,monto)
                values
                ($1, $2) returning *`


   const result = await db.query (sql, params);

   res.json(result);
    
    }

    const putPagos =  async(req, res)=>{

        const {fecha_pago,monto} = req.body
        const {id} = req.params

        const params = [
            fecha_pago, 
            monto,
             id
        ]

        const sql = `update tbl_cliente
        set
         fecha_pago = $1,
         Monto = $2,
         where id = $3 returning *`

         const result = await db.query (sql, params)

        res.json(result);

    }

    const deletePagos = async (req, res)=>{

        const params = [
      req.params.id];

      const sql = `delete from tbl_pagos where id = $1  returning *`;

       const result = await db.query (sql, params);

      res.json(result);

  }


export {getPagos , postPagos,putPagos, deletePagos}
