import { Column, PrimaryColumn, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entity';

@Entity('content')
export class ContentEntity extends BaseEntity {
	@PrimaryColumn()
	id: number;

	@Column({ type: 'text' })
	content: string;
}
