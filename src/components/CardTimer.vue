<script setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
    data: Object,
    currentView: String,
})
const cardProperty = ref({})
const viewMode = ref('daily')
const timeframe = computed(() => props.data.timeframes[props.currentView])
const previousState = computed(() => {
    switch (props.currentView) {
        case 'daily':
            return "Yesterday"
        case 'weekly':
            return "Last Week"
        case 'monthly':
            return "Last Month"
    }
})
onMounted(() => {
    switch (props.data.title) {
        case "Work":
            cardProperty.value = {
                color: "bg-Light-orange",
                icon: "/images/icon-work.svg",
            }
            break;
        case "Play":
            cardProperty.value = {
                color: "bg-Soft-blue",
                icon: "/images/icon-play.svg",
            }
            break;
        case "Study":
            cardProperty.value = {
                color: "bg-Light-red",
                icon: "/images/icon-study.svg",
            }
            break;
        case "Exercise":
            cardProperty.value = {
                color: "bg-Lime-green",
                icon: "/images/icon-exercise.svg",
            }
            break;
        case "Social":
            cardProperty.value = {
                color: "bg-Violet",
                icon: "/images/icon-social.svg",
            }
            break;
        case "Self Care":
            cardProperty.value = {
                color: "bg-Soft-orange",
                icon: "/images/icon-self-care.svg",
            }
            break;
        default:
            cardProperty.value = {
                color: "bg-Light-red",
                icon: "/images/icon-work.svg",
            }
            break;
    }
})
</script>

<template>
    <div class="relative w-full rounded-2xl pt-10 border-0 overflow-clip group" :class="cardProperty.color">
        <img class="absolute -top-2 right-4 z-0" :src="cardProperty.icon" alt="">
        <div
            class="relative bg-Dark-blue rounded-t-2xl p-6 z-[2] group-hover:bg-Desaturated-blue transition-colors duration-150">
            <div class="flex justify-between items-center">
                <p class="text-white font-medium">{{ data.title }}</p>
                <span class="cursor-pointer">
                    <img src="/images/icon-ellipsis.svg" alt="more">
                </span>
            </div>
            <div class="flex lg:flex-col lg:items-start justify-between items-end gap-2 mt-2 md:mt-4">
                <p class="text-3xl lg:text-5xl text-white font-light">{{ timeframe.current }}hrs</p>
                <p class="text-white/60 lg:text-sm">{{ previousState }} - {{ timeframe.previous }}hrs</p>
            </div>
        </div>
    </div>
</template>