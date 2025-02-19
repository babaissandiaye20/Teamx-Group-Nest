import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { BaseEntity } from '../entity/base.entity';
import { BaseService } from './base.service';
import { Response } from 'src/validation/exception/response/response.interface';

export abstract class BaseController<T extends BaseEntity> {
  constructor(private readonly baseService: BaseService<T>) {}

  @Post()
  @ApiOperation({ summary: 'Create a new entity' })
  @ApiBody({ description: 'Entity data' })
  @ApiResponse({ status: 201, description: 'Entity successfully created.' })
  async create(@Body() createDto: Partial<T>): Promise<Response<T>> {
    return this.baseService.create(createDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find entity by id' })
  @ApiParam({ name: 'id', description: 'Entity ID' })
  @ApiResponse({ status: 200, description: 'Entity found.' })
  async findOne(@Param('id') id: string): Promise<Response<T>> {
    return this.baseService.findById(id);
  }

  @Get()
  @ApiOperation({ summary: 'Find all entities' })
  @ApiResponse({ status: 200, description: 'List of entities.' })
  async findAll(@Query() filter = {}): Promise<Response<T[]>> {
    return this.baseService.findAll(filter);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update entity' })
  @ApiParam({ name: 'id', description: 'Entity ID' })
  @ApiBody({ description: 'Updated entity data' })
  @ApiResponse({ status: 200, description: 'Entity updated.' })
  async update(
    @Param('id') id: string,
    @Body() updateDto: Partial<T>,
  ): Promise<Response<T>> {
    return this.baseService.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete entity' })
  @ApiParam({ name: 'id', description: 'Entity ID' })
  @ApiResponse({ status: 200, description: 'Entity deleted.' })
  async remove(@Param('id') id: string): Promise<Response<void>> {
    return this.baseService.remove(id);
  }

  @Delete(':id/soft')
  @ApiOperation({ summary: 'Soft delete entity' })
  @ApiParam({ name: 'id', description: 'Entity ID' })
  @ApiResponse({ status: 200, description: 'Entity soft deleted.' })
  async softRemove(@Param('id') id: string): Promise<Response<T>> {
    return this.baseService.softRemove(id);
  }
}
