<script lang="ts" setup>
import Navigation from '@/components/Navigation.vue';
import { useLogout } from '@/hooks/logout.hook';
import type { BookModel } from '@/models/book.model';
import type { OrderModel } from '@/models/order.model';
import { BookService } from '@/services/book.service';
import { OrderService } from '@/services/order.service';
import { formatTime } from '@/utils';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const logout = useLogout()
const route = useRoute()
const router = useRouter()
const id = Number(route.params.id)
const order = ref<OrderModel>()
const books = ref<BookModel[]>()

OrderService.getOrderById(id)
    .then(rsp => order.value = rsp.data)
    .catch(e => logout(e))

BookService.getBooks()
    .then(rsp => books.value = rsp.data)
    .catch(e => logout(e))


function doUpdate() {
    OrderService.updateOrder(id, order.value)
        .then(rsp => router.push('/order'))
        .catch(e => logout(e))
}
</script>

<template>
    <Navigation />
    <div class="custom-form" v-if="order">
        <h1>Edit Order</h1>
        <form v-on:submit.prevent="doUpdate">
            <div class="mb-3">
                <label for="orderid" class="form-label">ORDER ID:</label>
                <input type="number" class="form-control" id="orderid" :value="order.orderId" disabled>
            </div>
            <div class="mb-3">
                <label for="bookid" class="form-label">Book ID:</label>
                <input type="number" class="form-control" id="bookid" :value="order.bookId" disabled>
            </div>
            <div class="mb-3">
                <label for="delivery" class="form-label">Delivery:</label>
                <input type="text" class="form-control" id="delivery" v-model="order.delivery">
            </div>
            <div class="mb-3">
                <label for="updated" class="form-label">Updated At:</label>
                <input type="text" class="form-control" id="updated"
                    :value="formatTime(order.updatedAt ?? order.createdAt)" disabled>
            </div>
            <button class="btn btn-primary">
                <i class="fa-solid fa-floppy-disk"></i> Save
            </button>
        </form>
    </div>
</template>