import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseService } from './database.service';
import { MongoConfig } from './mongodb/mongo.config';
import { MongoConnection } from './mongodb/mongo.connection';
import { DATABASE_CONNECTION } from './interfaces/database.interface';

@Module({
  imports: [ConfigModule],
  providers: [
    MongoConfig,
    {
      provide: DATABASE_CONNECTION,
      useClass: MongoConnection,
    },
    DatabaseService,
  ],
  exports: [DatabaseService, DATABASE_CONNECTION],
})
export class DatabaseModule {}
