<script lang="ts" setup>
import Navigation from '@/components/Navigation.vue';
import { useLogout } from '@/hooks/logout.hook';
import type { OrderModel } from '@/models/order.model';
import { MainService } from '@/services/main.service';
import { OrderService } from '@/services/order.service';
import { formatTime } from '@/utils';
import { ref } from 'vue';


const orders = ref<OrderModel[]>()
const logout = useLogout()
OrderService.getOrders()
    .then(rsp => orders.value = rsp.data)
    .catch(e => logout(e))


function doDelete(o: OrderModel) {
    OrderService.deleteOrder(o.orderId)
        .then(rsp=> orders.value = orders.value?.filter(order => order.orderId !== o.orderId))
        .catch(e => logout(e))
}

</script>





<template>
    <Navigation/>
    <div>
        <h3>Order</h3>
    </div>
    <table class="table table-striped table-hover" v-if="orders">
        <thead>
            <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Book ID</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Author</th>
                <th scope="col">Updated At</th>
                <th scope="col">Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="o of orders" :key="o.orderId">
                <th scope="row">{{ o.orderId }}</th>
                <td>{{ o.bookId}}</td>
                <td>{{ o.book.title }}</td>
                <td>{{ o.book.price }}</td>
                <td>{{ o.book.author }}</td>
                <td>{{ formatTime(o.updatedAt ?? o.createdAt) }}</td>
                <td>
                    <div class="btn-group">
                        <RouterLink :to="`/order/${o.orderId}`" class="btn btn-sm btn-success">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </RouterLink>
                        <button class="btn btn-sm btn-danger" @click="doDelete(o)">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

</template>