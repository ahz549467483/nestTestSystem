import { Injectable } from '@nestjs/common';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContentEntity } from './entities/content.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class ContentService {
	constructor(
		@InjectRepository(ContentEntity)
		private readonly contentRespository: Repository<ContentEntity>,
	) {}
	async create(createContentDto: CreateContentDto) {
		const newContent =
			await this.contentRespository.create(createContentDto);
		return await this.contentRespository.save(newContent);
	}

	findAll() {
		return `This action returns all content`;
	}

	async findOne(id: number) {
		const result = await this.contentRespository.findOne({
			where: { id },
		});
		if (!result) {
			throw new HttpException('未查询到改用户', HttpStatus.BAD_REQUEST);
		}
		return result;
	}

	async update(id: number, updateContentDto: UpdateContentDto) {
		const findOne = await this.contentRespository.findOne({
			where: { id },
		});
		if (!findOne) {
			throw new HttpException('不存在该内容', HttpStatus.BAD_REQUEST);
		}
		const content = await this.contentRespository.merge(
			findOne,
			updateContentDto,
		);
		return await this.contentRespository.save(content);
	}

	async remove(id: number) {
		const findOne = await this.contentRespository.findOne({
			where: { id },
		});
		if (!findOne) {
			throw new HttpException('未查到该内容', HttpStatus.BAD_REQUEST);
		}
		return await this.contentRespository.remove(findOne);
	}
}
