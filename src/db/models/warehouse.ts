import mongoose, { Model, Schema, model, Document } from 'mongoose'

const required = true

export interface WarehouseD extends Document<WarehouseI>, WarehouseI {}

export interface WarehouseModel extends Model<WarehouseD> {}

const warehouseSchema = new Schema<WarehouseI>(
    {
        region: { type: Schema.Types.ObjectId, ref: 'Region', required },
        location: { type: String, required },
        capacity: { type: Number, required },
        usedCapacity: { type: Number, required, default: 0 },
        recorderPoint: { type: Number, required },
    },
    {
        timestamps: true,
    }
)

warehouseSchema.set('toJSON', { virtuals: true })

export const WarehouseModel = model<WarehouseI, WarehouseModel>(
    'Warehouse',
    warehouseSchema
)

export const createWarehouseFactory = async (
    props: WarehouseD
): Promise<WarehouseD> => {
    const warehouse = new WarehouseModel<WarehouseI>({
        region: props.region,
        location: props.location || 'Default Location',
        capacity: props.capacity || 0,
        usedCapacity: props.usedCapacity || 0,
        recorderPoint: props.recorderPoint || 0,
    })
    const savedWarehouse = await warehouse.save()
    return savedWarehouse
}
