import { Document, model, Model, Schema } from 'mongoose'

export interface IntegrationD extends Document<IntegrationI>, IntegrationI {}

export interface IntegrationModel extends Model<IntegrationD> {}

const integrationSchema = new Schema<IntegrationI>(
    {
        isActive: { type: Boolean, default: false },
        name: { type: String, required: true },
        settings: { type: Schema.Types.Mixed },
    },
    {
        timestamps: true,
    }
)

export const IntegrationModel = model<IntegrationI, IntegrationModel>(
    'Integrations',
    integrationSchema
)
