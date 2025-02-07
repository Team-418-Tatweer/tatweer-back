import { FCM_SERVICE_ACCOUNT_PATH } from './CheckableEnv'
import { ServiceAccount } from 'firebase-admin'
import { readTextFile } from '@utils/File'
import admin from 'firebase-admin'

export const serviceAccount: ServiceAccount & any = JSON.parse(
    readTextFile(FCM_SERVICE_ACCOUNT_PATH)
)

const FCM_ADMIN = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
})

export default FCM_ADMIN
