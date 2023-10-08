/*
 * @Author: chenchen
 * @Date: 2023-09-27 14:31:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-27 15:27:38
 */
import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString, MinLength, IsOptional } from 'class-validator';
export class CreateRoleDto {
	@ApiProperty({ description: '角色名称' })
	@IsString()
	@MinLength(2)
	name: string;

	@ApiProperty({
		description: '角色名称',
		required: false,
	})
	@IsString()
	@IsOptional()
	remark: string;
}
