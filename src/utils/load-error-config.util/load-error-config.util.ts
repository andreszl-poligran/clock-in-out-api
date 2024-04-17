import * as fs from 'fs';

// Interface representing the structure of error configuration
export interface ErrorConfig {
  [key: string]: {
    statusCode: number;
    responseBody: string;
  };
}

// Function to load error configuration from a file
export const loadErrorConfig = (filePath: string): ErrorConfig => {
  try {
    // Read data from file synchronously
    const data = fs.readFileSync(filePath, 'utf-8');
    // Parse JSON data
    return JSON.parse(data);
  } catch (error) {
    // Log error if loading configuration fails
    console.error('Error loading error configuration:', error);
    // Return an empty object if loading fails
    return {};
  }
};