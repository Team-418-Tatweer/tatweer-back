import { Model, Schema, model, Document } from 'mongoose'
const required = true
export interface ProductD extends Document<ProductI>, ProductI {}

export interface ProductModel extends Model<ProductD> {
    findProduct(id: string): Promise<ProductI>
}
const productsSchema = new Schema<ProductI>(
    {
        name: { type: String, required },
        category: { type: String, required },
        price: { type: Number, required },
        unit: { type: String, required },
    },
    {
        timestamps: true,
    }
)

productsSchema.set('toJSON', { virtuals: true })

export const ProductModel = model<ProductI, ProductModel>(
    'Product',
    productsSchema
)

export const createProductFactory = async (
    props: Partial<ProductD>
): Promise<ProductD> => {
    const product = new ProductModel({
        name: props.name || 'Default Name',
        category: props.category || 'Default Category',
        price: props.price || 0,
        unit: props.unit || 'Default Unit',
    })
    const savedProduct = await product.save()
    return savedProduct
}
