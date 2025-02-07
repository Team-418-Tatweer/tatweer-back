import { RegionD, RegionModel } from '@models/region'
import regionLogs, { regionLogger } from './region.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class RegionServices {
    static executeCreateRegion = async (
        regionData: Partial<RegionD>
    ): Promise<ResponseT> => {
        try {
            const region = new RegionModel(regionData)
            await region.save()

            const msg = formatString(regionLogs.REGION_CREATED.message, {
                name: region.name,
            })
            regionLogger.info(msg)

            return new SuccessResponseC(
                regionLogs.REGION_CREATED.type,
                region.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(regionLogs.REGION_CREATION_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            regionLogger.error(msg, err as Error)
            return new ErrorResponseC(
                regionLogs.REGION_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetRegions = async (): Promise<ResponseT> => {
        try {
            const regions = await RegionModel.find()
            return new SuccessResponseC(
                regionLogs.REGIONS_FOUND.type,
                regions,
                regionLogs.REGIONS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(regionLogs.REGIONS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            regionLogger.error(msg, err as Error)
            return new ErrorResponseC(
                regionLogs.REGIONS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetRegion = async (id: string): Promise<ResponseT> => {
        try {
            const region = await RegionModel.findRegion(id)
            if (!region) {
                const msg = formatString(regionLogs.REGION_NOT_FOUND.message, {
                    id,
                })
                regionLogger.error(msg)
                return new ErrorResponseC(
                    regionLogs.REGION_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            return new SuccessResponseC(
                regionLogs.REGION_FOUND.type,
                region,
                regionLogs.REGION_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(regionLogs.REGIONS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            regionLogger.error(msg, err as Error)
            return new ErrorResponseC(
                regionLogs.REGIONS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateRegion = async (
        id: string,
        regionData: Partial<RegionD>
    ): Promise<ResponseT> => {
        try {
            const region = await RegionModel.findByIdAndUpdate(id, regionData, {
                new: true,
            })
            if (!region) {
                const msg = formatString(regionLogs.REGION_NOT_FOUND.message, {
                    id,
                })
                regionLogger.error(msg)
                return new ErrorResponseC(
                    regionLogs.REGION_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(regionLogs.REGION_UPDATED.message, {
                name: region.name,
            })
            regionLogger.info(msg)

            return new SuccessResponseC(
                regionLogs.REGION_UPDATED.type,
                region,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(regionLogs.REGION_UPDATE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            regionLogger.error(msg, err as Error)
            return new ErrorResponseC(
                regionLogs.REGION_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeDeleteRegion = async (id: string): Promise<ResponseT> => {
        try {
            const region = await RegionModel.findByIdAndDelete(id)
            if (!region) {
                const msg = formatString(regionLogs.REGION_NOT_FOUND.message, {
                    id,
                })
                regionLogger.error(msg)
                return new ErrorResponseC(
                    regionLogs.REGION_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(regionLogs.REGION_DELETED.message, {
                name: region.name,
            })
            regionLogger.info(msg)

            return new SuccessResponseC(
                regionLogs.REGION_DELETED.type,
                region,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(regionLogs.REGION_DELETE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            regionLogger.error(msg, err as Error)
            return new ErrorResponseC(
                regionLogs.REGION_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
