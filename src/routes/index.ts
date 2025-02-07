import { Application } from 'express'
import indexRouter from './index.router'
import { authRouter } from '@modules/auth/'
import { productRouter } from '@modules/product/'
export default function SetRouters(app: Application) {
    app.use('/', indexRouter)
    app.use('/auth', authRouter)
    app.use('/products', productRouter)
}
