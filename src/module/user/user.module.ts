// module/user/user.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from './entities/user.entity';
import { MongooseRepository } from '../../services/base/methode/mongoose.repository';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { ExceptionService } from '../../validation/exception/exception.service';
import { ResponseService } from '../../validation/exception/response/response.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [
    UserService,
    ExceptionService,
    ResponseService,
    {
      provide: 'USER_REPOSITORY',
      useFactory: (model: Model<User>) => {
        return new MongooseRepository<User>(model);
      },
      inject: [getModelToken(User.name)],
    },
  ],
  exports: [UserService],
})
export class UserModule {}
