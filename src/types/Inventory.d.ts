declare interface InventoryI {
    warehouse: Types.ObjectId
    itemType: 'Product' | 'RawMaterial'
    itemID: Types.ObjectId
    currentStock: number
    recorderPoint: number
    safetyStock: number
}
