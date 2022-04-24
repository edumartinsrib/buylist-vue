<script>
export default {

}
</script>

<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-dark" id="exampleModalLabel">Lista de Compras</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-dark">

                        <div class="input-group mb-3">
                            <span class="input-group-text bg-success text-white" id="inputGroup-sizing-sm">Nome do Item</span>
                            <input type="text" class="form-control" aria-label="Sizing example input">
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text bg-success text-white">Valor R$</span>
                            <input type="number" class="form-control" aria-label="Valor">
                            
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary">Adicionar</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>

</style>