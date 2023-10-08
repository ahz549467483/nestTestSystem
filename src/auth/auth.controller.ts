import { AuthService } from './auth.service';
import {
	Body,
	Controller,
	Post,
	UseGuards,
	Req,
	UseInterceptors,
	ClassSerializerInterceptor,
} from '@nestjs/common';
import { ApiOperation, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { Public } from './jwt.decorator';

@ApiTags('登录')
@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@ApiOperation({ summary: '登录' })
	@Public()
	@UseGuards(LocalAuthGuard)
	@Post('login')
	login(@Body() user: LoginDto, @Req() req) {
		return this.authService.login(req.user);
	}

	@ApiOperation({ summary: '测试token' })
	@ApiBearerAuth()
	@UseGuards(JwtAuthGuard)
	// @UseInterceptors(ClassSerializerInterceptor)
	@Post('/profile')
	async getProfile(@Req() req) {
		return req.user;
	}
}
