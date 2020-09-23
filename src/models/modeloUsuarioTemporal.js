import { Schema, model } from 'mongoose';

export const modeloUsuarioTemporal = model(
  'modeloUsuarioTemporal',
  new Schema(
    {
      fechaInicio: { default: Date.now, type: String, required: true },
      nombre: { type: String, required: true },
      numero: { type: String, required: true },
      lugar: { type: String, required: true },
      posicion: { type: String, required: true },
    },
    { timestamps: true }
  )
);
