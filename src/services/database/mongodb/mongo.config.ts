import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from '../interfaces/database.interface';
@Injectable()
export class MongoConfig implements DatabaseConfig {
  constructor(private configService: ConfigService) {}

  getConnectionConfig() {
    const uri = this.configService.get<string>('MONGODB_URI');
    console.log('MongoDB URI:', uri);
    return { uri };
  }
}
