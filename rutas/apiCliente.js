import  express  from "express"
const cliente = express();
import { getcliente, postcliente, putcliente, deletecliente } from "../controles/clientecontroller.js";


cliente.get('', getcliente);

cliente.post('', postcliente)

    cliente.put( '/:id',putcliente)

    cliente.delete( '/:id', deletecliente)

export{ cliente }

