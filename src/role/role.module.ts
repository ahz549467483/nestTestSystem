/*
 * @Author: chenchen
 * @Date: 2023-09-27 14:31:47
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-27 15:22:41
 */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import RoleEntity from './entities/role.entity';

@Module({
	imports: [TypeOrmModule.forFeature([RoleEntity])],
	controllers: [RoleController],
	providers: [RoleService],
})
export class RoleModule {}
