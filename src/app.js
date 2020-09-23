import express from 'express';
import cors from 'cors';

import usuariosTemporales from './routes/usuariosTemporales';
import usuariosPermanentes from './routes/usuariosPermanentes';

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(cors()); // evita el error de cors;
app.use(express.json());

app.use('/api/permanentes', usuariosPermanentes);
app.use('/api/temporales', usuariosTemporales);

export { app };
