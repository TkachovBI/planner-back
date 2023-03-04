import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async findAll(): Promise<Event[]> {
    return this.eventRepository.find();
  }

  async findOne(id: number): Promise<Event> {
    return this.eventRepository.findOne({ where: { id: id } });
  }

  async create(event: Event): Promise<Event> {
    return this.eventRepository.save(event);
  }

  async update(id: number, event: Event): Promise<Event> {
    await this.eventRepository.update(id, event);
    return this.eventRepository.findOne({ where: { id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.eventRepository.delete(id);
  }
}
