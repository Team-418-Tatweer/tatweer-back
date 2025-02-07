import { ProductD, ProductModel } from '@db/models/product'
import productLogs, { productLogger } from './product.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class ProductServices {
    static executeCreateProduct = async (
        productData: Partial<ProductD>
    ): Promise<ResponseT> => {
        try {
            const product = new ProductModel(productData)
            await product.save()

            const msg = formatString(productLogs.PRODUCT_CREATED.message, {
                name: product.name,
            })
            productLogger.info(msg)

            return new SuccessResponseC(
                productLogs.PRODUCT_CREATED.type,
                product.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(
                productLogs.PRODUCT_CREATION_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            productLogger.error(msg, err as Error)
            return new ErrorResponseC(
                productLogs.PRODUCT_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetProducts = async (): Promise<ResponseT> => {
        try {
            const products = await ProductModel.find()
            return new SuccessResponseC(
                productLogs.PRODUCTS_FOUND.type,
                products,
                productLogs.PRODUCTS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(productLogs.PRODUCTS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            productLogger.error(msg, err as Error)
            return new ErrorResponseC(
                productLogs.PRODUCTS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetProduct = async (
        productId: string
    ): Promise<ResponseT> => {
        try {
            const product = await ProductModel.findById(productId)
            if (!product) {
                const msg = formatString(
                    productLogs.PRODUCT_NOT_FOUND.message,
                    { id: productId }
                )
                return new ErrorResponseC(
                    productLogs.PRODUCT_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(productLogs.PRODUCT_FOUND.message, {
                name: product.name,
            })
            return new SuccessResponseC(
                productLogs.PRODUCT_FOUND.type,
                product,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(productLogs.PRODUCTS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            productLogger.error(msg, err as Error)
            return new ErrorResponseC(
                productLogs.PRODUCTS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateProduct = async (
        productId: string,
        updates: Partial<ProductD>
    ): Promise<ResponseT> => {
        try {
            const product = await ProductModel.findByIdAndUpdate(
                productId,
                updates,
                { new: true }
            )
            if (!product) {
                const msg = formatString(
                    productLogs.PRODUCT_NOT_FOUND.message,
                    { id: productId }
                )
                return new ErrorResponseC(
                    productLogs.PRODUCT_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(productLogs.PRODUCT_UPDATED.message, {
                name: product.name,
            })
            return new SuccessResponseC(
                productLogs.PRODUCT_UPDATED.type,
                product,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(productLogs.PRODUCT_UPDATE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            productLogger.error(msg, err as Error)
            return new ErrorResponseC(
                productLogs.PRODUCT_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeDeleteProduct = async (
        productId: string
    ): Promise<ResponseT> => {
        try {
            const product = await ProductModel.findByIdAndDelete(productId)
            if (!product) {
                const msg = formatString(
                    productLogs.PRODUCT_NOT_FOUND.message,
                    { id: productId }
                )
                return new ErrorResponseC(
                    productLogs.PRODUCT_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(productLogs.PRODUCT_DELETED.message, {
                name: product.name,
            })
            return new SuccessResponseC(
                productLogs.PRODUCT_DELETED.type,
                product,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(productLogs.PRODUCT_DELETE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            productLogger.error(msg, err as Error)
            return new ErrorResponseC(
                productLogs.PRODUCT_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetProductsByCategory = async (
        category: string
    ): Promise<ResponseT> => {
        try {
            const products = await ProductModel.find({ category })
            const msg = formatString(
                productLogs.PRODUCTS_BY_CATEGORY_FOUND.message,
                { category }
            )
            return new SuccessResponseC(
                productLogs.PRODUCTS_BY_CATEGORY_FOUND.type,
                products,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                productLogs.PRODUCTS_BY_CATEGORY_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            productLogger.error(msg, err as Error)
            return new ErrorResponseC(
                productLogs.PRODUCTS_BY_CATEGORY_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateProductPrice = async (
        productId: string,
        price: number
    ): Promise<ResponseT> => {
        try {
            const product = await ProductModel.findByIdAndUpdate(
                productId,
                { price },
                { new: true }
            )
            if (!product) {
                const msg = formatString(
                    productLogs.PRODUCT_NOT_FOUND.message,
                    { id: productId }
                )
                return new ErrorResponseC(
                    productLogs.PRODUCT_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(
                productLogs.PRODUCT_PRICE_UPDATED.message,
                { name: product.name }
            )
            return new SuccessResponseC(
                productLogs.PRODUCT_PRICE_UPDATED.type,
                product,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                productLogs.PRODUCT_PRICE_UPDATE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            productLogger.error(msg, err as Error)
            return new ErrorResponseC(
                productLogs.PRODUCT_PRICE_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
