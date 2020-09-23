import dotenv from 'dotenv';
import { app } from './app';
import { startMongoose } from './database';

dotenv.config();
let puerto = app.get('port');
app.listen(puerto, () => console.log('Escuchando puerto:' + puerto));
startMongoose();
