export default {
  SchemaValidationError: {
    code: 422,
    message: "Schema validation error",
  },
  NotFoundError: {
    code: 404,
    message: "Resource not found",
  },
  InternalServerError: {
    code: 500,
    message: "Internal server error",
  },
  UnauthorizedError: {
    code: 401,
    message: "Unauthorized access",
  },
  ForbiddenError: {
    code: 403,
    message: "Forbidden access",
  },
  BadRequestError: {
    code: 400,
    message: "Bad request",
  },
  DatabaseError: {
    code: 500,
    message: "Database error",
  },
  QueryExecutionError: {
    code: 500,
    message: "Query execution error",
  }
};