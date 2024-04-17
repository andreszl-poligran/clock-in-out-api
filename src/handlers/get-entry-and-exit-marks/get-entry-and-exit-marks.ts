import { APIGatewayProxyEvent } from 'aws-lambda';
import { MarkService } from '../../services/marks.service';
import { MarkRepository } from '../../repositories/mark.repository';
import { catchError } from '../../utils/catch-errors.util/catch-erros.utils';

// Initialize MarkRepository and MarkService
const markRepository = new MarkRepository();
const markService = new MarkService({ markRepository });

// Lambda handler function
export const handler = async (event: APIGatewayProxyEvent) => {
  try {
    // Extract query parameters from the event
    const page = parseInt(event.queryStringParameters?.page || '1');
    const pageSize = parseInt(event.queryStringParameters?.pageSize || '1000');
    const orderBy = event.queryStringParameters?.orderBy || 'id';
    const order = event.queryStringParameters?.order || 'ASC';

    // Call MarkService to get marks
    const marks = await markService.getMarks(page, pageSize, orderBy, order);

    // Construct successful response
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ marks }),
    };

    // Return successful response
    return response;
  } catch (error: any) {
    // If an error occurs, catch and handle it
    return catchError(error);
  }
};
