import { APIGatewayEvent, Handler } from 'aws-lambda';
import { MarkService } from '../../services/marks.service';
import { MarkRepository } from '../../repositories/mark.repository';
import { catchError } from '../../utils/catch-errors.util/catch-erros.utils';

const markRepository = new MarkRepository();
const markService = new MarkService({ markRepository });

export const handler: Handler = async (event: APIGatewayEvent) => {
  try {
    const page = parseInt(event.queryStringParameters?.page || '1');
    const pageSize = parseInt(event.queryStringParameters?.pageSize || '1000');
    const orderBy = event.queryStringParameters?.orderBy || 'id';
    const order = event.queryStringParameters?.order || 'ASC';
    const marks = await markService.getMarks(page, pageSize, orderBy, order);

    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ marks }),
    };

    return response;
  } catch (error: any) {
    return catchError(error);
  }
};
