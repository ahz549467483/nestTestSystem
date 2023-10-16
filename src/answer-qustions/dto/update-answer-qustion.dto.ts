import { PartialType } from '@nestjs/swagger';
import { CreateAnswerQustionDto } from './create-answer-qustion.dto';

export class UpdateAnswerQustionDto extends PartialType(CreateAnswerQustionDto) {}
