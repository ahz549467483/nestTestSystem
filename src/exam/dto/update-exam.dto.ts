/*
 * @Author: chenchen
 * @Date: 2023-09-21 09:31:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-22 14:25:40
 */
import { ApiProperty } from '@nestjs/swagger/dist';
import { PartialType } from '@nestjs/swagger';
import { CreateExamDto } from './create-exam.dto';

export class UpdateExamDto extends PartialType(CreateExamDto) {
	@ApiProperty({ description: '测试卷名称' })
	examName: string;

	@ApiProperty({ description: '测试卷内容' })
	content: string;
}
