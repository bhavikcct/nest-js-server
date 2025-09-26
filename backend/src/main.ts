import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import 'dotenv/config';
import { corsConfig } from './config/cors.config';
// import { ResponseInterceptor } from './config/response.interceptor';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsConfig)
  app.use(cookieParser())
  // app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
