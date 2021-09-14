import { Test, TestingModule } from '@nestjs/testing';
import { UrlInfoController } from './url-info.controller';

describe('UrlInfoController', () => {
  let controller: UrlInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlInfoController],
    }).compile();

    controller = module.get<UrlInfoController>(UrlInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
