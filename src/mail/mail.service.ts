import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class MailService {

    private readonly resetPasswordLink: string = 'http://localhost:4200/#/auth/recover-password';


    //private readonly resend: Resend

    constructor(private readonly mailerService: MailerService) {
        //this.resend = new Resend('re_CMTfAqvU_5Ybv5dYtRoVqjJvWHQGQi1Xh');
    }
    
    async sendMail(to: string): Promise<void> {
        try {
                await this.mailerService.sendMail({
                //from: 'onboarding@resend.dev',
                to: to,
                subject: 'Recuperación de contraseña',
                template: 'welcome',
                context: {
                    resetPasswordLink: this.resetPasswordLink,
                },
                //html: '<p> Por favor presione el boton para indiciar su nueva contraseña </p> <a href="http://localhost:4200/#/auth/recover-password" target="_blank"><button>Click aquí</button></a>'
            });
            console.log('Email sent successfully.');
        }
        catch (error) {
            console.error('Error sendind email:', error);
            throw new Error('Error sending email');
        }
    }

    /*async isEmailValid(email: string): Promise<boolean> {
        const user = await this.userRepository.findOne({ email });
        return !!user; // Devuelve true si el usuario existe, false si no existe
      }*/
}

