import { StatusCodes, getReasonPhrase } from 'http-status-codes';

class BaseError extends Error {
  statusCode: string;

  constructor(
    name: string,
    description: string,
    statusCode: string
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
    description = getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
    statusCode = String(StatusCodes.INTERNAL_SERVER_ERROR)
  ) {
    super(name, description, statusCode);
  }
}

export default ApiError;
