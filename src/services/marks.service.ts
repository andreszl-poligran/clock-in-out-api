import { MarkRepository } from '../repositories/mark.repository';
import { IMark } from '../interfaces/mark.interfaces';

export interface IMarkService   {
  markRepository?: MarkRepository;
}

export class MarkService {
  private readonly markRepository?: MarkRepository;

  constructor({ markRepository }:  IMarkService) {
    this.markRepository = markRepository;
  }

  async getMarks(page: number = 1, pageSize: number = 10, orderBy: string = 'id', order: string = 'ASC'): Promise<IMark[]> {
    return await this.markRepository.getMarks(page, pageSize, orderBy, order);
  }

  async createMark(mark: IMark): Promise<void> {
    await this.markRepository.createMark(mark)
  }
}
