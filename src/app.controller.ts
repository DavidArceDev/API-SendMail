import { Body, Controller, Get, Options, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { MailModule } from './mail/mail.module';
import { NestInterceptor } from '@nestjs/common';
import { url } from 'inspector';

@Controller()
export class AppController {
  constructor(private readonly mailService: MailService) {}

  @Post('/send-email')
  async sendMail(@Body() body: {to: string }): Promise<{ success: boolean, message?: string}> {
    try {
      await this.mailService.sendMail(body.to);
      return { success:true, message:'Email sent successfully!'};
    } catch (error) {
      return { success:false ,message:'Failed to send email.'};
    }
  }



  /*@Patch(':email')
  updatePassByEmail(@Param('email') email: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updatePassByEmail(email, updateUserDto);

    async updatePassByEmail(email: string, updateUserDto: UpdateUserDto) {
      // Buscar al usuario por correo electrónico
      const user = await this.userRepository.findOne({ where: { email: email } });

    if (user) {
      const hashedPassword = await bcryptjs.hash(updateUserDto.password, 10);
      updateUserDto.password = hashedPassword;
      return await this.userRepository.update(user.id, updateUserDt
  }*/
}
