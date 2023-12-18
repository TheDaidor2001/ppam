<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useVoluntariosStore } from '../stores/voluntarios';
import PaginationTable from '@/components/Pagination-table.vue'
import type { Voluntario } from '../interfaces/voluntarios.interface';


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
                        <button class="bg-red-500 p-2 rounded-xl" @click="deleteUser(voluntario._id)">
                            <svg v-if="loadingDelete" aria-hidden="true"
                                class="w-8 h-8 text-red-300 animate-spin  fill-white" viewBox="0 0 100 101" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-trash text-white" width="24" height="24"
                                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M4 7l16 0" />
                                <path d="M10 11l0 6" />
                                <path d="M14 11l0 6" />
                                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                            </svg>

                        </button>
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