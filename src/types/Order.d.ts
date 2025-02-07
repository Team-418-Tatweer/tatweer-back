declare interface OrderItemI {
    product: ProductI
    quantity: number
}

declare interface OrderI {
    orderItems: OrderItemI[]
    total: number
    user: UserI
}
