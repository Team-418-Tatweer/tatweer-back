import { OrderI, OrderItemI } from '@myTypes/Order'
import { Model, Schema, model, Document } from 'mongoose'
import { ProductModel } from './product'
const required = true

export interface OrderD extends Document<OrderI>, OrderI {}

export interface OrderModel extends Model<OrderD> {
    findOrder(id: string): Promise<OrderI>
}

export const orderItemSchema = new Schema<OrderItemI>({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required,
    },
    quantity: { type: Number, required },
})

const orderSchema = new Schema<OrderI>(
    {
        orderItems: [orderItemSchema],
        client: { type: Schema.Types.ObjectId, ref: 'Client', required },
        region: { type: Schema.Types.ObjectId, ref: 'Region', required },
        notes: { type: String },
        date: { type: Date, default: Date.now },
        status: {
            type: String,
            enum: ['pending', 'processing', 'completed', 'cancelled'],
            default: 'pending',
        },
        totalPrice: { type: Number, default: 0 },
    },
    {
        timestamps: true,
    }
)

orderSchema.pre('save', async function (next) {
    try {
        const order = this
        let totalPrice = 0
        const productIds = order.orderItems.map((item) => item.product)
        const products = await ProductModel.find({ _id: { $in: productIds } })
        if (products.length !== productIds.length) {
            new Error('Invalid product ID in order items')
        }
        totalPrice = products.reduce((a, b) => {
            return a + b.price
        }, 0)
        next()
    } catch (err) {
        next(err as Error)
    }
})

export const OrderModel = model<OrderI, OrderModel>('Orders', orderSchema)

export const createOrderFactory = async (
    props: Partial<OrderI>
): Promise<OrderD> => {
    const order = new OrderModel({
        orderItems: props.orderItems || [],
        client: props.client,
        region: props.region,
        notes: props.notes || '',
        date: props.date || new Date(),
        status: props.status || 'pending',
    })
    const savedOrder = await order.save()
    return savedOrder
}
