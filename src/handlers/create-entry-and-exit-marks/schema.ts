// JSON schema for request body validation
export default {
  type: 'object',
  properties: {
    id: { type: 'string', pattern: '^(?!\\s*$).+' },  // ID property with non-empty string pattern
    name: { type: 'string', pattern: '^(?!\\s*$).+' },  // Name property with non-empty string pattern
    document: { type: 'string', pattern: '^(?!\\s*$).+' },  // Document property with non-empty string pattern
    entryDate: { type: 'string', pattern: '^(?!\\s*$).+' },  // EntryDate property with non-empty string pattern
  },
  required: ['id', 'name', 'document', 'entryDate'],  // Required properties
};

// Interface representing the structure of the request body
export interface RequestBody {
  id: string;
  name: string;
  document: string;
  entryDate: string;
  exitDate?: string;  // Optional exitDate property
}
