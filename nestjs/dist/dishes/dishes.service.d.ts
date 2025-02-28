import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { Repository } from 'typeorm';
import { Dish } from './entities/dish.entity';
export declare class DishesService {
    private dishRepository;
    constructor(dishRepository: Repository<Dish>);
    create(createDishDto: CreateDishDto): Promise<Dish>;
    findAll(): Promise<Dish[]>;
    findOne(id: string): Promise<Dish>;
    update(id: string, updateDishDto: UpdateDishDto): Promise<Dish>;
    remove(id: string): Promise<Dish>;
}
