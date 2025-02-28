export interface DishInterface {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    createAt?: Date;
    updateAt?: Date;
}
declare let dishes: DishInterface[];
export default dishes;
