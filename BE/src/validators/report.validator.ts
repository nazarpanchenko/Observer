import { param, query, body } from 'express-validator';

import { telescopeEnums, eyepieceEnums, barlowLensEnums, filterEnums } from '../enums';
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
    body('telescopeModel').isString().trim().notEmpty(),
    body('telescopeType').isIn(Object.values(telescopeEnums.TelescopeTypes)),
    body('telescopeDiameter').isInt().isLength({ min: 2 }),
    body('eyepieceManufacturer').isString().trim().notEmpty(),
    body('eyepieceOpticalSchema').isIn(Object.values(eyepieceEnums.EyepieceSchemas)),

    body('eyepieceModel').isString().trim().notEmpty(),
    body('eyepieceFocus')
      .isString()
      .isLength({ min: 4, max: 5 })
      .contains('mm')
      .withMessage(getErrMsg('eyepieceFocus', 'mm')),
    body('magnification')
      .isString()
      .contains('X')
      .isLength({ min: 2, max: 5 })
      .withMessage(getErrMsg('eyepieceFocus', 'mm')),

    body('eyepieceFieldRange')
      .isString()
      .isLength({ min: 4, max: 5 })
      .contains("'")
      .withMessage(getErrMsg('eyepieceFocus', "'")),
    body('eyepieceSizeSchema').isIn(Object.values(eyepieceEnums.EyepieceDiameters)),

    body('eyepiecePupilScrew')
      .isString()
      .isLength({ min: 4, max: 6 })
      .contains('mm')
      .withMessage(getErrMsg('eyepieceFocus', 'mm')),
    body('barlowLensManufacturer').isString().trim().notEmpty().optional(),

    body('barlowLensSchema')
      .isIn(Object.values(barlowLensEnums.BarlowLensSchemas))
      .optional(),
    body('filterType').isString().isIn(Object.values(filterEnums.FilterTypes)).optional(),

    body('filter').isString().optional(),
    body('observationRealDurationMin').isInt(),
    body('observationVirtualDurationMin').isInt(),
    body('observationStartDate').isISO8601(),
    body('observationEndDate').isISO8601(),
  ],

  // PUT
  update: [
    param('id').isInt(),
    body('eyepieceManufacturer').trim().notEmpty(),
    body('magnification')
      .isString()
      .contains('X')
      .withMessage(getErrMsg('eyepieceFocus', 'mm'))
      .optional(),
  ],

  // DELETE
  delete: [param('id').isInt()],
};

export default reportValidator;
