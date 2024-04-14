import { APIGatewayProxyEvent } from 'aws-lambda';
import { MarkService } from '../../services/marks.service';
import { MarkRepository } from '../../repositories/mark.repository';
import { catchError } from '../../utils/catch-errors.util/catch-erros.utils';
import Ajv, { ValidateFunction } from 'ajv';
import schema, { RequestBody } from './schema';

const markRepository = new MarkRepository();
const markService = new MarkService({ markRepository });


const ajv = new Ajv();
const validate: ValidateFunction = ajv.compile(schema);

export const handler = async (event: APIGatewayProxyEvent) => {
  try {
    const body = JSON.parse(event.body) as RequestBody;

    const valid = validate(body);
    if (!valid) {
      throw { message: 'Schema error', scehma: JSON.stringify(schema) };
    }

    const marks = await markService.createMark(body);

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
