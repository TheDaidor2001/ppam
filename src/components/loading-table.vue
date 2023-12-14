<script setup lang="ts">
let numbersPerPage = 10
</script>

<template>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead class="text-xs text-white uppercase bg-cyan-500  ">
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
            <tbody>
                <tr class="bg-white border-b" v-for="items in numbersPerPage" :key="items">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <div class="animate-pulse  w-full h-5 bg-gray-300 rounded-lg"></div>
                    </th>
                    <td class="px-6 py-4">
                        <div class="animate-pulse  w-full h-5 bg-gray-300 rounded-lg"></div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="animate-pulse  w-full h-5 bg-gray-300 rounded-lg"></div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="animate-pulse  w-full h-5 bg-gray-300 rounded-lg"></div>
                    </td>
                    <td class="px-6 py-4">
                        <div class="animate-pulse  w-full h-5 bg-gray-300 rounded-lg"></div>
                    </td>
                    <td class="px-6 py-4 flex gap-3">
                        <div class="animate-pulse  w-full h-5 bg-gray-300 rounded-lg"></div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>
