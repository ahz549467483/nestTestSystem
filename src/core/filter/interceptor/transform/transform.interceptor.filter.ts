/*
 * @Author: chenchen
 * @Date: 2023-09-20 10:25:50
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-20 10:32:24
 */

import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
	intercept(
		context: ExecutionContext,
		next: CallHandler<any>,
	): Observable<any> | Promise<Observable<any>> {
		return next.handle().pipe(
			map((data) => {
				return {
					data,
					code: 0,
					msg: '请求成功',
				};
			}),
		);
	}
}
