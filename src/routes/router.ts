import { Application } from "express";
import authRouter from "./auth";
import imagesRouter from "./images";


export default function router(app: Application): void {
  /**
   * Every source are specifed here
   */
  app.use("/auth", authRouter)
  app.use("/images", imagesRouter);
 

}
