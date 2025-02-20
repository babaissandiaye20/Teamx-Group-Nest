// product/product.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/services/base/methode/base.service';
import { Product } from './entities/product.entity';
import { ExceptionService } from 'src/validation/exception/exception.service';
import { ResponseService } from 'src/validation/exception/response/response.service';
import { IBaseRepository } from 'src/services/base/methode/base.repository.interface';
import { FileStorageService } from 'src/services/upload/interfaces/upload.interface';

@Injectable()
export class ProductService extends BaseService<Product> {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    repository: IBaseRepository<Product>,
    @Inject('UploadService')
    private readonly uploadService: FileStorageService,
    protected readonly exceptionService: ExceptionService,
    protected readonly responseService: ResponseService,
  ) {
    super(repository, exceptionService, responseService);
  }

  async createWithImage(
    createDto: Partial<Product>,
    file?: Express.Multer.File,
  ) {
    try {
      if (file) {
        const uploadResult = await this.uploadService.uploadSingle(
          file,
          'products',
        );
        createDto.image = uploadResult.url;
      }
      return this.create(createDto);
    } catch (error) {
      throw this.exceptionService.createInternalServerException(
        `Erreur lors de la création du produit avec image: ${error.message}`,
      );
    }
  }

  async updateWithImage(
    id: string,
    updateDto: Partial<Product>,
    file?: Express.Multer.File,
  ) {
    try {
      if (file) {
        const uploadResult = await this.uploadService.uploadSingle(
          file,
          'products',
        );
        updateDto.image = uploadResult.url;
      }
      return this.update(id, updateDto);
    } catch (error) {
      throw this.exceptionService.createInternalServerException(
        `Erreur lors de la mise à jour du produit avec image: ${error.message}`,
      );
    }
  }
}
