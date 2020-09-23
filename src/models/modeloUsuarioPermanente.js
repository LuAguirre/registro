import { Schema, model } from 'mongoose';
export const modeloUsuarioPermanente = model(
  'modeloUsuarioPermanente',
  new Schema(
    {
      dpi: {
        type: String,
        require: true,
        unique: true,
      },
      nit: String,
      primerNombre: {
        type: String,
        require: true,
      },
      nombre: {
        type: String,
        require: true,
      },
      segundoNombre: String,
      apellido: {
        type: String,
        require: true,
      },
      segundoApellido: String,
      numeroPersonal: {
        type: String,
        required: true,
      },
      numeroCasa: String,
      emailPersonal: {
        type: String,
        required: true,
      },
      emailTrabajo: String,
      posicionFuncional: String,
      posicionNominal: {
        type: String,
        require: true,
      },
      departamentoLaboral: {
        type: String,
        require: true,
      },
    },
    { timestamps: true }
  )
);
