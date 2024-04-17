import constants from '../../constants';
import errors from '../../data/errors.data';

// Function to catch and handle errors
export const catchError = (error: any) => { 
  // Log the unexpected error
  console.error('Unexpected error', error);

  // Determine the error type
  let errorType = error.constructor.name || 'DefaultError';

  // Retrieve error details from predefined error data
  let err = errors[errorType] ? errors[errorType] : errors['DefaultError'];

  // Construct response object with error details
  return {
    headers: constants.cors.HEADERS,  // Set response headers
    statusCode: err.code,  // Set status code
    error: err.message,  // Set error message
    details: err.message,  // Set error details
    body: JSON.stringify({ message: err.message }),  // Construct response body
  };
};
