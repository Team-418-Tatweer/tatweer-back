import { Model, Schema, model, Document } from 'mongoose'
const required = true
export interface RawMaterialD extends Document<RawMaterialI>, RawMaterialI {}

export interface RawMaterialModel extends Model<RawMaterialD> {
    findRawMaterial(id: string): Promise<RawMaterialI>
}
const rawMaterialsSchema = new Schema<RawMaterialI>(
    {
        name: { type: String, required },
        unitCost: { type: Number, required },
        supplier: { type: Schema.Types.ObjectId, ref: 'Supplier' },
    },
    {
        timestamps: true,
    }
)

rawMaterialsSchema.set('toJSON', { virtuals: true })

export const RawMaterialModel = model<RawMaterialI, RawMaterialModel>(
    'RawMaterial',
    rawMaterialsSchema
)

export const createRawMaterialFactory = async (
    props: Partial<RawMaterialD>
): Promise<RawMaterialD> => {
    const rawMaterial = new RawMaterialModel({
        name: props.name || 'Default Name',
        unitCost: props.unitCost || 0,
        supplier: props.supplier || 'Default Supplier',
    })
    const savedRawMaterial = await rawMaterial.save()
    return savedRawMaterial
}
