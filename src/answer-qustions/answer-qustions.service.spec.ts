import { Test, TestingModule } from '@nestjs/testing';
import { AnswerQustionsService } from './answer-qustions.service';

describe('AnswerQustionsService', () => {
  let service: AnswerQustionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnswerQustionsService],
    }).compile();

    service = module.get<AnswerQustionsService>(AnswerQustionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
