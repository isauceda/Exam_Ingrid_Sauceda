import express from 'express';
const app = express();
import { cliente } from './rutas/apiCliente.js'
import { Poliza } from  './rutas/apiPoliza.js';

app.use(express.json());
const port = 4000;

app.use ('/api/cliente', cliente);
app.use ('/api/poliza', Poliza);

app.listen(port, ()=>{

    console.log(`Escuchando en el puerto ${port}`);
});
