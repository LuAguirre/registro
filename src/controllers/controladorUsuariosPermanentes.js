import { modeloUsuarioPermanente } from '../models/modeloUsuarioPermanente';

export const getUsers = (req, res) => {
  modeloUsuarioPermanente.find()
    .then((users) => { console.log(users);return res.json(users)})
    .catch((error) => {
      console.log(error);
      res.status(401);
      res.send(error.message);
    });
};

export const registryUsers = (req, res) => {
  const newmodeloUsuarioPermanente = new modeloUsuarioPermanente(req.body);
  newmodeloUsuarioPermanente
    .save()
    .then(() => res.json({ message: 'usuario agregado' }))
    .catch((error) => {
      console.log(error);
      res.status(401);
      res.send(error.message);
    });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  modeloUsuarioPermanente.findById(id)
    .then((user) => res.json(user))
    .catch((error) => {
      console.log(error);
      res.status(401);
      res.send(error.message);
    });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  modeloUsuarioPermanente.findByIdAndDelete(id)
    .then(() => res.json({ message: 'usuario eliminado' }))
    .catch((error) => {
      console.log(error);
      res.status(401);
      res.send(error.message);
    });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  console.log(id, req.body);
  modeloUsuarioPermanente.findByIdAndUpdate(id, req.body)
    .then(() => res.json({ message: 'usuario eliminado' }))
    .catch((error) => {
      console.log(error);
      res.status(401);
      res.send(error.message);
    });
};
