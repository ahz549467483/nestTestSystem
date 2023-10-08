/*
 * @Author: chenchen
 * @Date: 2023-09-21 09:31:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-26 11:01:03
 */
import { ApiProperty } from '@nestjs/swagger/dist';
import { IsNotEmpty } from 'class-validator';
export class CreateExamDto {
	@ApiProperty({ description: '测试卷名称' })
	@IsNotEmpty({ message: '测试卷名称不能为空' })
	examName: string;

	@ApiProperty({ description: '测试卷名称' })
	content: string;

	@ApiProperty({ description: '创建人' })
	@IsNotEmpty({ message: '创建人必传' })
	createUser: string;
}
