import { MailerModule, MailerService } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { join } from 'path';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useFactory: async () => ({
        transport: {
          host: 'smtp.resend.com',
          port: 465,
          secure: true, // true para 465, false para otros ports
          //logger: true,
          //debug: true,
          //secureConnection: false,
          //ignoreTLS: false,
          //tls:{ rejectUnauthorized: false },
          auth: {
            //user: process.env.MAILDEV_INCOMING_USER,
            //pass: process.env.MAILDEV_INCOMING_PASS,
            user: 'resend',
            pass: 're_CMTfAqvU_5Ybv5dYtRoVqjJvWHQGQi1Xh'
            //pass: 're_iubqnj43_8VWXA8SYX1rtwNckBJX7Zxb5'
            //propcheck: re_FWwqUt3c_5Hv1oR8vngDVzeUAmnxgYMKd
          },
          //debug: true,
        },
        defaults: {
          from: "onboarding@resend.dev",
          //from: '"No Reply" <no-reply@localhost>'
        },
        template: {
          dir: join(__dirname, '..', '..', 'src', 'mail', 'templates'),
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}


