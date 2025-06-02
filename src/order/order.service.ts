import { PaymentService } from './../payment/payment.service';
import { Injectable } from "@nestjs/common";
import { OrderDto } from "./dto/order.dto";
import { v4 as uuidv4 } from 'uuid';

export interface PaymentObject{
    status: string;
    transaction_id: string;
}


@Injectable()
export class OrderService{
    constructor(private readonly paymentobj: PaymentService){}
    private myOrder: OrderDto[] = [];

    getAllOrders(): OrderDto[]{
        return this.myOrder;
    }

    protected paymentObject:PaymentObject

    public getOrderDetails():OrderDto[] {
        return this.myOrder;
    }

    
    async addOrder(order: OrderDto): Promise<PaymentObject | string> {
    order.orderId = uuidv4();
    order.userId = uuidv4();

    this.myOrder.push(order);

    return this.paymentobj.payementProcedure(order).then((data) => {
        return {
            status: data,
            transaction_id: 'abc123',
        };
    }).catch((error) => {
        return error;
    });
}
}