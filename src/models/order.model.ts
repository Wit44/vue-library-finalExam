export interface OrderModel {
    orderId: number
    bookId: number
    delivery: string
    createdAt: string
    updatedAt: string | null
    book: {
        bookId: number,
        title: string,
        author: string,
        price: string,
    }
}