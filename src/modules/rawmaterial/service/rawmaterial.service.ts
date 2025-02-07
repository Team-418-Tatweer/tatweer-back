import { RawMaterialD, RawMaterialModel } from '@models/rawmaterial'
import rawMaterialLogs, { rawMaterialLogger } from './rawmaterial.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class RawMaterialServices {
    static executeCreateRawMaterial = async (
        rawMaterialData: Partial<RawMaterialD>
    ): Promise<ResponseT> => {
        try {
            const rawMaterial = new RawMaterialModel(rawMaterialData)
            await rawMaterial.save()

            const msg = formatString(
                rawMaterialLogs.RAW_MATERIAL_CREATED.message,
                {
                    name: rawMaterial.name,
                }
            )
            rawMaterialLogger.info(msg)

            return new SuccessResponseC(
                rawMaterialLogs.RAW_MATERIAL_CREATED.type,
                rawMaterial.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(
                rawMaterialLogs.RAW_MATERIAL_CREATION_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            rawMaterialLogger.error(msg, err as Error)
            return new ErrorResponseC(
                rawMaterialLogs.RAW_MATERIAL_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetRawMaterials = async (): Promise<ResponseT> => {
        try {
            const rawMaterials = await RawMaterialModel.find()
            return new SuccessResponseC(
                rawMaterialLogs.RAW_MATERIALS_FOUND.type,
                rawMaterials,
                rawMaterialLogs.RAW_MATERIALS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                rawMaterialLogs.RAW_MATERIALS_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            rawMaterialLogger.error(msg, err as Error)
            return new ErrorResponseC(
                rawMaterialLogs.RAW_MATERIALS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetRawMaterial = async (id: string): Promise<ResponseT> => {
        try {
            const rawMaterial = await RawMaterialModel.findById(id)

            if (!rawMaterial) {
                const msg = formatString(
                    rawMaterialLogs.RAW_MATERIAL_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                rawMaterialLogger.error(msg)
                return new ErrorResponseC(
                    rawMaterialLogs.RAW_MATERIAL_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }
            return new SuccessResponseC(
                rawMaterialLogs.RAW_MATERIAL_FOUND.type,
                rawMaterial,
                rawMaterialLogs.RAW_MATERIAL_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                rawMaterialLogs.RAW_MATERIALS_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            rawMaterialLogger.error(msg, err as Error)
            return new ErrorResponseC(
                rawMaterialLogs.RAW_MATERIALS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetRawMaterialBySupplier = async (
        supplierId: string
    ): Promise<ResponseT> => {
        try {
            const rawMaterials = await RawMaterialModel.find({
                supplier: supplierId,
            })
            return new SuccessResponseC(
                rawMaterialLogs.RAW_MATERIALS_FOUND.type,
                rawMaterials,
                rawMaterialLogs.RAW_MATERIALS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                rawMaterialLogs.RAW_MATERIALS_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            rawMaterialLogger.error(msg, err as Error)
            return new ErrorResponseC(
                rawMaterialLogs.RAW_MATERIALS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateRawMaterial = async (
        id: string,
        rawMaterialData: Partial<RawMaterialD>
    ): Promise<ResponseT> => {
        try {
            const rawMaterial = await RawMaterialModel.findById(id)
            if (!rawMaterial) {
                const msg = formatString(
                    rawMaterialLogs.RAW_MATERIAL_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                rawMaterialLogger.error(msg)
                return new ErrorResponseC(
                    rawMaterialLogs.RAW_MATERIAL_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            await rawMaterial.updateOne(rawMaterialData)

            const msg = formatString(
                rawMaterialLogs.RAW_MATERIAL_UPDATED.message,
                {
                    name: rawMaterial.name,
                }
            )
            rawMaterialLogger.info(msg)

            return new SuccessResponseC(
                rawMaterialLogs.RAW_MATERIAL_UPDATED.type,
                rawMaterial,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                rawMaterialLogs.RAW_MATERIAL_UPDATE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            rawMaterialLogger.error(msg, err as Error)
            return new ErrorResponseC(
                rawMaterialLogs.RAW_MATERIAL_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeDeleteRawMaterial = async (
        id: string
    ): Promise<ResponseT> => {
        try {
            const rawMaterial = await RawMaterialModel.findByIdAndDelete(id)
            if (!rawMaterial) {
                const msg = formatString(
                    rawMaterialLogs.RAW_MATERIAL_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                rawMaterialLogger.error(msg)
                return new ErrorResponseC(
                    rawMaterialLogs.RAW_MATERIAL_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(
                rawMaterialLogs.RAW_MATERIAL_DELETED.message,
                {
                    name: rawMaterial.name,
                }
            )
            rawMaterialLogger.info(msg)

            return new SuccessResponseC(
                rawMaterialLogs.RAW_MATERIAL_DELETED.type,
                rawMaterial,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                rawMaterialLogs.RAW_MATERIAL_DELETE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            rawMaterialLogger.error(msg, err as Error)
            return new ErrorResponseC(
                rawMaterialLogs.RAW_MATERIAL_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
