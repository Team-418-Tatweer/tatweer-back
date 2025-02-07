import { EnvEmitter } from './Events'
import { EmailHost, EmailPort } from '@config/Env'
import nodemailer, { Transporter } from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import Logger from './Logger'
import { EmailPass, EmailUser } from '@config/CheckableEnv'
import SMTPTransport from 'nodemailer/lib/smtp-pool'
import { exitProcess } from './Process'
import { ExitCodes } from '@config/Errors'
import { log } from './Function'

const mailLogger = new Logger('mail')

class EmailQueue<T extends unknown = unknown, X extends unknown = unknown> {
    queue: Promise<any>
    transporter: Transporter<SMTPTransport.SentMessageInfo> | null = null
    constructor() {
        let $this = this
        this.queue = new Promise((resolve, reject) => {
            EnvEmitter.addListener('loaded', () => {
                const transporterOptions: SMTPTransport.Options = {
                    host: EmailHost,
                    port: Number(EmailPort),
                    secure: true,
                    auth: {
                        user: EmailUser,
                        pass: EmailPass,
                    },
                    pool: true,
                }

                const transporter =
                    nodemailer.createTransport(transporterOptions)

                transporter.verify(function (error, success) {
                    if (error) {
                        reject(error)
                    } else {
                        log('Server is ready to send emails')
                        // @ts-ignore
                        $this.transporter = transporter
                        resolve(transporter)
                    }
                })
            })
        }).catch((err) => {
            exitProcess(ExitCodes.EMAIL_ERROR_GENERIC, {
                error: err?.message || String(err),
            })
        })
    }

    addEmail(options: Mail.Options) {
        return (this.queue = this.transporter!.sendMail({
            ...options,
            from: EmailUser,
        }).then((info) => {
            mailLogger.info('Email sent successfully!', info)
        }))
    }
}
const emailQueue = new EmailQueue()
export async function SendEmail(options: Mail.Options) {
    return emailQueue.addEmail(options)
}
