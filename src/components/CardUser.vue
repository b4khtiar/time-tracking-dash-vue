<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
    user: Object,
    defaultView: String
})
const emit = defineEmits(['viewMode'])
const viewMode = ref('daily')
const switchMode = (mode) => {
    viewMode.value = mode
    emit('viewMode', mode)
}
onMounted(() => {
    if (props.defaultView) switchMode(props.defaultView)
})
</script>

<template>
    <div class="flex flex-col w-full bg-Dark-blue rounded-2xl">
        <div class="flex h-full lg:flex-col items-center lg:items-start gap-4 lg:gap-6 bg-Blue p-6 rounded-2xl">
            <img class="w-16 h-16 rounded-full border-4 border-white/90" :src="user.avatar" alt="user avatar">
            <div>
                <p class="text-white/60">Report for</p>
                <p class="text-2xl lg:text-4xl font-light">{{ user.name }}</p>
            </div>
        </div>
        <div
            class="flex lg:flex-col lg:items-start lg:grow-0 md:justify-center justify-between gap-2 p-6 text-white/60">
            <button @click="switchMode('daily')" type="button" class="px-2 hover:text-white"
                :class="{ 'text-white': viewMode === 'daily' }">Daily</button>
            <button @click="switchMode('weekly')" type="button" class="px-2 hover:text-white"
                :class="{ 'text-white': viewMode === 'weekly' }">Weekly</button>
            <button @click="switchMode('monthly')" type="button" class="px-2 hover:text-white"
                :class="{ 'text-white': viewMode === 'monthly' }">Monthly</button>
        </div>
    </div>
</template>