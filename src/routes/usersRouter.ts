import { Router } from "express";
import getUser from "../controllers/users/getUser";
import login from "../controllers/users/login";
import register from "../controllers/users/register";
import setPhoto from "../controllers/users/setPhoto";
import verifyToken from "../middlewares/verifyToken";

const router = Router()

router.get('/', verifyToken, getUser) // get user with chats
router.post('/', login) // login
router.post('/register', register) // register
router.post('/photo', verifyToken, setPhoto) // upload profile picture


export default router