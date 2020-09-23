import { modeloUsuarioTemporal } from '../models/modeloUsuarioTemporal';

export const getUsers = (req, res) => {
  modeloUsuarioTemporal.find()
    .then((users) => res.json(users))
    .catch((error) => {
      res.status(401);
      res.send(error.message);
    });
};

export const registryUsers = (req, res) => {
  const newmodeloUsuarioTemporal = new modeloUsuarioTemporal(req.body);
  newmodeloUsuarioTemporal
    .save()
    .then(() => res.json({ message: 'usuario agregado' }))
    .catch((error) => {
      res.status(401);
      res.send(error.message);
    });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  modeloUsuarioTemporal.findById(id)
    .then((user) => res.json(user))
    .catch((error) => {
      res.status(401);
      res.send(error.message);
    });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  modeloUsuarioTemporal.findByIdAndDelete(id)
    .then(() => res.json({ message: 'usuario eliminado' }))
    .catch((error) => {
      res.status(401);
      res.send(error.message);
    });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  modeloUsuarioTemporal.findByIdAndUpdate(id, req.body)
    .then(() => res.json({ message: 'usuario eliminado' }))
    .catch((error) => {
      res.status(401);
      res.send(error.message);
    });
};
