import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Book {
  constructor(title, description, author) {
    this.title = title;
    this.description = description;
    this.author = author;
  }

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  title: string;

  @Column('text')
  description: string;

  @Column()
  author: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
