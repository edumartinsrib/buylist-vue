
<script>
export default {
    name: 'listItens',

    setup() {
        console.log('teste');


    }
}

</script>

<template>
    <div>
        <table class="table table-light mt-3 table-sm">
            <thead class="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Banana</td>
                    <td>R$2,50</td>
                    <td>
                        <button class="btn btn-info">EDIT</button>
                        <button class="btn btn-danger ms-2">DEL</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
</style>