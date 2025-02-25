// product/product.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './entities/product.entity';
import { MongooseRepository } from '../../services/base/methode/mongoose.repository';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { ExceptionService } from '../../validation/exception/exception.service';
import { ResponseService } from '../../validation/exception/response/response.service';
import { UploadModule } from 'src/services/upload/upload.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    UploadModule,
    CacheModule.register(), // Register the cache module
  ],
  controllers: [ProductController],
  providers: [
    ProductService,
    ExceptionService,
    ResponseService,
    {
      provide: 'PRODUCT_REPOSITORY',
      useFactory: (model: Model<Product>) => {
        const repository = new MongooseRepository<Product>(model);
        return repository;
      },
      inject: [getModelToken(Product.name)],
    },
  ],
  exports: [ProductService],
})
export class ProductModule {}
