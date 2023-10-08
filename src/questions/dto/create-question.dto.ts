/*
 * @Author: chenchen
 * @Date: 2023-09-26 16:21:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-27 09:18:13
 */
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import {} from 'typeorm';
export class CreateQuestionDto {
	@ApiProperty({ description: '题目名称' })
	@IsNotEmpty({ message: '题目名称必填' })
	questionName: string;

	@ApiProperty({ description: '题目类型 0:选择题' })
	@IsNotEmpty({ message: '题目类型必填' })
	questionType: number;

	@ApiProperty({ description: '题目配置' })
	@IsNotEmpty({ message: '题目配置必填' })
	questionContent: string;
}
