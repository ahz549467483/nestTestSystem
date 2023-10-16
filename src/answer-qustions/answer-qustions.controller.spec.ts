import { Test, TestingModule } from '@nestjs/testing';
import { AnswerQustionsController } from './answer-qustions.controller';
import { AnswerQustionsService } from './answer-qustions.service';

describe('AnswerQustionsController', () => {
  let controller: AnswerQustionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnswerQustionsController],
      providers: [AnswerQustionsService],
    }).compile();

    controller = module.get<AnswerQustionsController>(AnswerQustionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
