import { Module } from '@nestjs/common';
import { TesterService } from './tester.service';
import { TesterController } from './tester.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TesterEntity } from './entities/tester.entity';

@Module({
	imports: [TypeOrmModule.forFeature([TesterEntity])],
	controllers: [TesterController],
	providers: [TesterService],
})
export class TesterModule {}
