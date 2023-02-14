
import prisma from "../database/client";
import { Images, User } from "@prisma/client";
import { CustomError, HttpError } from "../types/custom.error";
import { json } from "body-parser";

class ImageService {
  
  async create(Image: Images) {
    return prisma.images.create({ data: Image});
  }
  
  async findById(userId: number, id: string) {
    const img = await prisma.images.findFirst({
      where: {
        userId: userId,
        id: id,
      },
    });
    if (!img) {
      return ({ error: `Image not found in user: ${userId}` });
    }
    return {
      url: img.image,
    };
  }};
  
  export default new ImageService();


