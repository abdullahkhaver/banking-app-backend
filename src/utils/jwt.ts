// src/utils/jwt.ts
import jwt from "jsonwebtoken";

export const signToken = (userId: string) =>
  jwt.sign({ sub: userId }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES
  });
