/*
 * @Author: chenchen
 * @Date: 2023-09-14 17:27:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-18 15:18:32
 */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity';
@Module({
	imports: [TypeOrmModule.forFeature([User])],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService],
})
export class UserModule {}
