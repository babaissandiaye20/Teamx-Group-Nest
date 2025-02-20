// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './services/database/database.module';
import { UserModule } from './module/user/user.module';
import { ValidationModule } from './validation/validation.module';
import { CloudinaryService } from './services/upload/cloudinary/cloudinary.service';
import { UploadService } from './services/upload/upload.service';
import { UploadModule } from './services/upload/upload.module';
import { ProductModule } from './module/product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    DatabaseModule,
    UserModule,
    ValidationModule,
    UploadModule,
    ProductModule,
  ],
  providers: [CloudinaryService, UploadService],
  controllers: [],
})
export class AppModule {}
