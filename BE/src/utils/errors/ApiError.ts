import { StatusCodes, getReasonPhrase } from 'http-status-codes';

class BaseError extends Error {
  statusCode: string;

  constructor(
    name: string,
    statusCode: string,
    description: string
  ) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}

class ApiError extends BaseError {
  constructor(
    name: string,
    statusCode = String(StatusCodes.INTERNAL_SERVER_ERROR),
    description = getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR)
  ) {
    super(name, statusCode, description);
  }
}

export default ApiError;
