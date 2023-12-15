<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
    <button class="bg-cyan-500 px-4 py-2 rounded-xl text-white hover:bg-cyan-600 transition-colors" @click="router.back()">
        Volver
    </button>
</template>
