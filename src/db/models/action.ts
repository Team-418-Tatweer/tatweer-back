import { Model, Schema, model, Document } from 'mongoose'
const required = true
export interface ActionD extends Document<ActionI>, ActionI {}

export interface ActionModel extends Model<ActionI> {
    findAction(id: string): Promise<ActionI>
}
const actionsSchema = new Schema<ActionI>(
    {
        title: { type: String, required },
        alert: { type: Schema.Types.ObjectId, ref: 'Alert', required },
        type: { type: String, required },
        description: { type: String, required },
        responsibleTeam: { type: String, required },
        status: {
            type: String,
            required,
            enum: ['pending', 'validated', 'completed'],
        },
        completedAt: { type: Date },
    },
    {
        timestamps: true,
    }
)

actionsSchema.set('toJSON', { virtuals: true })

export const ActionModel = model<ActionI, ActionModel>('Action', actionsSchema)

export const createActionFactory = async (
    props: Partial<ActionD>
): Promise<ActionI> => {
    const action = new ActionModel({
        title: props.title || 'Default Title',
        alert: props.alert || 'Default Alert',
        type: props.type || 'Default Type',
        description: props.description || 'Default Description',
        responsibleTeam: props.responsibleTeam || 'Default Team',
        status: props.status || 'pending',
    })
    const savedAction = await action.save()
    return savedAction
}
