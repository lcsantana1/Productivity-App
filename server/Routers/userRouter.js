import express from "express";

const router = express.Router();

import { signup,signin}  from "../controllers/userController.js";




// localhost:5000/users/signup POST request
router.post("/signup", signup);

// localhost:5000/users/signin POST request
router.post("/signin", signin);


export default router;
