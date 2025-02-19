import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ValidationService } from './validation.service';
import { ExceptionService } from './exception/exception.service';
import { DatabaseModule } from 'src/services/database/database.module';
import { ResponseService } from './exception/response/response.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ValidationService,
    ExceptionService,

    {
      provide: APP_PIPE,
      useExisting: ValidationService,
    },

    ResponseService,
  ],
  exports: [ValidationService, ExceptionService, ResponseService],
})
export class ValidationModule {}
