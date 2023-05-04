import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinTable,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class DAN_TOC {
  @PrimaryGeneratedColumn()
  ID: number;
  @PrimaryColumn()
  DAN_TOC: string;
}
