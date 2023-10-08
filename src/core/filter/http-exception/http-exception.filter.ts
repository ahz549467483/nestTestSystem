/*
 * @Author: chenchen
 * @Date: 2023-09-20 10:25:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-25 16:33:29
 */
import {
	ArgumentsHost,
	ExceptionFilter,
	HttpException,
	Catch,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	catch(exception: any, host: ArgumentsHost) {
		const ctx = host.switchToHttp(); // 获取上下文
		const response = ctx.getResponse(); // 获取response
		const status = exception.getStatus(); // 获取状态码
		const message = exception.message
			? exception.message
			: `${status >= 500 ? 'service error' : 'client error'}`;
		const errorResponse = {
			code: -1,
			message,
			data: {},
		};
		response.status(status);
		response.header('Content-type', 'application/json; charset=utf-8');
		response.send(errorResponse);
	}
}
