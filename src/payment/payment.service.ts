import { Injectable } from '@nestjs/common';
import { OrderDto } from 'src/order/dto/order.dto';
@Injectable()
export class PaymentService {
  async payementProcedure(orderdto: OrderDto):Promise<string> {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (!orderdto) {
              rej("order Rejected")
            }
            else {
                res("success")
            }
      }, 2000);
    });
  }
}
