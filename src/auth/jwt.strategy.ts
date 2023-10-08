/*
 * @Author: chenchen
 * @Date: 2023-09-18 17:30:24
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-25 16:48:56
 */
import { AuthService } from './auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, StrategyOptions } from 'passport-jwt';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { UnauthorizedException } from '@nestjs/common';

export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
		private readonly authService: AuthService,
		private readonly configService: ConfigService,
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: configService.get('SECRET', 'test123456'),
		} as StrategyOptions);
	}
	async validate(user: User) {
		console.log(user)
		const existUser = await this.authService.getUser(user);
		if (!existUser) {
			throw new UnauthorizedException('token不正确');
		}
		return existUser;
	}
}
