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
  Get,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiTags,
  ApiConsumes,
  ApiBody,
  ApiQuery,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { BaseController } from 'src/services/base/methode/base.controller';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FindProductDto } from './dto/find-product.dto';
import { Pagination } from 'src/decorator/Pagination/pagination.decorator';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('products')
@ApiTags('products')
export class ProductController extends BaseController<Product> {
  constructor(private readonly productService: ProductService) {
    super(productService);
    console.log('ProductController initialized');
  }

  @Post()
  /*  @UseInterceptors(CacheInterceptor) */
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: "Produit créer avec option d''upload image",
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
  /* @UseInterceptors(CacheInterceptor) */
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

  @Get()
  @ApiOperation({ summary: 'get All list ' })
  @ApiResponse({
    status: 200,
    description: 'Liste des produits récupérée avec succès',
    type: [CreateProductDto],
  })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'name', required: false, type: String })
  @ApiQuery({ name: 'price', required: false, type: Number })
  @ApiQuery({ name: 'quantity', required: false, type: Number })
  /*  @Pagination() */
  /*  @UseInterceptors(CacheInterceptor) */
  @Get()
  async findAll(@Query() filter: FindProductDto) {
    return super.findAll(filter);
  }
}
