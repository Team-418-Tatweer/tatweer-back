import { Application } from 'express'
import indexRouter from './index.router'
import { authRouter } from '@modules/auth/'
import { productRouter } from '@modules/product/'
import { clientRouter } from '@modules/client'
export default function SetRouters(app: Application) {
    app.use('/', indexRouter)
    app.use('/api/auth', authRouter)
    app.use('/api/products', productRouter)
    app.use('/api/clients', clientRouter)
}
