import { ApiProperty } from '@nestjs/swagger/dist';
import { IsNotEmpty } from 'class-validator';
export class CreateTesterDto {
	@ApiProperty({ description: '用户名' })
	@IsNotEmpty()
	name: string;

	@ApiProperty({ description: '密码' })
	@IsNotEmpty()
	password: string;

	@ApiProperty({ description: '微信openid' })
	@IsNotEmpty()
	wxOpenId: string;

	@ApiProperty({ description: '头像地址' })
	imagePath: string;

	@ApiProperty({ description: '电话号码' })
	@IsNotEmpty()
	phone: string;

	@ApiProperty({ description: '生日' })
	birthDay: Date;

	@ApiProperty({ description: '性别' })
	sex: number;

	@ApiProperty({ description: '年龄' })
	age: number;

	@ApiProperty({ description: '' })
	realname: string;
}
