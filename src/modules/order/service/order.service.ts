import { OrderD, OrderModel } from '@models/order'
import orderLogs, { orderLogger } from './order.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class OrderServices {
    static executeCreateOrder = async (
        orderData: Partial<OrderD>
    ): Promise<ResponseT> => {
        try {
            const order = new OrderModel(orderData)
            await order.save()

            const msg = formatString(orderLogs.ORDER_CREATED.message, {
                clientId: order.client.toString(),
            })
            orderLogger.info(msg)

            return new SuccessResponseC(
                orderLogs.ORDER_CREATED.type,
                order.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(orderLogs.ORDER_CREATION_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            orderLogger.error(msg, err as Error)
            return new ErrorResponseC(
                orderLogs.ORDER_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetOrders = async (): Promise<ResponseT> => {
        try {
            const orders = await OrderModel.find()
                .populate('orderItems.product')
                .populate('client')
                .populate('region')
            return new SuccessResponseC(
                orderLogs.ORDERS_FOUND.type,
                orders,
                orderLogs.ORDERS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(orderLogs.ORDERS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            orderLogger.error(msg, err as Error)
            return new ErrorResponseC(
                orderLogs.ORDERS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetOrder = async (id: string): Promise<ResponseT> => {
        try {
            const order = await OrderModel.findById(id)
                .populate('orderItems.product')
                .populate('client')
                .populate('region')

            if (!order) {
                const msg = formatString(orderLogs.ORDER_NOT_FOUND.message, {
                    id,
                })
                orderLogger.error(msg)
                return new ErrorResponseC(
                    orderLogs.ORDER_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            return new SuccessResponseC(
                orderLogs.ORDER_FOUND.type,
                order,
                orderLogs.ORDER_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(orderLogs.ORDERS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            orderLogger.error(msg, err as Error)
            return new ErrorResponseC(
                orderLogs.ORDERS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetClientOrders = async (
        clientId: string
    ): Promise<ResponseT> => {
        try {
            const orders = await OrderModel.find({ client: clientId })
                .populate('orderItems.product')
                .populate('client')
                .populate('region')

            if (!orders.length) {
                const msg = formatString(
                    orderLogs.ORDERS_BY_CLIENT_ERROR.message,
                    {
                        clientId,
                    }
                )
                orderLogger.error(msg)
                return new ErrorResponseC(
                    orderLogs.ORDERS_BY_CLIENT_ERROR.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            return new SuccessResponseC(
                orderLogs.ORDERS_BY_CLIENT_FOUND.type,
                orders,
                orderLogs.ORDERS_BY_CLIENT_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(orderLogs.ORDERS_BY_CLIENT_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            orderLogger.error(msg, err as Error)
            return new ErrorResponseC(
                orderLogs.ORDERS_BY_CLIENT_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetRegionOrders = async (
        regionId: string
    ): Promise<ResponseT> => {
        try {
            const orders = await OrderModel.find({ region: regionId })
                .populate('orderItems.product')
                .populate('client')
                .populate('region')

            if (!orders.length) {
                const msg = formatString(
                    orderLogs.ORDERS_BY_REGION_ERROR.message,
                    {
                        regionId,
                    }
                )
                orderLogger.error(msg)
                return new ErrorResponseC(
                    orderLogs.ORDERS_BY_REGION_ERROR.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            return new SuccessResponseC(
                orderLogs.ORDERS_BY_REGION_FOUND.type,
                orders,
                orderLogs.ORDERS_BY_REGION_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(orderLogs.ORDERS_BY_REGION_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            orderLogger.error(msg, err as Error)
            return new ErrorResponseC(
                orderLogs.ORDERS_BY_REGION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetOrdersByStatus = async (
        status: string
    ): Promise<ResponseT> => {
        try {
            const orders = await OrderModel.find({ status })
                .populate('orderItems.product')
                .populate('client')
                .populate('region')

            if (!orders.length) {
                const msg = formatString(
                    orderLogs.ORDERS_BY_STATUS_ERROR.message,
                    {
                        status,
                    }
                )
                orderLogger.error(msg)
                return new ErrorResponseC(
                    orderLogs.ORDERS_BY_STATUS_ERROR.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            return new SuccessResponseC(
                orderLogs.ORDERS_BY_STATUS_FOUND.type,
                orders,
                orderLogs.ORDERS_BY_STATUS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(orderLogs.ORDERS_BY_STATUS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            orderLogger.error(msg, err as Error)
            return new ErrorResponseC(
                orderLogs.ORDERS_BY_STATUS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateOrder = async (
        orderId: string,
        updates: Partial<OrderD>
    ): Promise<ResponseT> => {
        try {
            const order = await OrderModel.findByIdAndUpdate(orderId, updates, {
                new: true,
            })
                .populate('orderItems.product')
                .populate('client')
                .populate('region')

            if (!order) {
                const msg = formatString(orderLogs.ORDER_NOT_FOUND.message, {
                    id: orderId,
                })
                return new ErrorResponseC(
                    orderLogs.ORDER_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(orderLogs.ORDER_UPDATED.message, {
                id: orderId,
            })
            return new SuccessResponseC(
                orderLogs.ORDER_UPDATED.type,
                order,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(orderLogs.ORDER_UPDATE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            orderLogger.error(msg, err as Error)
            return new ErrorResponseC(
                orderLogs.ORDER_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeDeleteOrder = async (orderId: string): Promise<ResponseT> => {
        try {
            const order = await OrderModel.findByIdAndDelete(orderId)
            if (!order) {
                const msg = formatString(orderLogs.ORDER_NOT_FOUND.message, {
                    id: orderId,
                })
                return new ErrorResponseC(
                    orderLogs.ORDER_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(orderLogs.ORDER_DELETED.message, {
                id: orderId,
            })
            return new SuccessResponseC(
                orderLogs.ORDER_DELETED.type,
                order,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(orderLogs.ORDER_DELETE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            orderLogger.error(msg, err as Error)
            return new ErrorResponseC(
                orderLogs.ORDER_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
