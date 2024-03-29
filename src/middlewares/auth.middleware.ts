import { NextFunction, Request, Response } from "express";
import { promisify } from "util";
import * as jwt from "jsonwebtoken";
import userService from "../services/user.service";
import { CustomError } from "../types/custom.error";

/**
 * @param {Request} req 
 * @returns 
 */
function getAccessTokenFromHeader(req: Request): string | null {
  const authorization = req.headers["authorization"]?.split(" ");
  return authorization ? authorization[1] : null;
}
/**
 * @param {Request | any} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */

export async function authMiddleware(
  req: Request | any,
  res: Response,
  next: NextFunction
) {
  try {
    const { SECRET_KEY } = process.env;

    const token = getAccessTokenFromHeader(req);
    const verifyAsync: any = promisify(jwt.verify).bind(jwt);
    const payload = await verifyAsync(token, SECRET_KEY);

    if (!req.user) {
      const user = await userService.findUserByEmail(payload.email);
      if (!user) {
        throw new CustomError({ error: "User not found" });
      }
      req.user = user;
    }
    next();
  } catch (error: any) {
    res.status(401).json({ error: "Unauthorized" });
  }
}
