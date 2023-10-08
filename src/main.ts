/*
 * @Author: chenchen
 * @Date: 2023-09-14 16:57:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-25 16:39:05
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './core/filter/http-exception/http-exception.filter';
import { TransformInterceptor } from './core/filter/interceptor/transform/transform.interceptor.filter';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix('mes');
	app.useGlobalFilters(new HttpExceptionFilter());
	app.useGlobalInterceptors(new TransformInterceptor());
	// app.useGlobalPipes(new ValidationPipe());
	const config = new DocumentBuilder()
		.setTitle('ems')
		.setDescription('ems system api document')
		.setVersion('1.0')
		.addBearerAuth()
		// .addSecurity('ApiKeyAuth', {
		// 	type: 'apiKey',
		// 	in: 'header',
		// 	name: '_token',
		// })
		// .addSecurityRequirements('ApiKeyAuth')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('docs', app, document);
	await app.listen(3000);
}
bootstrap();
