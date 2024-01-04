import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agent } from './agent.entity';

@Injectable()
export class EmailValidationService {
  constructor(
    @InjectRepository(Agent)
    private readonly agentRepository: Repository<Agent>,
  ) {}

  async isEmailValid(email: string): Promise<boolean> {
    const agent = await this.agentRepository.findOne({ where: {email} });
    return !!agent;
  }

  


}
