import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDictatorDto } from './dto/create-dictator.dto';
import { UpdateDictatorDto } from './dto/update-dictator.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Dictator } from './entities/dictator.entity';
@Injectable()
export class DictatorService {
  constructor(
    @InjectRepository(Dictator)
    private dictatorRepository: Repository<Dictator>,//este constructor es para hacer que la clase se conecte a la base de datos
  ) {}
  
  async create(createDictatorDto: CreateDictatorDto) {
    const newDictator = this.dictatorRepository.
    create(createDictatorDto);
    await this.dictatorRepository.save(newDictator);
    return newDictator;
  }

  async findAll() {
       const dictators=await this.dictatorRepository.find({});
       return dictators;
  }

  findOne(id: string) {
     const dictator= this.dictatorRepository.findOneBy({id:id});
     if(!dictator){
      throw console.error("Nod found");
     }
     return dictator;
  }

  async update(id: string, updateDictatorDto: UpdateDictatorDto) {
   const dictator = await this.dictatorRepository.preload({id:id,...updateDictatorDto});
   if(!dictator){
    throw new NotFoundException("Dictator #${id} not found")
   }
   await this.dictatorRepository.save(dictator);
   return dictator;
 }

  remove(id: string) {
    const dictator = this.findOne(id);
    this.dictatorRepository.delete({id:id})
    return dictator;
 }
}
