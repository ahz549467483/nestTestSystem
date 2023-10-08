/*
 * @Author: chenchen
 * @Date: 2023-09-15 10:26:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-27 17:05:33
 */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { User } from '../user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserModule } from 'src/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from './jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

const jwtModule = JwtModule.registerAsync({
	imports: [ConfigModule],
	inject: [ConfigService],
	useFactory: async (configService: ConfigService) => {
		return {
			secret: configService.get('SECRET', 'test123456'),
			signOptions: { expiresIn: '1h' },
		};
	},
});
@Module({
	imports: [
		TypeOrmModule.forFeature([User]),
		PassportModule,
		UserModule,
		jwtModule,
	],
	controllers: [AuthController],
	providers: [
		AuthService,
		LocalStrategy,
		ConfigService,
		JwtStrategy,
		{
			provide: APP_GUARD,
			useClass: JwtAuthGuard,
		},
	],
})
export class AuthModule {}
