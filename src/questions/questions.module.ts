/*
 * @Author: chenchen
 * @Date: 2023-09-26 16:21:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-26 17:10:04
 */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { QuestionEntity } from './entities/question.entity';
@Module({
	imports: [TypeOrmModule.forFeature([QuestionEntity])],
	controllers: [QuestionsController],
	providers: [QuestionsService],
})
export class QuestionsModule {}
