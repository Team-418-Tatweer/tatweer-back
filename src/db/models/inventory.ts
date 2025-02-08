import { Document, model, Model, Schema } from 'mongoose'

export interface InventoryD extends Document<InventoryI>, InventoryI {}

export interface InventoryModel extends Model<InventoryD> {}

export const inventorySchema = new Schema<InventoryI>(
    {
        warehouse: {
            type: Schema.Types.ObjectId,
            ref: 'Warehouse',
            required: true,
        },
        recorderPoint: { type: Number, required: true },
        currentStock: { type: Number, required: true },
        safetyStock: { type: Number, required: true },
        itemType: {
            type: String,
            enum: ['Product', 'RawMaterial'],
            required: true,
        },
        itemID: {
            type: Schema.Types.ObjectId,
            refPath: 'itemType',
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

export const InventoryModel = model<InventoryI, InventoryModel>(
    'Inventory',
    inventorySchema
)

export const createInventoryFactory = async (
    props: Partial<InventoryD>
): Promise<InventoryD> => {
    const inventory = new InventoryModel({
        warehouse: props.warehouse || 'Default Warehouse',
        recorderPoint: props.recorderPoint || 0,
        currentStock: props.currentStock || 0,
        safetyStock: props.safetyStock || 0,
        itemType: props.itemType || 'product',
    })
    const savedInventory = await inventory.save()
    return savedInventory
}
