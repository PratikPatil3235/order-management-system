import { Module } from '@nestjs/common';
import { OrderContoller } from './order.controller';
import { OrderService } from './order.service';
import { PaymentService } from 'src/payment/payment.service';

@Module({
    imports: [],
    controllers: [OrderContoller],
    providers: [OrderService,PaymentService],
    exports:[]
})
export class OrderModule {}
