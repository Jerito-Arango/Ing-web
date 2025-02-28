import { DishesService } from './dishes.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
export declare class DishesController {
    private readonly dishesService;
    constructor(dishesService: DishesService);
    create(createDishDto: CreateDishDto): Promise<import("./entities/dish.entity").Dish>;
    findAll(): Promise<import("./entities/dish.entity").Dish[]>;
    findOne(id: string): Promise<import("./entities/dish.entity").Dish>;
    update(id: string, updateDishDto: UpdateDishDto): Promise<import("./entities/dish.entity").Dish>;
    remove(id: string): Promise<import("./entities/dish.entity").Dish>;
}
