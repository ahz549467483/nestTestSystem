/*
 * @Author: chenchen
 * @Date: 2023-09-14 17:27:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-26 14:57:41
 */
import {
	Column,
	PrimaryGeneratedColumn,
	Entity,
	BeforeInsert,
	BeforeUpdate,
	OneToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Exam } from '../../exam/entities/exam.entity';
import * as bcrypt from 'bcryptjs';

@Entity('user')
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ length: 100 })
	username: string;

	@Column({ length: 100, nullable: true })
	nickname: string; //昵称

	@Exclude()
	@Column()
	password: string;

	@Column({ default: null })
	avatar: string; // 头像

	@Column({ default: null })
	email: string; // 邮箱

	@Column('simple-enum', { enum: ['root', 'author', 'visitor'] })
	role: string; // 用户组

	@Column({
		name: 'create_time',
		type: 'timestamp',
		default: () => 'CURRENT_TIMESTAMP',
	})
	createTime: Date;

	@Column({
		name: 'update_time',
		type: 'timestamp',
		default: () => 'CURRENT_TIMESTAMP',
	})
	updateTime: Date;

	@OneToMany(() => Exam, (exam) => exam.createUserInfo)
	exams: Exam[];

	@BeforeInsert()
	@BeforeUpdate()
	async encryptPwd() {
		this.password = await bcrypt.hashSync(this.password);
	}
}
