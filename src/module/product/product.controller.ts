// product/product.controller.ts
import {
  Controller,
  Post,
  Put,
  Param,
  Body,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiConsumes, ApiBody } from '@nestjs/swagger';
import { BaseController } from 'src/services/base/methode/base.controller';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { Pagination } from 'src/decorator/Pagination/pagination.decorator';

@Controller('products')
@ApiTags('products')
export class ProductController extends BaseController<Product> {
  constructor(private readonly productService: ProductService) {
    super(productService);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Product creation with optional image upload',
    type: CreateProductDto,
  })
  async create(
    @Body() createDto: CreateProductDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return (this.productService as ProductService).createWithImage(
      createDto,
      file,
    );
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  async update(
    @Param('id') id: string,
    @Body() updateDto: UpdateProductDto,
    @UploadedFile() file?: Express.Multer.File,
  ) {
    return (this.productService as ProductService).updateWithImage(
      id,
      updateDto,
      file,
    );
  }

  @Pagination()
  async findAll(@Query() filter: FindProductDto) {
    return super.findAll(filter);
  }
}
