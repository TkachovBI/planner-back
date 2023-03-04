import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Link } from './link.entity';

@Injectable()
export class LinkService {
  constructor(
    @InjectRepository(Link)
    private readonly linkRepository: Repository<Link>,
  ) {}

  async findAll(): Promise<Link[]> {
    return this.linkRepository.find();
  }

  async findOne(id: number): Promise<Link> {
    return this.linkRepository.findOne({ where: { id: id } });
  }

  async findByEventId(eventId: number): Promise<Link[]> {
    return this.linkRepository.find({ where: { eventId: eventId } });
  }

  async create(link: Link): Promise<Link> {
    return this.linkRepository.save(link);
  }

  async update(id: number, link: Link): Promise<Link> {
    await this.linkRepository.update(id, link);
    return this.linkRepository.findOne({ where: { id: id } });
  }

  async remove(id: number): Promise<void> {
    await this.linkRepository.delete(id);
  }
}
