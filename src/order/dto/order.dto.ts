import { IsInt, IsString, IsUUID, Min } from "class-validator";

export class OrderDto{

    @IsString()
    orderId: string;

    @IsString()
    userId: string;

    @IsInt()
    @Min(1, { message: 'Amount must be at least 1' })
    amount:number
}