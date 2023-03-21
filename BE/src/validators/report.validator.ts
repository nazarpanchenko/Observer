import { param, query, body } from 'express-validator';

import { TelescopeTypes } from '../shared/enums';
import { PAGINATION_CONFIG } from '../consts';
import { getErrMsg } from '../utils/helpers';

const reportValidator = {
  // GET
  list: [
    query('page').isInt({ min: 0 }).optional(),
    query('limit').isIn(Object.values(PAGINATION_CONFIG.LIMIT)).optional(),
  ],

  getOne: [param('id').isInt()],

  // POST
  create: [
    body('subject').isString().trim().notEmpty(),
    body('telescopeType').isIn(Object.values(TelescopeTypes)),
    body('magnification')
      .isString()
      .contains('X')
      .isLength({ min: 2, max: 5 })
      .withMessage(getErrMsg('magnification', 'X')),
    body('observationRealDurationMin').isInt(),
    body('observationVirtualDurationMin').isInt(),
    body('observationStartDate').isISO8601(),
    body('observationEndDate').isISO8601(),
  ],

  // PUT
  update: [
    param('id').isInt(),
    body('magnification')
      .isString()
      .contains('X')
      .withMessage(getErrMsg('magnification', 'X'))
      .optional(),
  ],

  // DELETE
  delete: [param('id').isInt()],
};

export default reportValidator;
