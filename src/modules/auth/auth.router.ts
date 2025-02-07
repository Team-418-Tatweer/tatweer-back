import {
  loginValidators,
  registerValidators,
} from "./service/auth.validator";
import { SignIn, SignUp , AuthBack} from "./auth.controller";
import { Router } from "express";
import { validator } from "@middleware/validator";
import { checkLogs, isLoggedIn } from "@middleware/auth";

export const authRouter = Router()

authRouter.route('/login').post(loginValidators, validator, SignIn)
authRouter.route('/register').post(registerValidators, validator, SignUp)
authRouter.route('/').get(checkLogs, isLoggedIn, AuthBack)
