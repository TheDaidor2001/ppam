<script setup lang="ts">
interface Props {
    title: string,
    text: string,
    bgColor: string,
    textColor: string,
    borderColor: string
}

defineProps<Props>()

</script>
<template>
    <article
        class="border-2  w-3/4 md:w-1/2 mx-auto lg:w-auto px-5 py-10 cursor-pointer rounded-xl min-h-[270px] group transition-colors"
        :class="`${bgColor} ${borderColor}`">
        <slot />

        <h2 :class="textColor" class="text-center font-bold mt-5 text-2xl group-hover:text-white">{{ title }}</h2>
        <p class="text-center mt-4 text-sm text-gray-600 group-hover:text-white w-3/4 mx-auto">{{ text }}</p>
    </article>
</template>


