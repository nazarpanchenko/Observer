import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const handleBadRequest =
  () =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).send({
        errors: errors.array().map(err => ({ [err.param]: err.msg })),
      });
    }
    next();
  };

export default handleBadRequest;
