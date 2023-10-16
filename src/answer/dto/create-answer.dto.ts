import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerDto {
	@ApiProperty({ description: '试卷id' })
	examId: string;

	@ApiProperty({ description: '试卷名称' })
	examName: string;

	@ApiProperty({ description: '试卷得分' })
	score: string;

	@ApiProperty({ description: '试卷总分' })
	examScore: string;

	@ApiProperty({ description: '做题时间' })
	doTime: string;

	@ApiProperty({ description: '测试者id' })
	testerId: string;
}
