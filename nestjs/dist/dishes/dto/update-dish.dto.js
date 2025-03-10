"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDishDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_dish_dto_1 = require("./create-dish.dto");
class UpdateDishDto extends (0, mapped_types_1.PartialType)(create_dish_dto_1.CreateDishDto) {
}
exports.UpdateDishDto = UpdateDishDto;
//# sourceMappingURL=update-dish.dto.js.map