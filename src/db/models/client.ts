import { Model, Schema, model, Document } from 'mongoose'
const required = true
export interface ClientD extends Document<ClientI>, ClientI {}

export interface ClientModel extends Model<ClientD> {
    findClient(id: string): Promise<ClientI>
}
const clientsSchema = new Schema<ClientI>(
    {
        name: { type: String, required },
        email: { type: String, required },
        phone: { type: String, required },
        address: { type: String, required },
    },
    {
        timestamps: true,
    }
)

clientsSchema.set('toJSON', { virtuals: true })

export const ClientModel = model<ClientI, ClientModel>('Clients', clientsSchema)

export const createClientFactory = async (
    props: Partial<ClientD>
): Promise<ClientD> => {
    const client = new ClientModel({
        name: props.name || 'Default Name',
        email: props.email || 'Default Email',
        phone: props.phone || 'Default Phone',
        address: props.address || 'Default Address',
    })
    const savedClient = await client.save()
    return savedClient
}
