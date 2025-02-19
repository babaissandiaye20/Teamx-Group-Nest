// base.repository.interface.ts
import { FilterQuery } from 'mongoose';

export interface IBaseRepository<T> {
  create(entity: Partial<T>): Promise<T>;
  findById(id: string): Promise<T>;
  findAll(filter?: FilterQuery<T>): Promise<T[]>;
  update(id: string, entity: Partial<T>): Promise<T>;
  delete(id: string): Promise<boolean>;
  softDelete(id: string): Promise<T>;
}
