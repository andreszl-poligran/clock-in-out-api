import { MarkRepository } from '../repositories/mark.repository';
import { IMark } from '../interfaces/mark.interfaces';

// Interface defining the structure of MarkService
export interface IMarkService {
  markRepository?: MarkRepository;
}

// Class implementing the MarkService
export class MarkService {
  private readonly markRepository?: MarkRepository;

  // Constructor to initialize MarkService with MarkRepository
  constructor({ markRepository }: IMarkService) {
    this.markRepository = markRepository;
  }

  // Method to retrieve marks
  async getMarks(page: number = 1, pageSize: number = 10, orderBy: string = 'id', order: string = 'ASC'): Promise<IMark[]> {
    return await this.markRepository.getMarks(page, pageSize, orderBy, order);
  }

  // Method to create a mark
  async createMark(mark: IMark): Promise<void> {
    await this.markRepository.createMark(mark);
  }
}
