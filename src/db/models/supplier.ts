import { Model, Schema, model, Document } from 'mongoose'
const required = true
export interface SupplierD extends Document<SupplierI>, SupplierI {}

export interface SupplierModel extends Model<SupplierD> {
    findSupplier(id: string): Promise<SupplierI>
}
const suppliersSchema = new Schema<SupplierI>(
    {
        name: { type: String, required },
        phone: { type: String, required },
        email: { type: String, required },
        address: { type: String, required },
        reliabilityScore: { type: Number, required, default: 0 },
    },
    {
        timestamps: true,
    }
)

suppliersSchema.set('toJSON', { virtuals: true })

export const SupplierModel = model<SupplierI, SupplierModel>(
    'Supplier',
    suppliersSchema
)

export const createSupplierFactory = async (
    props: Partial<SupplierD>
): Promise<SupplierD> => {
    const supplier = new SupplierModel({
        name: props.name || 'Default Name',
        phone: props.phone || 'Default Phone',
        email: props.email || 'Default Email',
        address: props.address || 'Default Address',
        reliabilityScore: props.reliabilityScore || 0,
    })
    const savedSupplier = await supplier.save()
    return savedSupplier
}
