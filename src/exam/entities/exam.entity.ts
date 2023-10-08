/*
 * @Author: chenchen
 * @Date: 2023-09-21 09:31:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-26 15:26:34
 */
import {
	Column,
	PrimaryGeneratedColumn,
	Entity,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
@Entity('exam')
export class Exam {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column({ name: 'exam_name', default: null })
	examName: string;

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
	updataTime: Date;

	@Column({ name: 'create_user', default: null })
	createUser: string;

	@Column({
		type: 'text',
	})
	content: string;

	@Column('simple-enum', { enum: [0, 1] })
	deleted: number;

	@ManyToOne(() => User, (user) => user.exams)
	@JoinColumn({
		name: 'create_user',
	})
	createUserInfo: User;
}
