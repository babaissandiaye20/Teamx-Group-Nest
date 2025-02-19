import {
  Inject,
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import {
  DatabaseConnection,
  DATABASE_CONNECTION,
} from './interfaces/database.interface';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  constructor(
    @Inject(DATABASE_CONNECTION) private connection: DatabaseConnection,
  ) {}

  async onModuleInit() {
    await this.connection.connect();
  }

  async onModuleDestroy() {
    await this.connection.disconnect();
  }
}
