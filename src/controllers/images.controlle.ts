import { Request, Response } from "express";
import { CreateImage } from "../models/auth.models";
import imagesService from "../services/images.service";
import { BaseController } from "../types/base.controller";
import { HttpError } from "../types/custom.error";

class ImagesController extends BaseController {
      async create(_req: Request | any, res: Response) {
        try {
          const data = await CreateImage.validateAsync(_req.body);
          const result = await imagesService.create(data);
          this.responseHandler(
            res,
            { message: `Image ${result.id} created successfully` },
            200
          );
        } catch (error: any) {
          if (error.code && error.code === "P2002") {
            this.responseHandler(res, { error: "Image was already register for this user" }, 400);
          } else {
            this.errorHandler(res, error);
          }
        }
      }
      async getImageById(_req: Request | any, res: Response) {
        try {
          const { id } = _req.params;
          if (!id) {
            throw new HttpError({ error: "Image id is required" }, 400);
          }
          this.responseHandler(
            res,
            await imagesService.findById(_req.user.id,(id)),
            200
          );
        } catch (error) {
          this.errorHandler(res, error);
        }
      }
}

export default new ImagesController();
