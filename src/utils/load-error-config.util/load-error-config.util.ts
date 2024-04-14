import * as fs from 'fs';

export interface ErrorConfig {
  [key: string]: {
    statusCode: number;
    responseBody: string;
  };
}

export const loadErrorConfig = (filePath: string): ErrorConfig => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading error configuration:', error);
    return {};
  }
};
