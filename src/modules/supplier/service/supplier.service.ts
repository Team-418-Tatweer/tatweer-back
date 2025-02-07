import { SupplierD, SupplierModel } from '@models/supplier'
import supplierLogs, { supplierLogger } from './supplier.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class SupplierServices {
    static executeCreateSupplier = async (
        supplierData: Partial<SupplierD>
    ): Promise<ResponseT> => {
        try {
            const supplier = new SupplierModel(supplierData)
            await supplier.save()

            const msg = formatString(supplierLogs.SUPPLIER_CREATED.message, {
                name: supplier.name,
            })
            supplierLogger.info(msg)

            return new SuccessResponseC(
                supplierLogs.SUPPLIER_CREATED.type,
                supplier.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(
                supplierLogs.SUPPLIER_CREATION_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            supplierLogger.error(msg, err as Error)
            return new ErrorResponseC(
                supplierLogs.SUPPLIER_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetSuppliers = async (): Promise<ResponseT> => {
        try {
            const suppliers = await SupplierModel.find()
            return new SuccessResponseC(
                supplierLogs.SUPPLIERS_FOUND.type,
                suppliers,
                supplierLogs.SUPPLIERS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(supplierLogs.SUPPLIERS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            supplierLogger.error(msg, err as Error)
            return new ErrorResponseC(
                supplierLogs.SUPPLIERS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetSupplier = async (id: string): Promise<ResponseT> => {
        try {
            const supplier = await SupplierModel.findById(id)
            if (!supplier) {
                const msg = formatString(
                    supplierLogs.SUPPLIER_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                supplierLogger.error(msg)
                return new ErrorResponseC(
                    supplierLogs.SUPPLIER_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(supplierLogs.SUPPLIER_FOUND.message, {
                name: supplier.name,
            })
            supplierLogger.info(msg)
            return new SuccessResponseC(
                supplierLogs.SUPPLIER_FOUND.type,
                supplier.toObject(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                supplierLogs.SUPPLIER_CREATION_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            supplierLogger.error(msg, err as Error)
            return new ErrorResponseC(
                supplierLogs.SUPPLIER_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateSupplier = async (
        id: string,
        supplierData: Partial<SupplierD>
    ): Promise<ResponseT> => {
        try {
            const supplier = await SupplierModel.findByIdAndUpdate(
                id,
                supplierData,
                {
                    new: true,
                }
            )
            if (!supplier) {
                const msg = formatString(
                    supplierLogs.SUPPLIER_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                supplierLogger.error(msg)
                return new ErrorResponseC(
                    supplierLogs.SUPPLIER_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(supplierLogs.SUPPLIER_UPDATED.message, {
                name: supplier.name,
            })
            supplierLogger.info(msg)
            return new SuccessResponseC(
                supplierLogs.SUPPLIER_UPDATED.type,
                supplier.toObject(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                supplierLogs.SUPPLIER_UPDATE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            supplierLogger.error(msg, err as Error)
            return new ErrorResponseC(
                supplierLogs.SUPPLIER_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeDeleteSupplier = async (id: string): Promise<ResponseT> => {
        try {
            const supplier = await SupplierModel.findByIdAndDelete(id)
            if (!supplier) {
                const msg = formatString(
                    supplierLogs.SUPPLIER_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                supplierLogger.error(msg)
                return new ErrorResponseC(
                    supplierLogs.SUPPLIER_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(supplierLogs.SUPPLIER_DELETED.message, {
                name: supplier.name,
            })
            supplierLogger.info(msg)
            return new SuccessResponseC(
                supplierLogs.SUPPLIER_DELETED.type,
                supplier.toObject(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                supplierLogs.SUPPLIER_DELETE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            supplierLogger.error(msg, err as Error)
            return new ErrorResponseC(
                supplierLogs.SUPPLIER_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetSuppliersByReliability = async (
        score: number
    ): Promise<ResponseT> => {
        try {
            const suppliers = await SupplierModel.find({
                reliabilityScore: { $gte: score },
            })
            return new SuccessResponseC(
                supplierLogs.SUPPLIERS_BY_RELIABILITY_FOUND.type,
                suppliers,
                formatString(
                    supplierLogs.SUPPLIERS_BY_RELIABILITY_FOUND.message,
                    {
                        score,
                    }
                ),
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                supplierLogs.SUPPLIERS_BY_RELIABILITY_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            supplierLogger.error(msg, err as Error)
            return new ErrorResponseC(
                supplierLogs.SUPPLIERS_BY_RELIABILITY_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
