import { Router } from "express";
import getUser from "../controllers/users/getUser";
import login from "../controllers/users/login";
import register from "../controllers/users/register";
import setPhoto from "../controllers/users/setPhoto";

const router = Router()

router.get('/', getUser) // get user with chats
router.post('/', login) // login
router.post('/register', register) // register
router.post('/photo', setPhoto) // upload profile picture


export default router