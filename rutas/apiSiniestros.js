import  express  from "express"
const Siniestros = express();
import { getsiniestros, postsiniestros, putsiniestros, deletesiniestros } from "../controles/siniestroscontroller.js";


Siniestros.get('', getsiniestros);

Siniestros.post('', postsiniestros)

Siniestros.put( '/:id',putsiniestros)

Siniestros.delete( '/:id', deletesiniestros)

export{ Siniestros }