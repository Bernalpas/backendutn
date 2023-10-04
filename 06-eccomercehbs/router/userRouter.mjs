import express from 'express';
const router = express.Router();
import { check } from 'express-validator'
import { 
    appInicio,
    userCreate
} from '../controller/userController.mjs';


router.get('/', appInicio);

router.post('/', 
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