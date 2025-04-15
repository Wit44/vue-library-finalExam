import type { OrderModel } from "@/models/order.model";
import { MainService } from "./main.service";

export class OrderService {
    static async getOrders(){
        return await MainService.useAxios<OrderModel[]>('/order')
    }

    static async getOrderById(id: number) {
        return await MainService.useAxios<OrderModel>(`/order/${id}`)
    }

    static async createOrder(model: any) {
        return await MainService.useAxios(`/order`, 'post', model)
    }

    static async updateOrder(id: number, model:any) {
        return await MainService.useAxios(`/order/${id}`, 'put', model)
    }

    static async deleteOrder(id: number){
        return await MainService.useAxios(`/order/${id}`, 'delete')
    }
}