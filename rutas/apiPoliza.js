import express  from "express";
const Poliza = express();
import { getPoliza, postPoliza, putPoliza, deletePoliza } from "../controles/polizacontraller.js";


Poliza.get('', getPoliza);

Poliza.post('', postPoliza);

Poliza.put( '/:id',putPoliza);

Poliza.delete( '/:id', deletePoliza)

export{ Poliza }

