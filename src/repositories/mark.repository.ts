import * as AWS from 'aws-sdk';
import { IMark } from "../interfaces/mark.interfaces";

// Initialize AWS DynamoDB DocumentClient
const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

// Repository class for interacting with DynamoDB
export class MarkRepository {
  // Method to get marks from DynamoDB
  async getMarks(page: number = 1, pageSize: number = 10, orderBy: string = 'id', order: string = 'ASC'): Promise<IMark[]> {
    const params = {
      TableName: 'clock-in-out-marks',
      Limit: pageSize,
      ScanIndexForward: order === 'ASC',
      ExclusiveStartKey: null
    };

    const offset = (page - 1) * pageSize;

    try {
      // If there is an offset, get the last item
      if (offset > 0) {
        const lastItem = await this.getLastItem(params.TableName);
        params.ExclusiveStartKey = {
          id: lastItem?.id
        };
      }

      // Perform DynamoDB scan operation
      const data = await dynamoDb.scan(params).promise();
      return data.Items as IMark[];
    } catch (error) {
      // Throw error if any
      throw error;
    }
  }

  // Method to create a mark in DynamoDB
  async createMark(markData: IMark): Promise<void> {
    const params = {
      TableName: 'clock-in-out-marks',
      Item: markData
    };

    try {
      // Perform DynamoDB put operation to insert mark data
      await dynamoDb.put(params).promise();
    } catch (error) {
      // Throw error if any
      throw error;
    }
  }

  // Method to get the last item from DynamoDB
  async getLastItem(tableName: string): Promise<IMark | null> {
    const params = {
      TableName: tableName,
      Limit: 1,
      ScanIndexForward: false
    };
  
    try {
      // Perform DynamoDB scan operation to get the last item
      const data = await dynamoDb.scan(params).promise();
      // Return the last item if exists, otherwise null
      if (data.Items && data.Items.length > 0) {
        return data.Items[0] as IMark;
      }
      return null;
    } catch (error) {
      // Throw error if any
      throw error;
    }
  }
}
