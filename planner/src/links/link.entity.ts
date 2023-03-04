import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Link {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  eventId: number;

  @Column()
  @ApiProperty()
  material: string;

  @Column()
  @ApiProperty()
  task: string;
}
