import express  from "express";
const Pagos = express();
import { getPagos, postPagos, putPagos, deletePagos } from "../controles/pagoscontroller.js";


Pagos.get('', getPagos);

Pagos.post('', postPagos);

Pagos.put( '/:id',putPagos);

Pagos.delete( '/:id', deletePagos)

export{ Pagos }