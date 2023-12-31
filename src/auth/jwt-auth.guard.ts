import { IS_PUBLIC_KEY } from './jwt.decorator';
import { AuthGuard } from '@nestjs/passport';
import { Injectable, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
	constructor(private reflector: Reflector) {
		super();
	}
	canActivate(context: ExecutionContext) {
		console.log(context);
		const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
			context.getHandler(),
			context.getClass(),
		]);
		if (isPublic) {
			return true;
		}
		return super.canActivate(context);
	}
}
