import express from 'express';
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from '../../controllers/userController.js';

const router = express.Router();
// Get User data route
router.get('/', getAllUser);

// POST User data Route
router.post('/', createUser);

// GET Single User data Route
router.get('/:id', getSingleUser);

// GET Update User data Route
router.put('/:id', updateUser);

// DELETE Single User data Route
router.delete('/:id', deleteUser);

// export default router
export default router;
