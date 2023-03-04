import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Social {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  eventId: number;

  @Column()
  @ApiProperty()
  socialType: string;
}
