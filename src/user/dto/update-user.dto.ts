/*
 * @Author: chenchen
 * @Date: 2023-09-14 17:27:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-18 10:35:29
 */
import { ApiProperty } from '@nestjs/swagger/dist';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @ApiProperty({ description: '用户名' })
    @IsNotEmpty()
    username?: string;

    @ApiProperty({ description: '密码' })
    @IsNotEmpty()
    password?: string;

    @ApiProperty({ description: '角色' })
    @IsNotEmpty()
    role?: string;
}
