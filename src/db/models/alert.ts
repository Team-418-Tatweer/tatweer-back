import { Model, Schema, model, Document } from 'mongoose'
const required = true
export interface AlertD extends Document<AlertI>, AlertI {}

export interface AlertModel extends Model<AlertI> {
    findAlert(id: string): Promise<AlertI>
}
const alertsSchema = new Schema<AlertI>(
    {
        title: { type: String, required },
        type: { type: String, required, enum: ['info', 'warning', 'error'] },
        severity: { type: String, required, enum: ['low', 'medium', 'high'] },
        description: { type: String, required },
        priority: { type: String, required, enum: ['low', 'medium', 'high'] },
        status: { type: String, required, enum: ['open', 'closed'] },
    },
    {
        timestamps: true,
    }
)

alertsSchema.set('toJSON', { virtuals: true })

export const AlertModel = model<AlertI, AlertModel>('Alert', alertsSchema)

export const createAlertFactory = async (
    props: Partial<AlertD>
): Promise<AlertI> => {
    const alert = new AlertModel({
        title: props.title || 'Default Title',
        type: props.type || 'Default Type',
        severity: props.severity || 'low',
        description: props.description || 'Default Description',
        status: props.status || 'open',
    })
    const savedAlert = await alert.save()
    return savedAlert
}
