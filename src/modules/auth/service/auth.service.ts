import { UserD, UserModel } from '@db/models/user'
import authLogs, { IAuthLogs, authLogger } from './auth.logs'
import { formatString } from '@utils/Strings'
import { Sign } from '@utils/jwt'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'
import { Response } from 'express'
import { getCookiesSettings } from '@utils/Function'

export class AuthServices {
    /**
     * @description  Login a user
     * @param email  - String
     * @param password - String
     * @returns  ResponseT
     */

    static executeLogin = async (
        email: string,
        password: string,
        stay: boolean,
        res: Response
    ): Promise<ResponseT> => {
        try {
            const user = await UserModel.findOne({ email })
            if (user) {
                const isPasswordMatch = await user.comparePasswords(password)
                if (isPasswordMatch) {
                    const token = Sign({
                        _id: user._id.toString(),
                        role: user.role,
                    })
                    const resp: ICode<IAuthLogs> = authLogs.LOGIN_SUCCESS
                    const msg = formatString(resp.message, user.toObject())
                    authLogger.info(msg, { type: resp.type })
                    res.cookie('token', token, getCookiesSettings(stay))

                    return new SuccessResponseC(
                        resp.type,
                        { ...user.Optimize(), token: token },
                        msg,
                        HttpCodes.Accepted.code
                    )
                }
                const msg = formatString(
                    authLogs.LOGIN_ERROR_INCORRECT_PASSWORD_FOUND.message,
                    { email }
                )
                authLogger.error(msg)
                return new ErrorResponseC(
                    authLogs.LOGIN_ERROR_INCORRECT_PASSWORD_FOUND.type,
                    HttpCodes.Unauthorized.code,
                    msg
                )
            }
            const msg = formatString(
                authLogs.LOGIN_ERROR_EMAIL_NOT_FOUND.message,
                {
                    email,
                }
            )
            authLogger.error(msg)
            return new ErrorResponseC(
                authLogs.LOGIN_ERROR_EMAIL_NOT_FOUND.type,
                HttpCodes.NotFound.code,
                msg
            )
        } catch (err) {
            const msg = formatString(authLogs.LOGIN_ERROR_GENERIC.message, {
                error: (err as Error)?.message || '',
                email,
            })
            authLogger.error(msg, err as Error)
            return new ErrorResponseC(
                authLogs.LOGIN_ERROR_GENERIC.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    /**
     * @description Register a user
     * @param email  - String
     * @param password  - String
     * @param firstName  - String
     * @param lastName  - String
     * @returns {ResponseT}
     */

    static executeRegister = async (
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        stay: boolean,
        res: Response
    ): Promise<ResponseT> => {
        try {
            const userExist = await UserModel.findOne({
                email,
            })
            if (userExist) {
                const msg = formatString(
                    authLogs.REGISTER_ERROR_EMAIL_EXIST.message,
                    {
                        email,
                    }
                )
                authLogger.error(msg)
                return new ErrorResponseC(
                    authLogs.REGISTER_ERROR_EMAIL_EXIST.type,
                    HttpCodes.BadRequest.code,
                    msg
                )
            }
            const user = new UserModel({ email, password, firstName, lastName })
            await user.save()
            const token = Sign({ _id: user._id.toString(), role: user.role })
            res.cookie('token', token, getCookiesSettings(stay))
            const resp: ICode<IAuthLogs> = authLogs.REGISTER_SUCCESS
            const msg = formatString(resp.message, user.toObject())
            authLogger.info(msg, { type: resp.type })
            return new SuccessResponseC(
                resp.type,
                { ...user.Optimize(), token: token },
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(authLogs.REGISTER_ERROR_GENERIC.message, {
                error: (err as Error)?.message || '',
                email,
            })
            authLogger.error(msg, err as Error)
            return new ErrorResponseC(
                authLogs.REGISTER_ERROR_GENERIC.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
    static executeAuthBack = async (
        user: UserD,
        stay: boolean,
        res: Response
    ) => {
        try {
            let msg = formatString(authLogs.AUTH_BACK.message, {
                email: user.email,
                username: user.name,
            })
            authLogger.info(msg, { type: authLogs.AUTH_BACK.type })
            const token = Sign({ _id: user.id.toString(), role: user.role })
            res.cookie('token', token, getCookiesSettings(stay))
            return new SuccessResponseC(
                authLogs.AUTH_BACK.type,
                user.Optimize(),
                msg,
                HttpCodes.Accepted.code
            )
        } catch (err) {
            const msg = formatString(authLogs.AUTH_ERROR_GENERIC.message, {
                error: (err as Error)?.message || '',
                email: user.email,
            })
            authLogger.error(msg, err as Error)
            return new ErrorResponseC(
                authLogs.AUTH_ERROR_GENERIC.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeLogout = async (res: Response): Promise<ResponseT> => {
        try {
            res.clearCookie('token')
            const resp: ICode<IAuthLogs> = authLogs.LOGOUT_SUCCESS
            return new SuccessResponseC(
                resp.type,
                null,
                resp.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(authLogs.AUTH_ERROR_GENERIC.message, {
                error: (err as Error)?.message || '',
            })
            authLogger.error(msg, err as Error)
            return new ErrorResponseC(
                authLogs.AUTH_ERROR_GENERIC.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetUsers = async (): Promise<ResponseT> => {
        try {
            const users = await UserModel.find()
            const resp: ICode<IAuthLogs> = authLogs.USERS_FOUND
            return new SuccessResponseC(
                resp.type,
                users.map((u) => u.Optimize()),
                resp.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(authLogs.USERS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            authLogger.error(msg, err as Error)
            return new ErrorResponseC(
                authLogs.USERS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetUser = async (userId?: string): Promise<ResponseT> => {
        try {
            const user = await UserModel.findById(userId)
            if (!user) {
                return new ErrorResponseC(
                    authLogs.USER_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    authLogs.USER_NOT_FOUND.message
                )
            }
            const msg = formatString(authLogs.USER_FOUND.message, {
                email: user.email,
            })
            authLogger.info(msg)
            return new SuccessResponseC(
                authLogs.USER_FOUND.type,
                user.Optimize(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(authLogs.USER_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            authLogger.error(msg, err as Error)
            return new ErrorResponseC(
                authLogs.USER_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetMe = async (user: UserD): Promise<ResponseT> => {
        try {
            if (!user) {
                return new ErrorResponseC(
                    authLogs.USER_ISN_T_LOGGED.type,
                    HttpCodes.Unauthorized.code,
                    authLogs.USER_ISN_T_LOGGED.message
                )
            }
            const msg = formatString(authLogs.USER_FOUND.message, {
                email: user.email,
            })
            authLogger.info(msg)
            return new SuccessResponseC(
                authLogs.USER_FOUND.type,
                user.Optimize(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(authLogs.USER_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            authLogger.error(msg, err as Error)
            return new ErrorResponseC(
                authLogs.USER_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateUser = async (
        userId: string,
        props: Partial<UserD>
    ): Promise<ResponseT> => {
        try {
            const user = await UserModel.findById(userId)
            if (!user) {
                return new ErrorResponseC(
                    authLogs.USER_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    authLogs.USER_NOT_FOUND.message
                )
            }
            await user.updateOne(props)
            const msg = formatString(authLogs.USER_UPDATED.message, {
                email: user.email,
            })
            authLogger.info(msg)
            return new SuccessResponseC(
                authLogs.USER_UPDATED.type,
                user.Optimize(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(authLogs.USER_UPDATE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            authLogger.error(msg, err as Error)
            return new ErrorResponseC(
                authLogs.USER_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateRole = async (
        userId: string,
        role: string
    ): Promise<ResponseT> => {
        try {
            const user = await UserModel.findById(userId)
            if (!user) {
                return new ErrorResponseC(
                    authLogs.USER_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    authLogs.USER_NOT_FOUND.message
                )
            }
            await user.updateOne({ role })
            const msg = formatString(authLogs.ROLE_UPDATED.message, {
                email: user.email,
                role,
            })
            authLogger.info(msg)
            return new SuccessResponseC(
                authLogs.ROLE_UPDATED.type,
                user.Optimize(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(authLogs.ROLE_UPDATE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            authLogger.error(msg, err as Error)
            return new ErrorResponseC(
                authLogs.ROLE_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdatePassword = async (
        userId: string,
        password: string
    ): Promise<ResponseT> => {
        try {
            const user = await UserModel.findById(userId)
            if (!user) {
                return new ErrorResponseC(
                    authLogs.USER_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    authLogs.USER_NOT_FOUND.message
                )
            }
            await user.updateOne({ password })
            const msg = formatString(authLogs.PASSWORD_UPDATED.message, {
                email: user.email,
            })
            authLogger.info(msg)
            return new SuccessResponseC(
                authLogs.PASSWORD_UPDATED.type,
                user.Optimize(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(authLogs.PASSWORD_UPDATE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            authLogger.error(msg, err as Error)
            return new ErrorResponseC(
                authLogs.PASSWORD_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
