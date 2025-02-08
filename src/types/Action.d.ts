declare interface ActionI {
    title: string
    alert: Types.ObjectId
    type: string
    description: string
    responsibleTeam: string
    status: string
    completedAt: Date
}
