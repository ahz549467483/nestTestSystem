/*
 * @Author: chenchen
 * @Date: 2023-09-14 17:27:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-18 16:21:48
 */
import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/user.dto';

@ApiTags('用户')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

    @ApiOperation({ summary: '注册用户' })
	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		return this.userService.create(createUserDto);
	}

    @ApiOperation({ summary: '用户列表' })
	@Get()
	findAll(@Body() query) {
		return this.userService.findAll(query);
	}

    @ApiOperation({ summary: '根据id查询用户' })
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.userService.findOne(id);
	}

    @ApiOperation({ summary: '修改用户' })
	@Patch(':id')
	update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.userService.update(id, updateUserDto);
	}

    @ApiOperation({ summary: '删除用户' })
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.userService.remove(id);
	}
}
