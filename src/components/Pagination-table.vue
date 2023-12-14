<script setup lang="ts">
import { useVoluntariosStore } from '@/stores/voluntarios';
import { storeToRefs } from 'pinia';
import { computed, watch } from 'vue';

const voluntarios = useVoluntariosStore()
const { getUsers, setPage } = voluntarios
const { page, size, paginationData, actualPage } = storeToRefs(voluntarios)




</script>

<template>
    <footer class="flex mt-5">
        <div class="flex gap-3">
            <button
                class="border-2 border-cyan-500 text-cyan-500 px-4 py-2 text-sm rounded-xl hover:bg-cyan-500 hover:text-white transition-colors disabled:border-gray-200 disabled:text-gray-200 disabled:hover:bg-white"
                :disabled="paginationData?.prevPage === null" @click="setPage(page - 1)">Prev</button>
            <button v-for="page in paginationData?.totalPages" :key="page"
                class="border-2 border-cyan-500 text-cyan-500 px-4 py-2 text-sm rounded-xl hover:bg-cyan-500 hover:text-white transition-colors"
                :class="page === actualPage && 'bg-cyan-500 text-white'" @click="setPage(page - 1)">
                {{ page }}
            </button>

            <button
                class="border-2 border-cyan-500 text-cyan-500 px-4 py-2 text-sm rounded-xl hover:bg-cyan-500 hover:text-white transition-colors disabled:border-gray-200 disabled:text-gray-200 disabled:hover:bg-white"
                :disabled="paginationData?.nextPage === null" @click="setPage(page + 1)">Next</button>
        </div>
    </footer>
</template>

