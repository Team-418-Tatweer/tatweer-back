import { ProductMaterialD, ProductMaterialModel } from '@models/pmaterial'
import pmaterialLogs, { pmaterialLogger } from './pmaterial.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class PmaterialServices {
    static executeCreatePmaterial = async (
        pmaterialData: Partial<ProductMaterialD>
    ): Promise<ResponseT> => {
        try {
            const pmaterial = new ProductMaterialModel(pmaterialData)
            await pmaterial.save()

            const msg = formatString(pmaterialLogs.PMATERIAL_CREATED.message, {
                name: pmaterial.id,
            })
            pmaterialLogger.info(msg)

            return new SuccessResponseC(
                pmaterialLogs.PMATERIAL_CREATED.type,
                pmaterial.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(
                pmaterialLogs.PMATERIAL_CREATION_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            pmaterialLogger.error(msg, err as Error)
            return new ErrorResponseC(
                pmaterialLogs.PMATERIAL_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetPmaterials = async (): Promise<ResponseT> => {
        try {
            const pmaterials = await ProductMaterialModel.find()
            return new SuccessResponseC(
                pmaterialLogs.PMATERIALS_FOUND.type,
                pmaterials,
                pmaterialLogs.PMATERIALS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(pmaterialLogs.PMATERIALS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            pmaterialLogger.error(msg, err as Error)
            return new ErrorResponseC(
                pmaterialLogs.PMATERIALS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetPmaterial = async (id: string): Promise<ResponseT> => {
        try {
            const pmaterial = await ProductMaterialModel.findById(id)
            if (!pmaterial) {
                const msg = formatString(
                    pmaterialLogs.PMATERIAL_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                pmaterialLogger.error(msg)
                return new ErrorResponseC(
                    pmaterialLogs.PMATERIAL_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }
            return new SuccessResponseC(
                pmaterialLogs.PMATERIAL_FOUND.type,
                pmaterial,
                pmaterialLogs.PMATERIAL_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(pmaterialLogs.PMATERIALS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            pmaterialLogger.error(msg, err as Error)
            return new ErrorResponseC(
                pmaterialLogs.PMATERIALS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdatePmaterial = async (
        id: string,
        pmaterialData: Partial<ProductMaterialD>
    ): Promise<ResponseT> => {
        try {
            const pmaterial = await ProductMaterialModel.findByIdAndUpdate(
                id,
                pmaterialData,
                {
                    new: true,
                }
            )
            if (!pmaterial) {
                const msg = formatString(
                    pmaterialLogs.PMATERIAL_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                pmaterialLogger.error(msg)
                return new ErrorResponseC(
                    pmaterialLogs.PMATERIAL_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(pmaterialLogs.PMATERIAL_UPDATED.message, {
                id,
            })
            pmaterialLogger.info(msg)

            return new SuccessResponseC(
                pmaterialLogs.PMATERIAL_UPDATED.type,
                pmaterial,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                pmaterialLogs.PMATERIAL_UPDATE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            pmaterialLogger.error(msg, err as Error)
            return new ErrorResponseC(
                pmaterialLogs.PMATERIAL_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeDeletePmaterial = async (id: string): Promise<ResponseT> => {
        try {
            const pmaterial = await ProductMaterialModel.findByIdAndDelete(id)
            if (!pmaterial) {
                const msg = formatString(
                    pmaterialLogs.PMATERIAL_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                pmaterialLogger.error(msg)
                return new ErrorResponseC(
                    pmaterialLogs.PMATERIAL_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(pmaterialLogs.PMATERIAL_DELETED.message, {
                id,
            })
            pmaterialLogger.info(msg)

            return new SuccessResponseC(
                pmaterialLogs.PMATERIAL_DELETED.type,
                pmaterial,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                pmaterialLogs.PMATERIAL_DELETE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            pmaterialLogger.error(msg, err as Error)
            return new ErrorResponseC(
                pmaterialLogs.PMATERIAL_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetPmaterialsByProduct = async (
        productId: string
    ): Promise<ResponseT> => {
        try {
            const pmaterials = await ProductMaterialModel.find({
                product: productId,
            })
            return new SuccessResponseC(
                pmaterialLogs.PMATERIALS_FOUND.type,
                pmaterials,
                pmaterialLogs.PMATERIALS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                pmaterialLogs.PMATERIALS_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            pmaterialLogger.error(msg, err as Error)
            return new ErrorResponseC(
                pmaterialLogs.PMATERIALS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetPmaterialsByMaterial = async (
        materialId: string
    ): Promise<ResponseT> => {
        try {
            const pmaterials = await ProductMaterialModel.find({
                material: materialId,
            })
            return new SuccessResponseC(
                pmaterialLogs.PMATERIALS_FOUND.type,
                pmaterials,
                pmaterialLogs.PMATERIALS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                pmaterialLogs.PMATERIALS_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            pmaterialLogger.error(msg, err as Error)
            return new ErrorResponseC(
                pmaterialLogs.PMATERIALS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
