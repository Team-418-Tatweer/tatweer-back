import { loginValidators, registerValidators } from './service/auth.validator'
import {
    SignIn,
    SignUp,
    AuthBack,
    SignOut,
    GetMe,
    GetUsers,
    UpdateUser,
    UpdateRole,
    UpdatePassword,
} from './auth.controller'
import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'

export const authRouter = Router()

authRouter.route('/login').post(loginValidators, validator, SignIn)
authRouter.route('/register').post(registerValidators, validator, SignUp)
authRouter.route('/').get(checkLogs, isLoggedIn, AuthBack)
authRouter.route('/logout').post(checkLogs, isLoggedIn, SignOut)
authRouter.route('/me').get(checkLogs, isLoggedIn, GetMe)
authRouter.route('/all').get(checkLogs, isLoggedIn, isAdmin, GetUsers)
authRouter.route('/:id').put(checkLogs, isLoggedIn, UpdateUser)
authRouter.route('/role').put(checkLogs, isLoggedIn, isAdmin, UpdateRole)
authRouter
    .route('/password')
    .put(checkLogs, isLoggedIn, isAdmin, UpdatePassword)
