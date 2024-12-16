import { Router } from "express";
import getChat from "../controllers/chats/getChat";
import createChat from "../controllers/chats/createChat";
import createGroup from "../controllers/chats/createGroup";

const router = Router()

router.get('/:id', getChat) // get all messages by chat id
router.post('/', createChat)  // create new chat
router.post('/group', createGroup) // create new group

export default router