import { Router } from "express";
import seed from "../controllers/admin/seed";
import drop from "../controllers/admin/drop";

const router = Router()

router.get('/seed', seed)
router.get('/drop', drop)

export default router