import { Router } from 'express';

import {
  getUsers,
  registryUsers,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/controladorUsuariosPermanentes';

const router = Router();

router.route('/').get(getUsers).post(registryUsers);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

export default router;
