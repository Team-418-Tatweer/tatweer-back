import { Model, Schema, model, Document } from 'mongoose'
const required = true
export interface RegionD extends Document<RegionI>, RegionI {}

export interface RegionModel extends Model<RegionD> {
    findRegion(id: string): Promise<RegionI>
}
const regionsSchema = new Schema<RegionI>(
    {
        name: { type: String, required },
        designation: { type: String, required },
    },
    {
        timestamps: true,
    }
)

regionsSchema.set('toJSON', { virtuals: true })

export const RegionModel = model<RegionI, RegionModel>('Region', regionsSchema)

export const createRegionFactory = async (
    props: Partial<RegionD>
): Promise<RegionD> => {
    const region = new RegionModel({
        name: props.name || 'Default Name',
        designation: props.designation || 'Default Designation',
    })
    const savedRegion = await region.save()
    return savedRegion
}
