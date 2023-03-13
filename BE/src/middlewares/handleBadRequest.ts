import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

const handleBadRequest =
  () => async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).send({
        errors: errors.array().map(err => ({ [err.param]: err.msg })),
      });
    }
    next();
  };

export default handleBadRequest;
