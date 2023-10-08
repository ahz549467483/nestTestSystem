/*
 * @Author: chenchen
 * @Date: 2023-09-15 10:23:48
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-20 16:38:18
 */
import { Strategy, IStrategyOptions } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { compareSync } from 'bcryptjs';

export class LocalStrategy extends PassportStrategy(Strategy) {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {
		super({
			useranmeFiled: 'username',
			passwordFiled: 'password',
		} as IStrategyOptions);
	}
	async validate(username, password) {
		const user = await this.userRepository
			.createQueryBuilder('user')
			.addSelect('user.password')
			.where('user.username=:username', { username })
			.getOne();

		if (!user) {
			throw new BadRequestException('未查询到用户');
		}
		if (!compareSync(password, user.password)) {
			throw new BadRequestException('用户或密码错误');
		}
		return user;
	}
}
