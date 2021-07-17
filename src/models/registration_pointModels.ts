import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class RegistionPoint {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('')
  namePoint: string;

  @Column('')
  latitude: number;

  @Column('')
  longitude: number;

  @Column('')
  about: string;

  @Column('')
  whatsapp: number;

  @Column('')
  responsible_name: string;

  @Column('')
  typePoint: string;
}