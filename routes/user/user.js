import express from 'express';
import { userData } from '../../controllers/userController.js';

const router = express.Router();

router.get('/', userData);

// export default router
export default router;
