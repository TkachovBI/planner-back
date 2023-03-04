import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Social } from './social.entity';

@Injectable()
export class SocialService {
  constructor(
    @InjectRepository(Social)
    private readonly socialRepository: Repository<Social>,
  ) {}

  async findAll(): Promise<Social[]> {
    return await this.socialRepository.find();
  }

  async findOne(id: number): Promise<Social> {
    return await this.socialRepository.findOne({ where: { id: id } });
  }

  async findByEventId(id: number): Promise<Social[]> {
    return await this.socialRepository.find({ where: { eventId: id } });
  }

  async create(social: Social): Promise<Social> {
    return await this.socialRepository.save(social);
  }

  async update(id: number, social: Social): Promise<Social> {
    await this.socialRepository.update(id, social);
    return await this.socialRepository.findOne({ where: { id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.socialRepository.delete(id);
  }
}
