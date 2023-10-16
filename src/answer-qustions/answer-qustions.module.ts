import { Module } from '@nestjs/common';
import { AnswerQustionsService } from './answer-qustions.service';
import { AnswerQustionsController } from './answer-qustions.controller';

@Module({
  controllers: [AnswerQustionsController],
  providers: [AnswerQustionsService],
})
export class AnswerQustionsModule {}
