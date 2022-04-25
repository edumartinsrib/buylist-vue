<script>
import { ref } from 'vue'
import { useBuyStore } from "../stores/buyList"
import { useField } from 'vee-validate';

export default {
    name: 'modalItens',

    setup() {
        const item = ref('');
        const valor = ref(0);
        const store = useBuyStore()

        function addItem() {

            if (!item.value) {
                return console.log('dados não informados!')
            }

            store.addItem(item.value, valor.value);

            item.value = '';
            valor.value = '';
        }

        return { item, valor, addItem, };
    }
}
</script>

<template>
    <div>
        <!-- Modal -->
        <div class="modal fade needs-validation" novalidate id="exampleModal" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <form class="modal-content" @submit.prevent="addItem()">
                    <div class="modal-header">
                        <h5 class="modal-title text-dark" id="exampleModalLabel">Lista de Compras</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-dark">

                        <div class="input-group mb-3">
                            <span class="input-group-text bg-success text-white" id="inputGroup-sizing-sm">Nome do
                                Item</span>
                            <input type="text" class="form-control" aria-label="Sizing example input" v-model="item">

                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text bg-success text-white">Valor R$</span>
                            <input type="number" class="form-control" aria-label="Valor" v-model="valor" required>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary" @click="addItem()"
                            v-show="item && valor">Adicionar</button>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<style>
</style>