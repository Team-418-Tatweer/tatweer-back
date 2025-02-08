import { InventoryMovementD, InventoryMovementModel } from '@models/imovement'
import inventoryMovementLogs, {
    inventoryMovementLogger,
} from './imovement.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class InventoryMovementServices {
    static executeCreateMovement = async (
        movementData: Partial<InventoryMovementD>
    ): Promise<ResponseT> => {
        try {
            const movement = new InventoryMovementModel(movementData)
            await movement.save()

            const msg = formatString(
                inventoryMovementLogs.MOVEMENT_CREATED.message,
                {
                    id: movement._id,
                }
            )
            inventoryMovementLogger.info(msg)

            return new SuccessResponseC(
                inventoryMovementLogs.MOVEMENT_CREATED.type,
                movement.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(
                inventoryMovementLogs.MOVEMENT_CREATION_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            inventoryMovementLogger.error(msg, err as Error)
            return new ErrorResponseC(
                inventoryMovementLogs.MOVEMENT_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetMovements = async (): Promise<ResponseT> => {
        try {
            const movements = await InventoryMovementModel.find()
                .populate('Srcinventory')
                .sort({ createdAt: -1 })

            return new SuccessResponseC(
                inventoryMovementLogs.MOVEMENTS_FOUND.type,
                movements,
                inventoryMovementLogs.MOVEMENTS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                inventoryMovementLogs.MOVEMENTS_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            inventoryMovementLogger.error(msg, err as Error)
            return new ErrorResponseC(
                inventoryMovementLogs.MOVEMENTS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetMovement = async (id: string): Promise<ResponseT> => {
        try {
            const movement = await InventoryMovementModel.findById(id)
                .populate('supplier')
                .populate('Srcinventory')
                .populate('Dstinventory')

            if (!movement) {
                const msg = formatString(
                    inventoryMovementLogs.MOVEMENT_NOT_FOUND.message,
                    { id }
                )
                inventoryMovementLogger.error(msg)
                return new ErrorResponseC(
                    inventoryMovementLogs.MOVEMENT_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            return new SuccessResponseC(
                inventoryMovementLogs.MOVEMENT_FOUND.type,
                movement,
                formatString(inventoryMovementLogs.MOVEMENT_FOUND.message, {
                    id,
                }),
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                inventoryMovementLogs.MOVEMENTS_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            inventoryMovementLogger.error(msg, err as Error)
            return new ErrorResponseC(
                inventoryMovementLogs.MOVEMENTS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetMovementsByStatus = async (
        status: string
    ): Promise<ResponseT> => {
        try {
            const movements = await InventoryMovementModel.find({ status })
                .populate('inventory')
                .sort({ createdAt: -1 })

            if (!movements.length) {
                const msg = formatString(
                    inventoryMovementLogs.MOVEMENTS_BY_STATUS_ERROR.message,
                    { status }
                )
                return new ErrorResponseC(
                    inventoryMovementLogs.MOVEMENTS_BY_STATUS_ERROR.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            return new SuccessResponseC(
                inventoryMovementLogs.MOVEMENTS_BY_STATUS_FOUND.type,
                movements,
                formatString(
                    inventoryMovementLogs.MOVEMENTS_BY_STATUS_FOUND.message,
                    { status }
                ),
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                inventoryMovementLogs.MOVEMENTS_BY_STATUS_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            inventoryMovementLogger.error(msg, err as Error)
            return new ErrorResponseC(
                inventoryMovementLogs.MOVEMENTS_BY_STATUS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetMovementsByInventory = async (
        inventoryId: string
    ): Promise<ResponseT> => {
        try {
            const movements = await InventoryMovementModel.find({
                Srcinventory: inventoryId,
            })
                .populate('inventory')
                .sort({ createdAt: -1 })

            if (!movements.length) {
                const msg = formatString(
                    inventoryMovementLogs.MOVEMENTS_BY_INVENTORY_ERROR.message,
                    { inventoryId }
                )
                return new ErrorResponseC(
                    inventoryMovementLogs.MOVEMENTS_BY_INVENTORY_ERROR.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            return new SuccessResponseC(
                inventoryMovementLogs.MOVEMENTS_BY_INVENTORY_FOUND.type,
                movements,
                formatString(
                    inventoryMovementLogs.MOVEMENTS_BY_INVENTORY_FOUND.message,
                    { inventoryId }
                ),
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                inventoryMovementLogs.MOVEMENTS_BY_INVENTORY_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            inventoryMovementLogger.error(msg, err as Error)
            return new ErrorResponseC(
                inventoryMovementLogs.MOVEMENTS_BY_INVENTORY_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateMovement = async (
        movementId: string,
        updates: Partial<InventoryMovementD>
    ): Promise<ResponseT> => {
        try {
            const movement = await InventoryMovementModel.findByIdAndUpdate(
                movementId,
                updates,
                { new: true }
            ).populate('inventory')

            if (!movement) {
                const msg = formatString(
                    inventoryMovementLogs.MOVEMENT_NOT_FOUND.message,
                    { id: movementId }
                )
                return new ErrorResponseC(
                    inventoryMovementLogs.MOVEMENT_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            return new SuccessResponseC(
                inventoryMovementLogs.MOVEMENT_UPDATED.type,
                movement,
                formatString(inventoryMovementLogs.MOVEMENT_UPDATED.message, {
                    id: movementId,
                }),
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                inventoryMovementLogs.MOVEMENT_UPDATE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            inventoryMovementLogger.error(msg, err as Error)
            return new ErrorResponseC(
                inventoryMovementLogs.MOVEMENT_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeDeleteMovement = async (
        movementId: string
    ): Promise<ResponseT> => {
        try {
            const movement =
                await InventoryMovementModel.findByIdAndDelete(movementId)

            if (!movement) {
                const msg = formatString(
                    inventoryMovementLogs.MOVEMENT_NOT_FOUND.message,
                    { id: movementId }
                )
                return new ErrorResponseC(
                    inventoryMovementLogs.MOVEMENT_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            return new SuccessResponseC(
                inventoryMovementLogs.MOVEMENT_DELETED.type,
                movement,
                formatString(inventoryMovementLogs.MOVEMENT_DELETED.message, {
                    id: movementId,
                }),
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                inventoryMovementLogs.MOVEMENT_DELETE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            inventoryMovementLogger.error(msg, err as Error)
            return new ErrorResponseC(
                inventoryMovementLogs.MOVEMENT_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
