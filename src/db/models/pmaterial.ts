import { Model, Schema, model, Document } from 'mongoose'
const required = true
export interface ProductMaterialD
    extends Document<ProductMaterialI>,
        ProductMaterialI {}

export interface ProductMaterialModel extends Model<ProductMaterialD> {
    findProductMaterial(id: string): Promise<ProductMaterialI>
}
const productMaterialsSchema = new Schema<ProductMaterialI>(
    {
        product: { type: Schema.Types.ObjectId, ref: 'Product', required },
        material: {
            type: Schema.Types.ObjectId,
            ref: 'RawMaterial',
            required,
        },
        quantity: { type: Number, required },
    },

    {
        timestamps: true,
    }
)

productMaterialsSchema.set('toJSON', { virtuals: true })

export const ProductMaterialModel = model<ProductMaterialI, ProductMaterialModel>(
    'ProductMaterial',
    productMaterialsSchema
)

export const createProductMaterialFactory = async (
    props: Partial<ProductMaterialD>
): Promise<ProductMaterialD> => {
    const productMaterial = new ProductMaterialModel({
        product: props.product || 'Default Product',
        material: props.material || 'Default Material',
        quantity: props.quantity || 0,
    })
    const savedProductMaterial = await productMaterial.save()
    return savedProductMaterial
}
