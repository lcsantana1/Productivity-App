import express from "express"

import { addtodo, deletetodo, filtertodo, gettodoByID, updatetodo, updatetodoiscomplete } from "../controllers/todoController.js"
const router = express.Router()


router.route("/addtodo").post(addtodo)
 router.route("/update/:id").put(updatetodo)
 router.route("/updateiscomplete/:id").put(updatetodoiscomplete)
 router.route("/delete/:id").delete(deletetodo)
 router.route("/filter/:id/:filtertodo").get(filtertodo)
router.route("/:id").get(gettodoByID)



export default router