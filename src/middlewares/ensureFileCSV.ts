import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/AppError';

export default function ensureFileCSV(
  request: Request,
  reponse: Response,
  next: NextFunction,
): void {
  const { file } = request;

  if (file === undefined) {
    throw new AppError('File not found');
  }

  if (file.mimetype !== 'text/csv') {
    throw new AppError('File is not of type csv');
  }

  next();
}
