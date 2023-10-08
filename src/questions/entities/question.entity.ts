/*
 * @Author: chenchen
 * @Date: 2023-09-26 16:21:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-27 17:01:39
 */
import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { BaseEntity } from 'src/common/entities/base.entity';
enum QUESTION_TYPES {
	'SELECT' = 0, // 选择题
}

@Entity('question')
export class QuestionEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ default: null })
	name: string;

	@Column({ type: 'simple-enum', enum: QUESTION_TYPES })
	questionType: number;

	@Column({
		name: 'create_admin_id',
	})
	createAdminId: number;

	@Column({
		type: 'text',
	})
	content: string;
}
