/*
 * @Author: chenchen
 * @Date: 2023-09-26 16:21:40
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-27 09:14:49
 */
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Repository } from 'typeorm';
import { QuestionEntity } from './entities/question.entity';

@Injectable()
export class QuestionsService {
	constructor(
		@InjectRepository(QuestionEntity)
		private readonly questionsRepository: Repository<QuestionEntity>,
	) {}
	async create(createQuestionDto: CreateQuestionDto) {
		const newQuestion =
			await this.questionsRepository.create(createQuestionDto);
		return await this.questionsRepository.save(newQuestion);
	}

	async findAll(query) {
		const qb =
			await this.questionsRepository.createQueryBuilder('question');
		qb.where('1=1');
		qb.orderBy('question.createTime', 'DESC');
		const count = await qb.getCount();
		const { pageNum = 1, pageSize = 10 } = query;
		qb.limit(pageSize);
		qb.offset(pageSize * (pageNum - 1));
		const questions = await qb.getMany();
		return { list: questions, count };
	}

	async findOne(id: number) {
		const result = await this.questionsRepository.findOne({
			where: { id },
		});
		if (!result) {
			throw new HttpException('查询不到该题目', HttpStatus.BAD_REQUEST);
		}
		return result;
	}

	async update(id: number, updateQuestionDto: UpdateQuestionDto) {
		const alreadyQuestion = await this.questionsRepository.findOne({
			where: { id },
		});
		if (!alreadyQuestion) {
			throw new HttpException('不存在该题目', HttpStatus.BAD_REQUEST);
		}
		const result = await this.questionsRepository.merge(
			alreadyQuestion,
			updateQuestionDto,
		);
		return await this.questionsRepository.save(result);
	}

	async remove(id: number) {
		const alreadyQuestion = await this.questionsRepository.findOne({
			where: { id },
		});
		if (!alreadyQuestion) {
			throw new HttpException('该题目不存在', HttpStatus.BAD_REQUEST);
		}

		return await this.questionsRepository.remove(alreadyQuestion);
	}
}
