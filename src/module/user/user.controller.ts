import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ApiQuery,
} from '@nestjs/swagger';
import { BaseController } from 'src/services/base/methode/base.controller';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { Pagination } from 'src/decorator/Pagination/pagination.decorator';

@Controller('users')
@ApiTags('users')
export class UserController extends BaseController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
    console.log('UserController initialized');
  }

  @Get()
  /* @Pagination() */
  async findAll(@Query() filter: FindUserDto) {
    console.log('Finding all users with filter:', filter);
    return super.findAll(filter);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return super.findOne(id);
  }

  @Post()
  async create(@Body() createDto: CreateUserDto) {
    console.log('Creating user:', createDto);
    return super.create(createDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: UpdateUserDto) {
    return super.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return super.remove(id);
  }
}
