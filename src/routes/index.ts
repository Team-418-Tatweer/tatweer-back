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
import { warehouseRouter } from '@modules/warehouse'
import { inventoryRouter } from '@modules/inventory'
import { inventoryMovementRouter } from '@modules/imovement'
import { integrationRouter } from '@modules/integration'
import { alertRouter } from '@modules/alert'

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
    app.use('/api/warehouses', warehouseRouter)
    app.use('/api/inventory', inventoryRouter)
    app.use('/api/imovements', inventoryMovementRouter)
    app.use('/api/integrations', integrationRouter)
    app.use('/api/alerts', alertRouter)
}
