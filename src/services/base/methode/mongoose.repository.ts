// mongoose.repository.ts
import { Model, FilterQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { IBaseRepository } from 'src/services/base/methode/base.repository.interface';
import { BaseEntity } from 'src/services/base/entity/base.entity';

@Injectable()
export class MongooseRepository<T extends BaseEntity>
  implements IBaseRepository<T>
{
  constructor(private readonly model: Model<T>) {}

  async create(createDto: Partial<T>): Promise<T> {
    const created = new this.model(createDto);
    return created.save();
  }

  async findById(id: string): Promise<T> {
    return this.model.findById(id).exec();
  }

  async findAll(filter: FilterQuery<T> = {}): Promise<T[]> {
    return this.model.find({ ...filter, isDeleted: false }).exec();
  }

  async update(id: string, updateDto: Partial<T>): Promise<T> {
    return this.model.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.model.findByIdAndDelete(id).exec();
    return !!result;
  }

  async softDelete(id: string): Promise<T> {
    return this.model
      .findByIdAndUpdate(id, { isDeleted: true }, { new: true })
      .exec();
  }
}
