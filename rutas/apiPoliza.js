import express  from "express";
const poliza = express();
import { getPoliza, postPoliza, putPoliza, deletePoliza } from "../controles/polizacontraller.js";


poliza.get('', getPoliza);

poliza.post('', postPoliza);

poliza.put( '/:id',putPoliza);

poliza.delete( '/:id', deletePoliza)

export{ poliza }

