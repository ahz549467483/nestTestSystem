import { PartialType } from '@nestjs/swagger';
import { CreateTesterDto } from './create-tester.dto';

export class UpdateTesterDto extends PartialType(CreateTesterDto) {}
