export class SuccessResponseC implements SuccessResponseI {
    status: string
    data: unknown
    message: string
    code: number
    constructor(status: string, data: unknown, message: string, code: number) {
        this.status = status
        this.data = data
        this.message = message
        this.code = code
    }
}

export class ErrorResponseC implements ErrorResponseI {
    status: string
    code: number
    message: string
    error: unknown
    constructor(message: string, code: number, error: unknown) {
        this.status = 'error'
        this.code = code
        this.message = message
        this.error = error
    }
}
