import { NextFunction, Request, Response } from 'express'
import * as core from 'express-serve-static-core'
import { UserD } from '@db/models/user'
import { ProductD } from '@models/product'

export type DataTypes = UserD | ProductD
export interface MyRequest<
    Req extends DataTypes | null,
    ReqBody = any,
    Params = core.ParamsDictionary,
    ResBody = any,
    ReqQuery = core.Query,
    Locals extends Record<string, any> = Record<string, any>,
> extends Request<Params, ResBody, ReqBody, ReqQuery, Locals> {
    user?: Req extends UserD ? UserD : Req | null
}

export interface UserRouter<T extends DataTypes | null> {
    controller: (req: MyRequest<T>, res: Response, next: NextFunction) => any
}
