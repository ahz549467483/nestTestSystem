import { BaseEntity } from 'src/common/entities/base.entity';
import { PrimaryColumn, Column } from 'typeorm';
enum SEX_TYPES {
	'MAN' = 0,
	'WOMAN',
}
export class TesterEntity extends BaseEntity {
	@PrimaryColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	password: string;

	@Column()
	realname: string;

	@Column()
	age: number;

	@Column({ type: 'simple-enum', enum: SEX_TYPES })
	sex: number;

	@Column({
		name: 'birth_day',
		type: 'date',
	})
	birthDay: Date;

	@Column()
	phone: string;

	@Column({ name: 'image_path' })
	imagePath: string;

	@Column({
		name: 'wx_open_id',
	})
	wxOpenId: string;
}
