import Logger from '@utils/Logger'
export type IAuthLogs =
    | 'LOGIN_SUCCESS'
    | 'MOBILE_LOGIN_SUCCESS'
    | 'LOGIN_ERROR_GENERIC'
    | 'LOGIN_ERROR_INVALID_INPUT'
    | 'LOGIN_ERROR_EMAIL_NOT_FOUND'
    | 'LOGIN_ERROR_INCORRECT_PASSWORD_FOUND'
    | 'LOGIN_ERROR_DISABLED_ACCOUNT'
    | 'USER_ISN_T_LOGGED'
    | 'USER_ISN_T_ADMIN'
    | 'USER_ISN_T_USER'
    | 'ADMIN_DOES_NOT_HAVE_ROLE'
    | 'ERROR_SESSION_CREDENTIALS'
    | 'ERROR_WHILE_CHECKING_CREDENTIALS'
    | 'GENERIC_CREDENTIALS_ERROR'
    | 'AUTH_BACK'
    | 'USER_NOT_FOUND'
    | 'LOGOUT_SUCCESS'
    | 'RESET_SUCCESS'
    | 'RESET_PASSWORD_SUCCESS'
    | 'RESET_ERROR_GENERIC'
    | 'REGISTER_SUCCESS'
    | 'AUTH_ERROR_GENERIC'
    | 'REGISTER_ERROR_GENERIC'
    | 'REGISTER_ERROR_INVALID_INPUT'
    | 'REGISTER_ERROR_EMAIL_EXIST'
    | 'REGISTER_ERROR_PASSWORD'
    | 'USER_ISN_T_ENABLED'
    | 'USER_ISN_T_HR'
    | 'USER_ISN_T_MANAGER'
    | 'USERS_FOUND'
    | 'USERS_ERROR'
    | 'USER_FOUND'
    | 'USER_ERROR'
    | 'USER_UPDATED'
    | 'USER_UPDATE_ERROR'
    | 'ROLE_UPDATED'
    | 'ROLE_UPDATE_ERROR'
    | 'PASSWORD_UPDATED'
    | 'PASSWORD_UPDATE_ERROR'

export const authLogs: IErrors<IAuthLogs> = {
    LOGIN_SUCCESS: {
        code: 0,
        message: 'User "{email} : {name}" has logged in successfully.',
        type: 'LOGIN_SUCCESS',
    },
    MOBILE_LOGIN_SUCCESS: {
        code: 1,
        message:
            'User "{email} : {name}" has logged in successfully from mobile.',
        type: 'MOBILE_LOGIN_SUCCESS',
    },
    LOGIN_ERROR_GENERIC: {
        code: 2,
        message: "Error occurred while login in user '{email}': {error}",
        type: 'LOGIN_ERROR_GENERIC',
    },
    LOGIN_ERROR_INVALID_INPUT: {
        code: 3,
        message: 'Invalid input for Log in : {input}',
        type: 'LOGIN_ERROR_INVALID_INPUT',
    },
    LOGIN_ERROR_EMAIL_NOT_FOUND: {
        code: 4,
        message: "Failed to login email doesn't exist {email}.",
        type: 'LOGIN_ERROR_EMAIL_NOT_FOUND',
    },
    LOGIN_ERROR_INCORRECT_PASSWORD_FOUND: {
        code: 5,
        message: 'Failed to login password incorrect {email}.',
        type: 'LOGIN_ERROR_INCORRECT_PASSWORD_FOUND',
    },
    LOGIN_ERROR_DISABLED_ACCOUNT: {
        code: 6,
        message: 'Failed to login to a disabled account {email}.',
        type: 'LOGIN_ERROR_DISABLED_ACCOUNT',
    },
    USER_ISN_T_LOGGED: {
        code: 7,
        message: "You aren't logged in to do this action.",
        type: 'USER_ISN_T_LOGGED',
    },
    USER_ISN_T_ADMIN: {
        code: 10,
        message: "Logged In user isn't a admins.",
        type: 'USER_ISN_T_ADMIN',
    },
    USER_ISN_T_USER: {
        code: 20,
        message: "Logged In user isn't a user.",
        type: 'USER_ISN_T_USER',
    },
    ADMIN_DOES_NOT_HAVE_ROLE: {
        code: 11,
        message: "Logged In admin doesn't have a role yet.",
        type: 'ADMIN_DOES_NOT_HAVE_ROLE',
    },
    ERROR_SESSION_CREDENTIALS: {
        code: 13,
        message: "Session doesn't seem correct there is no token.",
        type: 'ERROR_SESSION_CREDENTIALS',
    },
    ERROR_WHILE_CHECKING_CREDENTIALS: {
        code: 14,
        message: "Couldn't create a correct session.",
        type: 'ERROR_WHILE_CHECKING_CREDENTIALS',
    },
    GENERIC_CREDENTIALS_ERROR: {
        code: 15,
        message: 'Generic error happened while loading credentials.',
        type: 'GENERIC_CREDENTIALS_ERROR',
    },
    AUTH_BACK: {
        code: 16,
        message: 'User "{email} : {name}" has logged back successfully.',
        type: 'AUTH_BACK',
    },
    LOGOUT_SUCCESS: {
        code: 17,
        message: 'User "{email} : {name}" has logged out successfully.',
        type: 'LOGOUT_SUCCESS',
    },
    USER_NOT_FOUND: {
        code: 18,
        message: 'User {userId} not found',
        type: 'USER_NOT_FOUND',
    },
    RESET_SUCCESS: {
        code: 23,
        message: 'Reset password email sent successfully for {email}',
        type: 'RESET_SUCCESS',
    },
    RESET_ERROR_GENERIC: {
        code: 24,
        message:
            'Reset password email sent successfully for {email} with error {error}',
        type: 'RESET_ERROR_GENERIC',
    },
    RESET_PASSWORD_SUCCESS: {
        code: 25,
        message: 'Password has changed successfully for {user}',
        type: 'RESET_PASSWORD_SUCCESS',
    },

    REGISTER_SUCCESS: {
        code: 26,
        message: 'User "{email} : {name}" has registered successfully.',
        type: 'REGISTER_SUCCESS',
    },
    REGISTER_ERROR_GENERIC: {
        code: 27,
        message: "Error occurred while registering user '{email}': {error}",
        type: 'REGISTER_ERROR_GENERIC',
    },
    REGISTER_ERROR_INVALID_INPUT: {
        code: 28,
        message: 'Invalid input for Register : {input}',
        type: 'REGISTER_ERROR_INVALID_INPUT',
    },
    REGISTER_ERROR_EMAIL_EXIST: {
        code: 29,
        message: 'Failed to register email already exist {email}.',
        type: 'REGISTER_ERROR_EMAIL_EXIST',
    },
    REGISTER_ERROR_PASSWORD: {
        code: 31,
        message: "Password doesn't meet the requirements.",
        type: 'REGISTER_ERROR_PASSWORD',
    },
    USER_ISN_T_ENABLED: {
        code: 32,
        message: "User isn't enabled to do this action.",
        type: 'USER_ISN_T_ENABLED',
    },
    AUTH_ERROR_GENERIC: {
        code: 33,
        message: "Error occurred while authenticating user '{email}': {error}",
        type: 'AUTH_ERROR_GENERIC',
    },

    USER_ISN_T_HR: {
        code: 34,
        message: "Logged In user isn't a HR.",
        type: 'USER_ISN_T_HR',
    },
    USER_ISN_T_MANAGER: {
        code: 35,
        message: "Logged In user isn't a manager.",
        type: 'USER_ISN_T_MANAGER',
    },
    USERS_FOUND: {
        code: 36,
        message: 'Successfully retrieved all users',
        type: 'USERS_FOUND',
    },
    USERS_ERROR: {
        code: 37,
        message: 'Error occurred while fetching users: {error}',
        type: 'USERS_ERROR',
    },
    USER_FOUND: {
        code: 38,
        message: 'Successfully retrieved user {email}',
        type: 'USER_FOUND',
    },
    USER_ERROR: {
        code: 39,
        message: 'Error occurred while fetching user: {error}',
        type: 'USER_ERROR',
    },
    USER_UPDATED: {
        code: 40,
        message: 'Successfully updated user {email}',
        type: 'USER_UPDATED',
    },
    USER_UPDATE_ERROR: {
        code: 41,
        message: 'Error occurred while updating user: {error}',
        type: 'USER_UPDATE_ERROR',
    },
    ROLE_UPDATED: {
        code: 42,
        message: 'Successfully updated role for user {email} to {role}',
        type: 'ROLE_UPDATED',
    },
    ROLE_UPDATE_ERROR: {
        code: 43,
        message: 'Error occurred while updating role: {error}',
        type: 'ROLE_UPDATE_ERROR',
    },
    PASSWORD_UPDATED: {
        code: 44,
        message: 'Successfully updated password for user {email}',
        type: 'PASSWORD_UPDATED',
    },
    PASSWORD_UPDATE_ERROR: {
        code: 45,
        message: 'Error occurred while updating password: {error}',
        type: 'PASSWORD_UPDATE_ERROR',
    },
} as const

export default authLogs
export const authLogger = new Logger('auth')
