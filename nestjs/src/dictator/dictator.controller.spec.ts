import { Test, TestingModule } from '@nestjs/testing';
import { DictatorController } from './dictator.controller';
import { DictatorService } from './dictator.service';

describe('DictatorController', () => {
  let controller: DictatorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DictatorController],
      providers: [DictatorService],
    }).compile();

    controller = module.get<DictatorController>(DictatorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
