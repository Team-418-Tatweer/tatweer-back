import { Response } from 'express'
import { UserD } from '@db/models/user'
import { MyRequest } from '@myTypes/Express'
import { ErrorResponse, SuccessResponse } from '@utils/Response'
import { AuthServices } from '@modules/auth/service/auth.service'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
export const SignIn = async (req: MyRequest<UserD>, res: Response) => {
    const { email, password, stay = false } = req.body
    const result = await AuthServices.executeLogin(email, password, stay, res)
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}
export const SignUp = async (req: MyRequest<UserD>, res: Response) => {
    const { email, password, name, stay = false } = req.body
    const result = await AuthServices.executeRegister(
        email,
        password,
        name,
        stay,
        res
    )
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}

export const AuthBack = async (req: MyRequest<UserD>, res: Response) => {
    const { stay = false } = req.body
    const resulte = await AuthServices.executeAuthBack(req.user!, stay, res)
    if (resulte instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            resulte.code,
            resulte.data,
            resulte.message,
            resulte.status
        )
    if (resulte instanceof ErrorResponseC)
        return ErrorResponse(res, resulte.code, resulte.message, resulte.error)
}

export const SignOut = async (req: MyRequest<UserD>, res: Response) => {
    const result = await AuthServices.executeLogout(res)
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}

export const GetMe = async (req: MyRequest<UserD>, res: Response) => {
    const user = req.user!

    const result = await AuthServices.executeGetMe(user)
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}

export const GetUsers = async (req: MyRequest<UserD>, res: Response) => {
    const result = await AuthServices.executeGetUsers()
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}

export const UpdateUser = async (req: MyRequest<UserD>, res: Response) => {
    const { email, name } = req.body
    const result = await AuthServices.executeUpdateUser(req.params.id, {
        email,
        name,
    })
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}

export const UpdateRole = async (req: MyRequest<UserD>, res: Response) => {
    const { role } = req.body
    const result = await AuthServices.executeUpdateRole(req.params.id, role)
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}

export const UpdatePassword = async (req: MyRequest<UserD>, res: Response) => {
    const { password } = req.body
    const result = await AuthServices.executeUpdatePassword(
        req.user?.id,
        password
    )
    if (result instanceof SuccessResponseC)
        return SuccessResponse(
            res,
            result.code,
            result.data,
            result.message,
            result.status
        )
    if (result instanceof ErrorResponseC)
        return ErrorResponse(res, result.code, result.message, result.error)
}
