import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DAN_TOC {
  @PrimaryGeneratedColumn()
  ID: number;
  @Column()
  DAN_TOC: string;
}
