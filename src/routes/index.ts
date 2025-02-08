import { Application } from 'express'
import indexRouter from './index.router'
import { authRouter } from '@modules/auth/'
import { productRouter } from '@modules/product/'
import { clientRouter } from '@modules/client'
import { regionRouter } from '@modules/region'
import { orderRouter } from '@modules/order/order.router'
import { supplierRouter } from '@modules/supplier'
import { rawMaterialRouter } from '@modules/rawmaterial'
import { pmaterialRouter } from '@modules/pmaterial'

export default function SetRouters(app: Application) {
    app.use('/', indexRouter)
    app.use('/api/auth', authRouter)
    app.use('/api/products', productRouter)
    app.use('/api/clients', clientRouter)
    app.use('/api/regions', regionRouter)
    app.use('/api/orders', orderRouter)
    app.use('/api/suppliers', supplierRouter)
    app.use('/api/rawmaterials', rawMaterialRouter)
    app.use('/api/productmaterials', pmaterialRouter)
}
