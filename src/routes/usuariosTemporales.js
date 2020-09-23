import { Router } from 'express';

import {
  getUsers,
  registryUsers,
  updateUser,
  deleteUser,
} from '../controllers/controladorUsuariosTemporales';

const router = Router();
router.route('/').get(getUsers).post(registryUsers);
router.route('/:id').put(updateUser).delete(deleteUser);

export default router;
