declare interface InventoryMovementI {
    supplier?: Types.ObjectId
    orderDate: Date
    deliveryDate: Date
    quantity: number
    costPerUnit: number
    status: string
    Srcinventory: Types.ObjectId
    Dstinventory?: Types.ObjectId
}
