import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
/* import { ValidationPipe } from '@nestjs/common'; */
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: false,
  });

  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

  // Configuration CORS avec support pour les environnements de production et développement
  const allowedOrigins = [
    'http://localhost:4200',
    'https://your-frontend-app.onrender.com', // Ajoutez l'URL de votre frontend déployé
    process.env.FRONTEND_URL, // Utilisez une variable d'environnement si disponible
  ].filter(Boolean); // Filtre les valeurs null/undefined

  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Servir la documentation générée par Compodoc
  app.useStaticAssets(join(__dirname, '..', 'documentation'), {
    prefix: '/docs',
  });

  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('User Management API')
    .setDescription('API for managing users')
    .setVersion('1.0')
    .addTag('users')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Utiliser le port fourni par l'environnement (important pour Render)
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}
bootstrap();
