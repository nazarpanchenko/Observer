import { param, body } from 'express-validator';

const errMsg = 'field is required';

const getReportValidator = [param('id').isInt()];

const createReportValidator = [
  body('subject').isString().notEmpty().withMessage(`subject ${errMsg}`),
  body('telescope').isString().notEmpty().withMessage(`telescope ${errMsg}`),
  body('eyepiece').isString().notEmpty().withMessage(`eyepiece ${errMsg}`),
  body('filter').isString().optional(),
  body('magnification')
    .isString()
    .contains('X')
    .isLength({ min: 2, max: 5 })
    .withMessage(
      `magnification ${errMsg} with a required 'X' character, and must be no longer than 5 symbols`
    ),
  body('observationRealDurationMin').isInt(),
  body('observationVirtualDurationMin').isInt(),
  body('observationStartDate').isISO8601(),
  body('observationEndDate').isISO8601(),
];

const updateReportValidator = [
  param('id').isInt(),
  body('eyepiece').isString().notEmpty(),
  body('filter').isString().optional(),
  body('magnification').isString().contains('X'),
];

const deleteReportValidator = [param('id').isInt()];

export {
  getReportValidator,
  createReportValidator,
  updateReportValidator,
  deleteReportValidator,
};
