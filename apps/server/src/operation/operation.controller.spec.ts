import { Test, TestingModule } from '@nestjs/testing';
import { OperationController } from './operation.controller';

describe('OperationController', () => {
  let controller: OperationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OperationController],
    }).compile();

    controller = module.get<OperationController>(OperationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
