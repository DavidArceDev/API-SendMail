import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailService } from './mail/mail.service';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      //type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT, 10),
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
      synchronize: false,
    }),
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService, MailService]
})
export class AppModule {}