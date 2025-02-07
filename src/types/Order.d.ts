import { Document, ObjectId, PopulatedDoc, Types } from 'mongoose'

declare interface OrderI {
    orderItems: OrderItemI[]
    client: Types.ObjectId
    region: Types.ObjectId
    notes: string
    date: Date
    status: string
    totalPrice: number
}
declare interface OrderItemI {
    product: Types.ObjectId
    quantity: number
}
