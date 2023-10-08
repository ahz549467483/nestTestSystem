import { Column } from 'typeorm';
/*
 * @Author: chenchen
 * @Date: 2023-09-27 15:13:06
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-27 16:55:57
 */
export class BaseEntity {
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

	@Column({ default: false })
	deleted: boolean;
}
