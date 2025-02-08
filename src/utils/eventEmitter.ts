import { EventEmitter } from 'events'

export const inventoryEventEmitter = new EventEmitter()

export const INVENTORY_EVENTS = {
    STOCK_UPDATED: 'STOCK_UPDATED',
} as const
