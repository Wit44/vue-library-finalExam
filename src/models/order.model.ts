export interface OrderModel {
    orderId: number
    bookId: number
    createdAt: string
    updatedAt: string | null
    book: {
        bookId: number,
        title: string
    }
}