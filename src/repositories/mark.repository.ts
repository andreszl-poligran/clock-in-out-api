import * as AWS from 'aws-sdk';
import { IMark } from "../interfaces/mark.interfaces";

const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

export class MarkRepository {
  async getMarks(page: number = 1, pageSize: number = 10, orderBy: string = 'id', order: string = 'ASC'): Promise<IMark[]> {
    const params = {
      TableName: 'clock-in-out-marks',
      Limit: pageSize,
      ScanIndexForward: order === 'ASC',
      ExclusiveStartKey: null
    };

    const offset = (page - 1) * pageSize;

    try {
      if (offset > 0) {
        const lastItem = await this.getLastItem(params.TableName);
        params.ExclusiveStartKey = {
          id: lastItem?.id
        };
      }

      const data = await dynamoDb.scan(params).promise();
      return data.Items as IMark[];
    } catch (error) {
      throw error;
    }
  }

  async createMark(markData: IMark): Promise<void> {
    const params = {
      TableName: 'clock-in-out-marks',
      Item: markData
    };

    try {
      await dynamoDb.put(params).promise();
    } catch (error) {
      throw error;
    }
  }

  async getLastItem(tableName: string): Promise<IMark | null> {
    const params = {
      TableName: tableName,
      Limit: 1,
      ScanIndexForward: false
    };
  
    try {
      const data = await dynamoDb.scan(params).promise();
      if (data.Items && data.Items.length > 0) {
        return data.Items[0] as IMark;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
  
}

