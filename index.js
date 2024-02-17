import express from 'express';

import { cliente } from './rutas/apiCliente.js'
import { Poliza } from  './rutas/apiPoliza.js'
import { Pagos } from './rutas/apiPagos.js'
import { beneficiario } from './rutas/apiBenefiario.js'
import {Siniestros } from './rutas/apiSiniestros.js'

const app = express();

app.use ( express.json());

const port = 9100;

app.use ('/api/cliente', cliente);
app.use ('/api/poliza', Poliza);
app.use ('/api/Pagos', Pagos);
app.use ('/api/beneficiario', beneficiario);
app.use ('/api/Siniestros', Siniestros)

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port}`);
});
