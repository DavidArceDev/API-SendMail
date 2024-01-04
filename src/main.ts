import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { Observable } from 'rxjs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de CORS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); 
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-auth-token');
    res.header('Access-Control-Allow-Methods', 'OPTIONS', 'POST');
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    if (req.method === 'OPTIONS') {
      res.send(200);
    } else {
      next();
    }
  });

  await app.listen(3000);
}

bootstrap();
