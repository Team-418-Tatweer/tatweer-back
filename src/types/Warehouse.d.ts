declare interface WarehouseI {
    region: Types.ObjectId
    location: string
    capacity: number
    usedCapacity: number
    recorderPoint: number
}
