/*
 * @Author: chenchen
 * @Date: 2023-09-27 14:31:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-10-07 10:16:16
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
import { ApiTags } from '@nestjs/swagger';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';


@ApiTags('角色')
@Controller('role')
export class RoleController {
	constructor(private readonly roleService: RoleService) {}

	@Post()
	create(@Body() createRoleDto: CreateRoleDto) {
		return this.roleService.create(createRoleDto);
	}

	@Get()
	findAll() {
		return this.roleService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.roleService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
		return this.roleService.update(+id, updateRoleDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.roleService.remove(+id);
	}
}
