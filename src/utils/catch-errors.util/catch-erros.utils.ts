import constants from '../../constants';
import errors from '../../data/errors.data';

export const catchError = (error: any) => {
  console.log('catch error', error);
  let errorType = error.constructor.name;
  let err = errors[errorType];

  if (err) {
    return {
      headers: constants.cors.HEADERS,
      statusCode: err.code,
      error: err.message,
      details: err.details || undefined,
      body: JSON.stringify({ message: err.message }),
    };
  }

  return {
    headers: constants.cors.HEADERS,
    statusCode: 500,
    error: "Internal server error",
    body: "Internal server error",
  };
};

