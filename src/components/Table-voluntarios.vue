<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useVoluntariosStore } from '../stores/voluntarios';
import PaginationTable from '@/components/Pagination-table.vue'
import type { Voluntario } from '../interfaces/voluntarios.interface';
import DeleteModal from './DeleteModal.vue';

interface Props {
    voluntarios: Voluntario[]
}

const props = defineProps<Props>()

const voluntariosStore = useVoluntariosStore()
const { deleteUser } = voluntariosStore
const { errormessage, loadingDelete } = storeToRefs(voluntariosStore)


</script>

<template>
    <div class="relative overflow-y-scrol shadow-md sm:rounded-lg mt-5">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 relative">
            <thead class="text-xs text-white uppercase bg-cyan-500 sticky top-0">
                <tr>
                    <th scope="col" class="px-6 py-3">
                        Nombre
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Contacto
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Congregación
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Disponibilidad
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Observaciones
                    </th>
                    <th scope="col" class="px-6 py-3">
                        Acciones
                    </th>
                </tr>
            </thead>

            <tbody class="">
                <tr class="bg-white border-b " v-for="voluntario in voluntarios" :key="voluntario._id">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {{ voluntario.nombre }}
                    </th>
                    <td class="px-6 py-4">
                        {{ voluntario.contacto }}
                    </td>
                    <td class="px-6 py-4">
                        {{ voluntario.congregacion }}
                    </td>
                    <td class="px-6 py-4">
                        <select class="bg-gray-100 px-2 py-2 rounded-xl">
                            <option selected value="" disabled>Turnos Disponible</option>
                            <option v-for="(turnos, i) in voluntario.disponibilidad" :key="i" value="" disabled>{{
                                turnos }}
                            </option>
                        </select>
                    </td>
                    <td class="px-6 py-4">
                        {{ voluntario.observaciones }}
                    </td>
                    <td class="px-6 py-4 flex gap-3">
                        <DeleteModal :id="voluntario._id" />
                        <button class="bg-cyan-500 p-2 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil text-white"
                                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                                <path d="M13.5 6.5l4 4" />
                            </svg>
                        </button>
                    </td>
                </tr>

            </tbody>
        </table>
        <div v-if="errormessage" class="w-full py-10">
            <p class="text-center text-xl"> {{ errormessage }}</p>
        </div>
    </div>
    <PaginationTable />
</template>


<style scoped></style>