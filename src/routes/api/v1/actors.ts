import express from "express"
import { getActorsController } from "../../../controllers/api/v1/getActors.controller"
import { getActorByIDController } from "../../../controllers/api/v1/getActorsByID.controller"

// -------------------------------------------------------------------------------

const router = express.Router()

router.get("/", getActorsController)
router.get("/:actor_id", getActorByIDController)

export default router
