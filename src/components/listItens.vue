
<script>
import { useBuyStore } from "../stores/buyList"
import { storeToRefs } from 'pinia';


export default {
    name: 'listItens',

    setup() {
        const store = useBuyStore()
        const { itemsList } = storeToRefs(store);
        const { getTotal } = storeToRefs(store);

        const { toggleDone } = store;
        const { deleteItem } = store;
      

        return { itemsList, toggleDone, deleteItem, getTotal };
    }
}

</script>

<template>
    <div>
        <table class="table  mt-3 table-sm">
            <thead class="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="itens in itemsList" :key="itens.id" :class="{ done: itens.done }">
                    <th scope="row"><input type="checkbox" :value="itens.done" class="form-check-input" id=""
                            @click="toggleDone(itens.id)"> </th>
                    <td>{{ itens.item }}</td>
                    <td>{{ itens.value }}</td>
                    <td>
                        <button class="btn ms-2" @click="deleteItem(itens.id)">&#10060;</button>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th scope="row">Valor Total</th>
                    <td></td>
                    <td></td>
                    <td>{{ getTotal }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<style>
.done {
    background-image: linear-gradient(to right,
            #314755 0%,
            #26a0da 51%,
            #314755 100%);
    color: white;
    text-decoration: line-through;
    align-items: center;

}

tr {
    background-color: aliceblue;
    vertical-align: middle;
    font-size: large;
}

button {
    color: #fff;
}

</style>