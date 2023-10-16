/*
 * @Author: chenchen
 * @Date: 2023-09-26 16:21:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-27 17:06:39
 */
import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiOperation, ApiBearerAuth } from '@nestjs/swagger';



@ApiTags('题目')
@Controller('questions')
export class QuestionsController {
	constructor(private readonly questionsService: QuestionsService) {}

	@ApiOperation({ summary: '创建题目' })
	@ApiBearerAuth()
	@Post()
	create(@Body() createQuestionDto: CreateQuestionDto) {
		return this.questionsService.create(createQuestionDto);
	}

	@ApiOperation({ summary: '获取题目列表' })
	@Get()
	findAll(@Body() query) {
		return this.questionsService.findAll(query);
	}

	@ApiOperation({ summary: '根据id查找题目' })
	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.questionsService.findOne(+id);
	}

	@ApiOperation({ summary: '根据id更新题目' })
	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateQuestionDto: UpdateQuestionDto,
	) {
		return this.questionsService.update(+id, updateQuestionDto);
	}

	@ApiOperation({ summary: '根据id删除题目' })
	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.questionsService.remove(+id);
	}
}
