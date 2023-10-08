/*
 * @Author: chenchen
 * @Date: 2023-09-18 15:53:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-18 15:55:21
 */
import { ApiProperty } from '@nestjs/swagger/dist';
import { IsNotEmpty } from 'class-validator';
export class LoginDto {
	@ApiProperty({ description: '用户名' })
	@IsNotEmpty()
	username: string;

	@ApiProperty({ description: '密码' })
	@IsNotEmpty()
	password: string;
}
