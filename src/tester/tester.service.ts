import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateTesterDto } from './dto/create-tester.dto';
import { UpdateTesterDto } from './dto/update-tester.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TesterEntity } from './entities/tester.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TesterService {
	constructor(
		@InjectRepository(TesterEntity)
		private readonly testerRepository: Repository<TesterEntity>,
	) {}
	async create(createTesterDto: CreateTesterDto) {
		const { phone } = createTesterDto;
		const findOne = this.testerRepository.findOne({ where: { phone } });
		if (findOne) {
			throw new HttpException(
				'该手机号码已被注册',
				HttpStatus.BAD_REQUEST,
			);
		}
		const result = this.testerRepository.create(createTesterDto);
		return await this.testerRepository.save(result);
	}

	async findAll(query) {
		const qb = this.testerRepository
			.createQueryBuilder('tester')
			.where('1-1')
			.orderBy('tester.createTime', 'DESC');
		const count = await qb.getCount();
		const { pageNum, pageSize } = query;
		qb.limit(pageSize);
		qb.offset(pageSize * (pageNum - 1));
		const list = await qb.getMany();
		return { list, count };
	}

	async findOne(id: number) {
		const result = await this.testerRepository.findOne({ where: { id } });
		if (!result) {
			throw new HttpException('查询不到', HttpStatus.BAD_REQUEST);
		}
		return result;
	}

	async update(id: number, updateTesterDto: UpdateTesterDto) {
		const findOne = await this.testerRepository.findOne({ where: { id } });
		if (!findOne) {
			throw new HttpException('未查到该用户', HttpStatus.BAD_REQUEST);
		}
		const result = await this.testerRepository.merge(
			findOne,
			updateTesterDto,
		);
		return await this.testerRepository.save(result);
	}

	async remove(id: number) {
		const findOne = await this.testerRepository.findOne({ where: { id } });
		if (!findOne) {
			throw new HttpException('未查到该用户', HttpStatus.BAD_REQUEST);
		}
		return await this.testerRepository.remove(findOne);
	}
}
