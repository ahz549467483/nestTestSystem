/*
 * @Author: chenchen
 * @Date: 2023-09-21 09:31:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-21 16:59:18
 */
import { Module } from '@nestjs/common';
import { ExamService } from './exam.service';
import { ExamController } from './exam.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './entities/exam.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Exam])],
	controllers: [ExamController],
	providers: [ExamService],
})
export class ExamModule {}
