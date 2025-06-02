import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { OrderDto } from "./dto/order.dto";
import { OrderService, PaymentObject } from "./order.service";

@Controller('order')
export class OrderContoller {

    constructor(private orderService: OrderService) { }
    
    @Get('/getOrder')
    getAllOrder(): OrderDto[]{
        return this.orderService.getAllOrders();
    }

    @Post('/addOrder')
    async addOrder(@Body(new ValidationPipe()) order:OrderDto ):Promise<PaymentObject | string>{
        return  await this.orderService.addOrder(order);
    }
}