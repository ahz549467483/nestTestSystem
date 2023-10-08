/*
 * @Author: chenchen
 * @Date: 2023-09-27 14:31:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-27 15:21:35
 */
import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';
import { BaseEntity } from 'src/common/entities/base.entity';

@Entity('role')
export default class RoleEntity extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'create_admin_id' })
	createAdminId: number;

	@Column({ unique: true })
	name: string;

	@Column({ unique: true })
	label: string;

	@Column({ nullable: true })
	remark: string;
}
