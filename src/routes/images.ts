import { Router } from "express";
import imagesControlle from "../controllers/images.controlle";
import { authMiddleware } from "../middlewares/auth.middleware";
import multer from "../services/multer";

//Definition of every endpoint from source
export default Router().
post("/upload", multer.single('image'),authMiddleware, (req, res) => imagesControlle.create(req, res))
.get("/:id", authMiddleware, (req, res) => imagesControlle.getImageById(req,res))

