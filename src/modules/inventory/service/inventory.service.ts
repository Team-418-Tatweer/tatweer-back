import { InventoryD, InventoryModel } from '@models/inventory'
import inventoryLogs, { inventoryLogger } from './inventory.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class InventoryServices {
    static executeCreateInventory = async (
        inventoryData: Partial<InventoryI>
    ): Promise<ResponseT> => {
        try {
            const inventory = new InventoryModel(inventoryData)
            await inventory.save()

            const msg = formatString(inventoryLogs.INVENTORY_CREATED.message, {
                id: inventory._id,
            })
            inventoryLogger.info(msg)

            return new SuccessResponseC(
                inventoryLogs.INVENTORY_CREATED.type,
                inventory.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(
                inventoryLogs.INVENTORY_CREATION_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            inventoryLogger.error(msg, err as Error)
            return new ErrorResponseC(
                inventoryLogs.INVENTORY_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetInventories = async (): Promise<ResponseT> => {
        try {
            const inventories = await InventoryModel.find()
            return new SuccessResponseC(
                inventoryLogs.INVENTORIES_FOUND.type,
                inventories,
                inventoryLogs.INVENTORIES_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(inventoryLogs.INVENTORIES_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            inventoryLogger.error(msg, err as Error)
            return new ErrorResponseC(
                inventoryLogs.INVENTORIES_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetInventory = async (id: string): Promise<ResponseT> => {
        try {
            const inventory = await InventoryModel.findById(id)
            if (!inventory) {
                const msg = formatString(
                    inventoryLogs.INVENTORY_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                inventoryLogger.error(msg)
                return new ErrorResponseC(
                    inventoryLogs.INVENTORY_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(inventoryLogs.INVENTORY_FOUND.message, {
                id: inventory._id,
            })
            inventoryLogger.info(msg)
            return new SuccessResponseC(
                inventoryLogs.INVENTORY_FOUND.type,
                inventory.toObject(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(inventoryLogs.INVENTORIES_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            inventoryLogger.error(msg, err as Error)
            return new ErrorResponseC(
                inventoryLogs.INVENTORIES_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateInventory = async (
        id: string,
        inventoryData: Partial<InventoryI>
    ): Promise<ResponseT> => {
        try {
            const inventory = await InventoryModel.findByIdAndUpdate(
                id,
                inventoryData,
                {
                    new: true,
                }
            )
            if (!inventory) {
                const msg = formatString(
                    inventoryLogs.INVENTORY_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                inventoryLogger.error(msg)
                return new ErrorResponseC(
                    inventoryLogs.INVENTORY_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(inventoryLogs.INVENTORY_UPDATED.message, {
                id: inventory._id,
            })
            inventoryLogger.info(msg)
            return new SuccessResponseC(
                inventoryLogs.INVENTORY_UPDATED.type,
                inventory.toObject(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                inventoryLogs.INVENTORY_UPDATE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            inventoryLogger.error(msg, err as Error)
            return new ErrorResponseC(
                inventoryLogs.INVENTORY_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeDeleteInventory = async (id: string): Promise<ResponseT> => {
        try {
            const inventory = await InventoryModel.findByIdAndDelete(id)
            if (!inventory) {
                const msg = formatString(
                    inventoryLogs.INVENTORY_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                inventoryLogger.error(msg)
                return new ErrorResponseC(
                    inventoryLogs.INVENTORY_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(inventoryLogs.INVENTORY_DELETED.message, {
                id: inventory._id,
            })
            inventoryLogger.info(msg)
            return new SuccessResponseC(
                inventoryLogs.INVENTORY_DELETED.type,
                inventory.toObject(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                inventoryLogs.INVENTORY_DELETE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            inventoryLogger.error(msg, err as Error)
            return new ErrorResponseC(
                inventoryLogs.INVENTORY_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetInventoriesByItemID = async (
        itemID: string
    ): Promise<ResponseT> => {
        try {
            const inventories = await InventoryModel.find({
                itemID,
            })
            return new SuccessResponseC(
                inventoryLogs.INVENTORIES_BY_ITEM_ID_FOUND.type,
                inventories,
                formatString(
                    inventoryLogs.INVENTORIES_BY_ITEM_ID_FOUND.message,
                    {
                        itemID,
                    }
                ),
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                inventoryLogs.INVENTORIES_BY_ITEM_ID_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            inventoryLogger.error(msg, err as Error)
            return new ErrorResponseC(
                inventoryLogs.INVENTORIES_BY_ITEM_ID_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
