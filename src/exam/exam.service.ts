import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, HttpException, HttpStatus, Delete } from '@nestjs/common';
import { CreateExamDto } from './dto/create-exam.dto';
import { UpdateExamDto } from './dto/update-exam.dto';
import { Exam } from './entities/exam.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExamService {
	constructor(
		@InjectRepository(Exam)
		private readonly examRepository: Repository<Exam>,
	) {}
	async create(createExamDto: CreateExamDto) {
		const { examName } = createExamDto;
		const has = await this.examRepository.findOne({ where: { examName } });
		if (has) {
			throw new HttpException('存在相同的测试卷', HttpStatus.BAD_REQUEST);
		}
		const exam = await this.examRepository.create(createExamDto);
		return await this.examRepository.save(exam);
	}

	async findAll(query) {
		const qb = await this.examRepository
			.createQueryBuilder('exam')
			.leftJoinAndSelect('exam.createUserInfo', 'createUserInfo')
			.where('1=1')
			.orderBy('exam.createTime', 'DESC');

		const count = await qb.getCount();
		console.log(count)
		const { pageNum = 1, pageSize = 10 } = query;
		qb.limit(pageSize);
		qb.offset(pageSize * (pageNum - 1));
		const exams = await qb.getMany();
		return {
			list: exams,
			count,
		};
	}

	findOne(id: number) {
		return `This action returns a #${id} exam`;
	}

	async update(id: string, updateExamDto: UpdateExamDto) {
		const exam = await this.examRepository.findOne({ where: { id } });
		if (!exam) {
			throw new HttpException('不存在该测试问卷', HttpStatus.BAD_REQUEST);
		}
		const newExam = await this.examRepository.merge(exam, updateExamDto);
		return await this.examRepository.save(newExam);
	}

	async remove(id: string) {
		const exam = await this.examRepository.findOne({ where: { id } });
		if (!exam) {
			throw new HttpException('不存在该测试问卷', HttpStatus.BAD_REQUEST);
		}
		return await this.examRepository.remove(exam);
	}
}
