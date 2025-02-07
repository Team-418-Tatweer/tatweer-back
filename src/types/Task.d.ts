declare type TaskT = "check-in" | "other"
declare type TaskStatus = "pending" | "in-progress" | "completed" | "canceled"
declare interface TaskI {
    id: Types.ObjectId
    name: string
    description: string
    type: TaskT
    status: TaskStatus
    start_date: Date
    end_date: Date
    eventId: Types.ObjectId
}


