import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOne({
      where: { id: id },
    });
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async update(id: number, user: User): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { id: id },
    });
    return this.userRepository.save({ ...existingUser, ...user });
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async login(user: User) {
    return await this.userRepository.findOne({
      where: {
        name: user.name,
        password: user.password,
      },
    });
  }
}
