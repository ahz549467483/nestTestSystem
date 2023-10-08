/*
 * @Author: chenchen
 * @Date: 2023-09-18 14:08:21
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-18 14:57:17
 */
import { ApiProperty } from '@nestjs/swagger/dist';
export class UserInfoDto {
	public id: string;
	public username: string;
	public role: string;
	public createTime: Date;
	public updateTime: Date;
	public email: string;
	public avatar: string;
	public nickname: string;
}
export interface UsersDto {
	list: UserInfoDto[];
	count: number;
}

export class LoginDto {
	@ApiProperty({ description: '用户名' })
	username: string;

	@ApiProperty({ description: '密码' })
	password: string;
}
