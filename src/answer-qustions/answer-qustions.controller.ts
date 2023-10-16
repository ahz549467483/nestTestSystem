import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnswerQustionsService } from './answer-qustions.service';
import { CreateAnswerQustionDto } from './dto/create-answer-qustion.dto';
import { UpdateAnswerQustionDto } from './dto/update-answer-qustion.dto';

@Controller('answer-qustions')
export class AnswerQustionsController {
  constructor(private readonly answerQustionsService: AnswerQustionsService) {}

  @Post()
  create(@Body() createAnswerQustionDto: CreateAnswerQustionDto) {
    return this.answerQustionsService.create(createAnswerQustionDto);
  }

  @Get()
  findAll() {
    return this.answerQustionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.answerQustionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnswerQustionDto: UpdateAnswerQustionDto) {
    return this.answerQustionsService.update(+id, updateAnswerQustionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.answerQustionsService.remove(+id);
  }
}
