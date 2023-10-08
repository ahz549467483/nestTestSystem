/*
 * @Author: chenchen
 * @Date: 2023-09-14 17:27:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-18 09:47:55
 */
import { ApiProperty } from '@nestjs/swagger/dist';
import { IsNotEmpty } from 'class-validator';
export class CreateUserDto {
	@ApiProperty({ description: '用户名' })
	@IsNotEmpty()
	username: string;

	@ApiProperty({ description: '密码' })
	@IsNotEmpty()
	password: string;

	@ApiProperty({ description: '角色' })
	@IsNotEmpty()
	role: string;
}
