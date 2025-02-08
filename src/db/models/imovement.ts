import { Document, model, Model, Schema } from 'mongoose'

export interface InventoryMovementD
    extends Document<InventoryMovementI>,
        InventoryMovementI {}

export interface InventoryMovementModel extends Model<InventoryMovementD> {}

export const inventoryMovementSchema = new Schema<InventoryMovementI>(
    {
        supplier: {
            type: Schema.Types.ObjectId,
            ref: 'Supplier',
        },
        orderDate: { type: Date, required: true, default: Date.now() },
        deliveryDate: { type: Date },
        quantity: { type: Number, required: true },
        costPerUnit: { type: Number, required: true },
        status: {
            type: String,
            enum: ['pending', 'received', 'cancelled', 'deleted'],
            required: true,
            default: 'pending',
        },
        Srcinventory: {
            type: Schema.Types.ObjectId,
            ref: 'Inventory',
            required: true,
        },
        Dstinventory: {
            type: Schema.Types.ObjectId,
            ref: 'Inventory',
        },
    },
    {
        timestamps: true,
    }
)

export const InventoryMovementModel = model<
    InventoryMovementI,
    InventoryMovementModel
>('InventoryMovement', inventoryMovementSchema)

export const createInventoryMovementFactory = async (
    props: Partial<InventoryMovementD>
): Promise<InventoryMovementD> => {
    const inventoryMovement = new InventoryMovementModel({
        supplier: props.supplier || 'Default Supplier',
        orderDate: props.orderDate || new Date(),
        deliveryDate: props.deliveryDate || new Date(),
        quantity: props.quantity || 0,
        costPerUnit: props.costPerUnit || 0,
        status: props.status || 'Pending',
        Srcinventory: props.Srcinventory || 'Default Inventory',
        Dstinventory: props.Dstinventory || 'Default Inventory',
    })
    const savedInventoryMovement = await inventoryMovement.save()
    return savedInventoryMovement
}
