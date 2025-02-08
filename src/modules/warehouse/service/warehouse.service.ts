import { WarehouseD, WarehouseModel } from '@models/warehouse'
import warehouseLogs, { warehouseLogger } from './warehouse.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class WarehouseServices {
    static executeCreateWarehouse = async (
        warehouseData: Omit<WarehouseI, '_id'>
    ): Promise<ResponseT> => {
        try {
            const warehouse = new WarehouseModel(warehouseData)
            await warehouse.save()

            const msg = formatString(warehouseLogs.WAREHOUSE_CREATED.message, {
                location: warehouse.location,
            })
            warehouseLogger.info(msg)

            return new SuccessResponseC(
                warehouseLogs.WAREHOUSE_CREATED.type,
                warehouse.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(
                warehouseLogs.WAREHOUSE_CREATION_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            warehouseLogger.error(msg, err as Error)
            return new ErrorResponseC(
                warehouseLogs.WAREHOUSE_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetWarehouses = async (): Promise<ResponseT> => {
        try {
            const warehouses = await WarehouseModel.find()
            return new SuccessResponseC(
                warehouseLogs.WAREHOUSES_FOUND.type,
                warehouses,
                warehouseLogs.WAREHOUSES_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(warehouseLogs.WAREHOUSES_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            warehouseLogger.error(msg, err as Error)
            return new ErrorResponseC(
                warehouseLogs.WAREHOUSES_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetWarehouse = async (id: string): Promise<ResponseT> => {
        try {
            const warehouse = await WarehouseModel.findById(id)
            if (!warehouse) {
                const msg = formatString(
                    warehouseLogs.WAREHOUSE_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                warehouseLogger.error(msg)
                return new ErrorResponseC(
                    warehouseLogs.WAREHOUSE_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(warehouseLogs.WAREHOUSE_FOUND.message, {
                location: warehouse.location,
            })
            warehouseLogger.info(msg)
            return new SuccessResponseC(
                warehouseLogs.WAREHOUSE_FOUND.type,
                warehouse.toObject(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                warehouseLogs.WAREHOUSE_CREATION_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            warehouseLogger.error(msg, err as Error)
            return new ErrorResponseC(
                warehouseLogs.WAREHOUSE_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateWarehouse = async (
        id: string,
        warehouseData: Partial<WarehouseD>
    ): Promise<ResponseT> => {
        try {
            const warehouse = await WarehouseModel.findByIdAndUpdate(
                id,
                warehouseData,
                {
                    new: true,
                }
            )
            if (!warehouse) {
                const msg = formatString(
                    warehouseLogs.WAREHOUSE_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                warehouseLogger.error(msg)
                return new ErrorResponseC(
                    warehouseLogs.WAREHOUSE_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(warehouseLogs.WAREHOUSE_UPDATED.message, {
                location: warehouse.location,
            })
            warehouseLogger.info(msg)
            return new SuccessResponseC(
                warehouseLogs.WAREHOUSE_UPDATED.type,
                warehouse.toObject(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                warehouseLogs.WAREHOUSE_UPDATE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            warehouseLogger.error(msg, err as Error)
            return new ErrorResponseC(
                warehouseLogs.WAREHOUSE_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeDeleteWarehouse = async (id: string): Promise<ResponseT> => {
        try {
            const warehouse = await WarehouseModel.findByIdAndDelete(id)
            if (!warehouse) {
                const msg = formatString(
                    warehouseLogs.WAREHOUSE_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                warehouseLogger.error(msg)
                return new ErrorResponseC(
                    warehouseLogs.WAREHOUSE_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(warehouseLogs.WAREHOUSE_DELETED.message, {
                location: warehouse.location,
            })
            warehouseLogger.info(msg)
            return new SuccessResponseC(
                warehouseLogs.WAREHOUSE_DELETED.type,
                warehouse.toObject(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                warehouseLogs.WAREHOUSE_DELETE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            warehouseLogger.error(msg, err as Error)
            return new ErrorResponseC(
                warehouseLogs.WAREHOUSE_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
