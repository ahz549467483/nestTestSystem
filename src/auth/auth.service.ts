/*
 * @Author: chenchen
 * @Date: 2023-09-15 10:27:16
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-28 10:42:19
 */
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
	constructor(
		private readonly userService: UserService,
		private readonly jwtService: JwtService,
	) {}
	createToken(user: Partial<User>) {
		return this.jwtService.sign(user);
	}
	login(user: Partial<User>) {
		const { id, username, role } = user;
		const token = this.createToken({
			id,
			username,
			role,
		});
		return token;
	}
	async getUser(user: Partial<User>) {
		const { id } = user;
		return await this.userService.findOne(id);
	}

}
