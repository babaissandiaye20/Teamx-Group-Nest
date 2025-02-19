// user.service.ts
import { Injectable, Inject } from '@nestjs/common';
import { BaseService } from 'src/services/base/methode/base.service';
import { User } from './entities/user.entity';
import { ExceptionService } from 'src/validation/exception/exception.service';
import { ResponseService } from 'src/validation/exception/response/response.service';
import { IBaseRepository } from 'src/services/base/methode/base.repository.interface';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @Inject('USER_REPOSITORY')
    repository: IBaseRepository<User>,
    protected readonly exceptionService: ExceptionService,
    protected readonly responseService: ResponseService,
  ) {
    super(repository, exceptionService, responseService);
  }
}
