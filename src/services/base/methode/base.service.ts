import { Injectable } from '@nestjs/common';
import { FilterQuery } from 'mongoose';
import { BaseEntity } from '../entity/base.entity';
import { IBaseRepository } from './base.repository.interface';
import { ExceptionService } from 'src/validation/exception/exception.service';
import { ResponseService } from 'src/validation/exception/response/response.service';
import { Response } from 'src/validation/exception/response/response.interface';

@Injectable()
export class BaseService<T extends BaseEntity> {
  constructor(
    protected readonly repository: IBaseRepository<T>,
    protected readonly exceptionService: ExceptionService,
    protected readonly responseService: ResponseService,
  ) {}

  async create(createDto: Partial<T>): Promise<Response<T>> {
    try {
      const created = await this.repository.create(createDto);
      return this.responseService.created(created);
    } catch (error) {
      throw this.exceptionService.createInternalServerException(
        `Erreur lors de la création: ${error.message}`,
      );
    }
  }

  async findById(id: string): Promise<Response<T>> {
    try {
      const entity = await this.repository.findById(id);
      return this.responseService.success(entity);
    } catch (error) {
      if (error.status === 404) {
        throw this.exceptionService.createNotFoundException(
          `Entité avec l'id ${id} non trouvée`,
        );
      }
      throw this.exceptionService.createInternalServerException(
        `Erreur lors de la recherche: ${error.message}`,
      );
    }
  }

  async findAll(filter: FilterQuery<T> = {}): Promise<Response<T[]>> {
    try {
      const entities = await this.repository.findAll(filter);
      return this.responseService.success(entities);
    } catch (error) {
      throw this.exceptionService.createInternalServerException(
        `Erreur lors de la récupération des entités: ${error.message}`,
      );
    }
  }

  async update(id: string, updateDto: Partial<T>): Promise<Response<T>> {
    try {
      const updated = await this.repository.update(id, updateDto);
      return this.responseService.success(updated);
    } catch (error) {
      if (error.status === 404) {
        throw this.exceptionService.createNotFoundException(
          `Entité avec l'id ${id} non trouvée`,
        );
      }
      throw this.exceptionService.createInternalServerException(
        `Erreur lors de la mise à jour: ${error.message}`,
      );
    }
  }

  async remove(id: string): Promise<Response<void>> {
    try {
      const result = await this.repository.delete(id);
      if (!result) {
        throw this.exceptionService.createNotFoundException(
          `Entité avec l'id ${id} non trouvée`,
        );
      }
      return this.responseService.success(null, 'Entité supprimée avec succès');
    } catch (error) {
      throw this.exceptionService.createInternalServerException(
        `Erreur lors de la suppression: ${error.message}`,
      );
    }
  }

  async softRemove(id: string): Promise<Response<T>> {
    try {
      const softDeleted = await this.repository.softDelete(id);
      return this.responseService.success(
        softDeleted,
        'Entité supprimée logiquement avec succès',
      );
    } catch (error) {
      if (error.status === 404) {
        throw this.exceptionService.createNotFoundException(
          `Entité avec l'id ${id} non trouvée`,
        );
      }
      throw this.exceptionService.createInternalServerException(
        `Erreur lors de la suppression logique: ${error.message}`,
      );
    }
  }
}
