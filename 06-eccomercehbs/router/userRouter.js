import { Router } from 'express';
import { check } from 'express-validator'
import { userLogin, userCreate } from '../controller/userController.js';

const router = Router();

router.get('/login', userLogin);

router.post('/create', 
    [
        check('nombre').isLength({ min: 4 }),
        check('email').isEmail(),
        check('password').isLength({ min: 6 }),
    ],
    userCreate
);

//crear un formulario con nombre, email y password
//router.get('/user', userRegister);
export default router;