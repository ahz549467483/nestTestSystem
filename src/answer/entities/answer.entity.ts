import { BaseEntity } from 'src/common/entities/base.entity';
import { PrimaryColumn, Column } from 'typeorm';
export class Answer extends BaseEntity {
	@PrimaryColumn()
	id: number;

	@Column({ name: 'exam_id' })
	examId: number;

	@Column({})
	examName: string;

	@Column({})
	score: number;

	@Column({})
	examScore: number;

	@Column({})
	doTime: number;

	@Column({})
	testerId: number;
}
