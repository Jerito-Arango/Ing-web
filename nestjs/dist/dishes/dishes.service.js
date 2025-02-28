"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const dish_entity_1 = require("./entities/dish.entity");
let DishesService = class DishesService {
    constructor(dishRepository) {
        this.dishRepository = dishRepository;
    }
    async create(createDishDto) {
        const newDish = this.dishRepository.
            create(createDishDto);
        await this.dishRepository.save(newDish);
        return newDish;
    }
    findAll() {
        const dishes = this.dishRepository.find({});
        return dishes;
    }
    findOne(id) {
        const dish = this.dishRepository.findOneBy({ id: id });
        if (!dish) {
            throw new common_1.NotFoundException(`Dish #${id} not found`);
        }
        return dish;
    }
    async update(id, updateDishDto) {
        const product = await this.dishRepository.preload({ id: id, ...updateDishDto });
        if (!product) {
            throw new common_1.NotFoundException(`Dish #${id} not found`);
        }
        await this.dishRepository.save(product);
        return product;
    }
    remove(id) {
        const dish = this.findOne(id);
        this.dishRepository.delete({ id: id });
        return dish;
    }
};
exports.DishesService = DishesService;
exports.DishesService = DishesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(dish_entity_1.Dish)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DishesService);
//# sourceMappingURL=dishes.service.js.map