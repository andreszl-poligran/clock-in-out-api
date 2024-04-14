export default {
  type: 'object',
  properties: {
    id: { type: 'string', pattern: '^(?!\\s*$).+' },
    name: { type: 'string', pattern: '^(?!\\s*$).+' },
    document: { type: 'string', pattern: '^(?!\\s*$).+' },
    entryDate: { type: 'string', pattern: '^(?!\\s*$).+' },
  },
  required: ['id', 'name', 'document', 'entryDate'],
};

export interface RequestBody {
  id: string;
  name: string;
  document: string;
  entryDate: string;
  exitDate?: string;
}

