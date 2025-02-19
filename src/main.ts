import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
/* import { ValidationPipe } from '@nestjs/common'; */
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('User Management API')
    .setDescription('API for managing users')
    .setVersion('1.0')
    .addTag('users') // Correspond au @ApiTags('users')
    .build();

  // Création du document Swagger
  const document = SwaggerModule.createDocument(app, config);

  // Configuration de l'endpoint Swagger UI
  SwaggerModule.setup('api', app, document);

  // Ajout du ValidationPipe global
  /*  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  ); */

  await app.listen(3000);
}
bootstrap();
