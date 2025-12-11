
import { Router } from 'express';
import * as controller from '../controllers/users.controller.js';
import { apiKeyMiddleware } from '../utils/apiKeyMiddleware.js';


const router = Router();

// Proteger todas las rutas con el middleware de API Key
router.use(apiKeyMiddleware);

router.get('/', controller.getAllUsers);
router.post('/', controller.addUser);
router.get('/:id', controller.getUserById);
router.put('/:id', controller.updateUser);

export default router;