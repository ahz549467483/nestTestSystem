/*
 * @Author: chenchen
 * @Date: 2023-09-14 17:27:02
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-25 16:27:39
 */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersDto, UserInfoDto, LoginDto } from './dto/user.dto';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	async login(loginDto: LoginDto) {
		const { username, password } = loginDto;
		const findUser = await this.userRepository.findOne({
			where: { username },
		});
		if (!findUser) {
			throw new HttpException(
				'不存在该用户',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
		if (password == findUser.password) {
			return findUser;
		} else {
			throw new HttpException(
				'账号密码错误',
				HttpStatus.INTERNAL_SERVER_ERROR,
			);
		}
	}
	async create(createUser: CreateUserDto) {
		const { username } = createUser;
		const hasCreate = await this.userRepository.findOne({
			where: { username },
		});
		if (hasCreate) {
			throw new HttpException('用户已存在', HttpStatus.BAD_REQUEST);
		}
		const newUser = await this.userRepository.create(createUser);
		return await this.userRepository.save(newUser);
	}

	async findAll(query): Promise<UsersDto> {
		const qb = await this.userRepository.createQueryBuilder('user');

		qb.where('1=1');
		qb.orderBy('user.createTime', 'DESC');

		const count = await qb.getCount();
		const { pageNum = 1, pageSize = 10 } = query;
		qb.limit(pageSize);
		qb.offset(pageSize * (pageNum - 1));

		const users = await qb.getMany();
		// const result: UserInfoDto[] = users.map((item) => {
		//     return item.toResponseObject()
		// })
		return { list: users, count };
	}

	async findOne(id: string) {
		const result = await this.userRepository.findOne({ where: { id } });
		if (!result) {
			throw new HttpException('未查询到改用户', HttpStatus.BAD_REQUEST);
		}
		return result;
	}

	async update(id: string, updateUserDto: UpdateUserDto) {
		console.log(id);
		console.log(updateUserDto);
		const user = await this.userRepository.findOne({ where: { id } });
		console.log(user);
		if (!user) {
			throw new HttpException('用户不存在', HttpStatus.BAD_REQUEST);
		}
		const newUser = await this.userRepository.merge(user, updateUserDto);
		console.log(newUser);
		return await this.userRepository.save(newUser);
	}

	async remove(id: string) {
		console.log(id);
		const user = await this.userRepository.findOne({ where: { id } });
		console.log(user);
		if (!user) {
			throw new HttpException('此用户不存在', HttpStatus.BAD_REQUEST);
		}
		return await this.userRepository.remove(user);
	}
}
