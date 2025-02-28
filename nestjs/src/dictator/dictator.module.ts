import { Module } from '@nestjs/common';
import { DictatorService } from './dictator.service';
import { DictatorController } from './dictator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dictator } from './entities/dictator.entity';

@Module({
  controllers: [DictatorController],
  providers: [DictatorService],
  imports: [TypeOrmModule.forFeature([Dictator])],
  exports:[TypeOrmModule]
})
export class DictatorModule {}