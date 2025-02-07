declare interface OrderItemI {
    product: ProductI
    quantity: number
}

declare interface OrderI {
    orderItems: OrderItemI[]
    client: ClientI
    total: number
    user: UserI
}
