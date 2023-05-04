import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class BENH_NHAN {
  @PrimaryGeneratedColumn()
  ID: number
  @Column()
  TEN: string
}
