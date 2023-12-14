<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from 'vue'
import { useVoluntariosStore } from '../stores/voluntarios';
import { storeToRefs } from 'pinia';
import TableVoluntarios from '@/components/Table-voluntarios.vue'
import TableVoluntariosLoading from '@/components/loading-table.vue'
import PaginationTable from '@/components/Pagination-table.vue'

const router = useRouter()
const voluntariosStore = useVoluntariosStore()
const { getUsers, getUserByName } = voluntariosStore
const { users, loading } = storeToRefs(voluntariosStore)

onMounted(() => {
    getUsers()

})

const name = ref<string>('')

const handleSubmit = async () => {
    if (name.value === "") {
        //TODO poner alerta de vue
        alert('No se puede buscar un nombre vacio')
    }
    await getUserByName(name.value)

}

</script>
<template>
    <main class="max-w-6xl mx-auto my-10">
        <button class="bg-cyan-500 px-4 py-2 rounded-xl text-white hover:bg-cyan-600 transition-colors"
            @click="router.back()">
            Volver
        </button>
        <form class="mt-5 flex gap-3" @submit.prevent="handleSubmit">
            <input v-model="name" class="border-2 p-2 rounded-xl" type="text" placeholder="Ej: Daniel, Ondo, Nguema...">
            <button class="bg-cyan-500 px-4 py-2 rounded-xl text-white hover:bg-cyan-600 transition-colors">Buscar</button>
        </form>

        <TableVoluntariosLoading v-if="loading" />
        <TableVoluntarios v-else :voluntarios="users" />
        <PaginationTable />

    </main>
</template>

