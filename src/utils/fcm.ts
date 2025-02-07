import admin from '@config/FireBase'
import {
    Message,
    MessagingPayload,
    MulticastMessage,
} from 'firebase-admin/lib/messaging/messaging-api'
import Logger from './Logger'

const fcmLogger = new Logger('fcm')

export const sendNotification = async (message: Message): Promise<string> => {
    try {
        const response = await admin.messaging().send(message)
        fcmLogger.info(`Successfully sent message: ${JSON.stringify(response)}`)
        return response
    } catch (error) {
        fcmLogger.error(
            `Error sending notifcation : ${error} notifcation : ${message.notification?.title} `
        )
        throw error
    }
}

export const sendNotificationToTopic = async (
    topic: string,
    message: MessagingPayload
): Promise<string> => {
    try {
        const response = await admin.messaging().sendToTopic(topic, message)
        fcmLogger.info(
            `Successfully sent Notifcation:${response.messageId.toString()} `
        )
        return response.messageId.toString()
    } catch (error) {
        fcmLogger.error(
            `Error sending notifcation : ${error} notifcation : ${message.notification?.title} `
        )
        throw error
    }
}

export const sendNotifcationToEachUser = async (
    messages: Message[]
): Promise<string> => {
    try {
        const response = await admin.messaging().sendEach(messages)
        fcmLogger.info(
            `Successfully sent message: ${JSON.stringify(response)} , message count : ${response.successCount.toString()}`
        )

        return response.successCount.toString()
    } catch (error) {
        fcmLogger.error(
            `Error sending message: ${error} , message count : ${error} `
        )
        throw error
    }
}

export const sendNotifcationToDevices = async (
    messages: Message[]
): Promise<string> => {
    try {
        const response = await admin.messaging().sendAll(messages)
        fcmLogger.info(
            `Successfully sent message: ${JSON.stringify(response)} , message count : ${response.successCount.toString()}`
        )
        return response.successCount.toString()
    } catch (error) {
        fcmLogger.error(
            `Error sending message: ${error} , message count : ${error} `
        )
        throw error
    }
}

export const sendNotifcationToDevicesGroup = async (
    messages: MulticastMessage
): Promise<string> => {
    try {
        const response = await admin.messaging().sendEachForMulticast(messages)
        fcmLogger.info(
            `Successfully sent message: ${JSON.stringify(response)} , message count : ${response.successCount.toString()}`
        )
        return response.successCount.toString()
    } catch (error) {
        fcmLogger.error(
            `Error sending message: ${error} , message count : ${error} `
        )
        throw error
    }
}
