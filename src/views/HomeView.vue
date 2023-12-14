<script setup lang="ts">
import CardIndex from '@/components/Card-index.vue';


</script>

<template>
  <main class="my-20 grid grid-cols-1 lg:grid-cols-3 items-center max-w-6xl mx-auto gap-5">
    <RouterLink :to="{ name: 'voluntarios' }">
      <CardIndex title="Lista de Participantes" text-color="text-cyan-500" border-color="border-cyan-500"
        text="Aquí podras ver yy gestionar toda la información de los participantes del PPAM" bgColor="hover:bg-cyan-500">
        <svg xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16 mx-auto text-cyan-500 group-hover:text-white transition-colors" width="24" height="24"
          viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
          <path d="M6 21v-2a4 4 0 0 1 4 -4h1.5" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M20.2 20.2l1.8 1.8" />
        </svg>
      </CardIndex>
    </RouterLink>
    <CardIndex bgColor="hover:bg-green-500" text-color="text-green-500" title="Añadir Participantes"
      border-color="border-green-500"
      text="Aquí podrás añadir toda la información para crear un nuevo participante del PPAM" color="green-500">
      <svg xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16 mx-auto text-green-500 group-hover:text-white transition-colors" width="24" height="24"
        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
        <path d="M16 19h6" />
        <path d="M19 16v6" />
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4" />
      </svg>
    </CardIndex>
    <CardIndex bgColor="hover:bg-fuchsia-500" text-color="text-fuchsia-500" title="Crear programa"
      border-color="border-fuchsia-500" text="Aquí crearás y organizarás el programa del PPAM">
      <svg xmlns="http://www.w3.org/2000/svg"
        class="h-16 w-16 mx-auto text-fuchsia-500 group-hover:text-white transition-colors" width="24" height="24"
        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
        stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
        <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      </svg>
    </CardIndex>
  </main>
</template>
