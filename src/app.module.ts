/*
 * @Author: chenchen
 * @Date: 2023-09-14 16:57:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-15 16:31:47
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamModule } from './exam/exam.module';
import { QuestionsModule } from './questions/questions.module';
import { RoleModule } from './role/role.module';

@Module({
	imports: [
		TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '549467', // 办公室
            database: 'blog',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
		UserModule,
        AuthModule,
        ExamModule,
        QuestionsModule,
        RoleModule
    ],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
