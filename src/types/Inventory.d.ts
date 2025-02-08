declare interface InventoryI {
    warehouse: Types.ObjectId
    itemType: 'product' | 'material'
    itemID: Types.ObjectId
    currentStock: number
    recorderPoint: number
    safetyStock: number
}
