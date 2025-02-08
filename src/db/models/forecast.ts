import { ForecastI } from '@myTypes/Forecast'
import { Model, Schema, model, Document } from 'mongoose'
const required = true
export interface ForecastD extends Document<ForecastI>, ForecastI {}

export interface ForecastModel extends Model<ForecastI> {
    findForecast(id: string): Promise<ForecastI>
}
const forecastsSchema = new Schema<ForecastI>(
    {
        type: { type: String, required },
        targetEntity: {
            type: String,
            required,
            enum: ['Product', 'Warehouse', 'Supplier', 'Market'],
        },
        targetID: {
            type: Schema.Types.ObjectId,
            required,
            refPath: 'TargetEntity',
        },
        forecastedValue: { type: Number, required },
        confidenceLevel: { type: Number, required },
        timePeriod: { type: String, required },
        dateGenerated: { type: Date, required },
        status: {
            type: String,
            required,
            enum: ['PENDING', 'VALIDATED', 'OBSOLETE'],
        },
    },
    {
        timestamps: true,
    }
)

forecastsSchema.set('toJSON', { virtuals: true })

export const ForecastModel = model<ForecastI, ForecastModel>(
    'Forecast',
    forecastsSchema
)

export const createForecastFactory = async (
    props: Partial<ForecastD>
): Promise<ForecastI> => {
    const forecast = new ForecastModel({
        type: props.type,
        targetEntity: props.targetEntity,
        targetID: props.targetID,
        forecastedValue: props.forecastedValue,
        confidenceLevel: props.confidenceLevel,
        timePeriod: props.timePeriod,
        dateGenerated: props.dateGenerated,
        status: props.status,
    })
    const savedForecast = await forecast.save()
    return savedForecast
}
