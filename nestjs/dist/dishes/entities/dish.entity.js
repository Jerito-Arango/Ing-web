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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = void 0;
const typeorm_1 = require("typeorm");
let Dish = class Dish {
};
exports.Dish = Dish;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Dish.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        default: 'Manuela va a perder',
        unique: true
    }),
    __metadata("design:type", String)
], Dish.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('numeric', {
        default: 0
    }),
    __metadata("design:type", Number)
], Dish.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        default: 'El mejor sushi de la HDP historia'
    }),
    __metadata("design:type", String)
], Dish.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('text', {
        default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F338192253'
    }),
    __metadata("design:type", String)
], Dish.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('date', {
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], Dish.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.Column)('date', {
        default: () => 'CURRENT_TIMESTAMP'
    }),
    __metadata("design:type", Date)
], Dish.prototype, "updateAt", void 0);
exports.Dish = Dish = __decorate([
    (0, typeorm_1.Entity)('dishes')
], Dish);
//# sourceMappingURL=dish.entity.js.map