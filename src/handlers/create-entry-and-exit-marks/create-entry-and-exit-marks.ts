import { APIGatewayProxyEvent } from 'aws-lambda';
import { MarkService } from '../../services/marks.service';
import { MarkRepository } from '../../repositories/mark.repository';
import { catchError } from '../../utils/catch-errors.util/catch-erros.utils';
import Ajv, { ValidateFunction } from 'ajv';
import schema, { RequestBody } from './schema';

// Initialize MarkRepository and MarkService
const markRepository = new MarkRepository();
const markService = new MarkService({ markRepository });

// Initialize Ajv validator with schema
const ajv = new Ajv();
const validate: ValidateFunction = ajv.compile(schema);

// Lambda handler function
export const handler = async (event: APIGatewayProxyEvent) => {
  try {
    // Parse request body and validate against schema
    const body = JSON.parse(event.body) as RequestBody;
    const valid = validate(body);
    if (!valid) {
      throw { message: 'Schema error', schema: JSON.stringify(schema) };
    }

    // Create mark using MarkService
    const marks = await markService.createMark(body);

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
