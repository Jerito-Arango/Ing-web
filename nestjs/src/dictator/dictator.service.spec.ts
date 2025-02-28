import { Test, TestingModule } from '@nestjs/testing';
import { DictatorService } from './dictator.service';

describe('DictatorService', () => {
  let service: DictatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DictatorService],
    }).compile();

    service = module.get<DictatorService>(DictatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
