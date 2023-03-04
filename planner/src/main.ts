import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Planner')
    .setDescription('Planner back-end documentation')
    .setVersion('1.0')
    .addTag('user')
    .addTag('link')
    .addTag('event')
    .addTag('social')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(5000);
  console.log('App started on http://localhost:5000');
}
bootstrap();
