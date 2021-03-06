import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import { User } from "./User";
@Entity("listings")
export class Listing extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("text") pictureUrl: string;

  @Column("varchar", { length: 255 })
  description: string;

  @Column("varchar", { length: 255 })
  category: string;

  @Column("int") price: number;

  @Column("int") beds: number;

  @Column("int") guests: number;

  @Column("double precision") lat: number;

  @Column("double precision") long: number;

  @Column("text", { array: true })
  amenities: string[];

  @Column("uuid") userId: string;

  @ManyToOne(() => User, user => user.listings)
  user: User;
}
