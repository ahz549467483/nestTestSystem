import { User } from 'src/user/entities/user.entity';
/*
 * @Author: chenchen
 * @Date: 2023-09-21 09:31:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-26 11:04:11
 */
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import {
	Controller,
	Get,
	Post,
	Body,
	Req,
	Patch,
	Param,
	Delete,
	UseGuards,
} from '@nestjs/common';
import { ExamService } from './exam.service';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@ApiTags('测试试卷')
@Controller('exam')
export class ExamController {
	constructor(private readonly examService: ExamService) {}

	@ApiOperation({ summary: '创建' })
	@ApiBearerAuth()
	@UseGuards(JwtAuthGuard)
	@Post()
	create(@Req() req, @Body() createExamDto: CreateExamDto) {
		const { id } = req.user;
		const newParams = {
			...createExamDto,
			createUser: id,
		};
		return this.examService.create(newParams);
	}

	@Get()
	findAll(@Body() query) {
		return this.examService.findAll(query);
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.examService.findOne(+id);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() updateExamDto: UpdateExamDto) {
		return this.examService.update(id, updateExamDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.examService.remove(id);
	}
}
