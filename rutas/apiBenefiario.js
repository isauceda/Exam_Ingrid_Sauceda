import  express  from "express"
const beneficiario = express();
import { getbeneficiario, postbeneficiario, putbeneficiario, deletebeneficiario } from "../controles/beneficiarioscontroller.js";


beneficiario.get('', getbeneficiario);

beneficiario.post('', postbeneficiario)

    beneficiario.put( '/:id',putbeneficiario)

    beneficiario.delete( '/:id', deletebeneficiario)

export{ beneficiario }

