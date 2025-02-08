import { Document, model, Model, Schema } from 'mongoose'
import { ProductModel } from './product'
import { WarehouseModel } from './warehouse'

export interface InventoryD extends Document<InventoryI>, InventoryI {}

export interface InventoryModel extends Model<InventoryD> {}

export const inventorySchema = new Schema<InventoryI>(
    {
        warehouse: {
            type: Schema.Types.ObjectId,
            ref: 'Warehouse',
            required: true,
        },
        recorderPoint: { type: Number, required: true },
        currentStock: { type: Number, required: true },
        safetyStock: { type: Number, required: true },
        itemType: {
            type: String,
            enum: ['Product', 'RawMaterial'],
            required: true,
        },
        itemID: {
            type: Schema.Types.ObjectId,
            refPath: 'itemType',
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

inventorySchema.pre('save', function (next) {
    if (this.currentStock + this.safetyStock < this.recorderPoint) {
        // launch an alert
    }

    if (this.currentStock < 0) {
        throw new Error('Current Stock cannot be negative')
    }

    if (this.safetyStock < 0) {
        throw new Error('Safety Stock cannot be negative')
    }
    next()
})

const updateProductInStock = async function (doc: InventoryD) {
    if (doc.itemType === 'Product') {
        const product = await ProductModel.findById(doc.itemID)
        if (product) {
            const inventories = await InventoryModel.find({
                itemType: 'Product',
                itemID: doc.itemID,
            })
            const totalStock = inventories.reduce((acc, inv) => {
                return acc + inv.currentStock + inv.safetyStock
            }, 0)
            product.inStock = totalStock
            await product.save()
        }
    }
}

inventorySchema.pre('save', async function (next) {
    const warehouse = await WarehouseModel.findById(this.warehouse)
    if (!warehouse) {
        throw new Error('Warehouse does not exist')
    }
    const inventories = await InventoryModel.find({ warehouse: this.warehouse })
    let totalStock = inventories.reduce((acc, inv) => {
        return acc + inv.currentStock + inv.safetyStock
    }, 0)
    if (this.isNew) {
        totalStock += this.currentStock + this.safetyStock
    }
    if (totalStock > warehouse.capacity) {
        throw new Error('Warehouse capacity exceeded')
    } else {
        warehouse.usedCapacity = totalStock
        await warehouse.save()
        next()
    }
})

inventorySchema.pre('findOneAndUpdate', async function (next) {
    const inventory = await InventoryModel.findById(this.getQuery()._id)
    if (!inventory) {
        throw new Error('Inventory not found')
    }
    const options = this.getUpdate() as Partial<InventoryI>
    const warehouse = await WarehouseModel.findById(inventory.warehouse)
    if (!warehouse) {
        throw new Error('Warehouse does not exist')
    }
    let totalStock = warehouse.usedCapacity
    if (typeof options.currentStock !== 'undefined') {
        totalStock = totalStock - inventory.currentStock + options.currentStock
    }
    if (typeof options.safetyStock !== 'undefined') {
        totalStock = totalStock - inventory.safetyStock + options.safetyStock
    }
    if (totalStock > warehouse.capacity) {
        throw new Error('Warehouse capacity exceeded')
    } else {
        warehouse.usedCapacity = totalStock
        await warehouse.save()
    }
    next()
})

inventorySchema.post('save', updateProductInStock)

inventorySchema.post('findOneAndUpdate', updateProductInStock)

export const InventoryModel = model<InventoryI, InventoryModel>(
    'Inventory',
    inventorySchema
)

export const createInventoryFactory = async (
    props: Partial<InventoryD>
): Promise<InventoryD> => {
    const inventory = new InventoryModel({
        warehouse: props.warehouse || 'Default Warehouse',
        recorderPoint: props.recorderPoint || 0,
        currentStock: props.currentStock || 0,
        safetyStock: props.safetyStock || 0,
        itemType: props.itemType || 'product',
    })
    const savedInventory = await inventory.save()
    return savedInventory
}
