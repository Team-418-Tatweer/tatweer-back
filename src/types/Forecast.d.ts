export interface ForecastI {
    type: string
    targetEntity: string
    targetID: Types.ObjectId
    forecastedValue: number
    confidenceLevel: number
    timePeriod: string
    dateGenerated: Date
    status: string
}

export enum ForecastType {
    SALES_GROWTH = 'SALES_GROWTH',
    DEMAND_FORECAST = 'DEMAND_FORECAST',
    SUPPLY_CHAIN = 'SUPPLY_CHAIN',
}

// Enum for Forecast Status (optional but recommended)
export enum ForecastStatus {
    PENDING = 'PENDING',
    VALIDATED = 'VALIDATED',
    OBSOLETE = 'OBSOLETE',
}

// Enum for Target Entities (optional but recommended)
export enum TargetEntityType {
    PRODUCT = 'Product',
    WAREHOUSE = 'Warehouse',
    SUPPLIER = 'Supplier',
    MARKET = 'Market',
}
