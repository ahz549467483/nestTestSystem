import { Injectable } from '@nestjs/common';
import { CreateAnswerQustionDto } from './dto/create-answer-qustion.dto';
import { UpdateAnswerQustionDto } from './dto/update-answer-qustion.dto';

@Injectable()
export class AnswerQustionsService {
  create(createAnswerQustionDto: CreateAnswerQustionDto) {
    return 'This action adds a new answerQustion';
  }

  findAll() {
    return `This action returns all answerQustions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} answerQustion`;
  }

  update(id: number, updateAnswerQustionDto: UpdateAnswerQustionDto) {
    return `This action updates a #${id} answerQustion`;
  }

  remove(id: number) {
    return `This action removes a #${id} answerQustion`;
  }
}
