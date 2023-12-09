<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {}
    }
})
</script>

<template>
    <div class="flex w-screen h-screen p-10">
        <slot></slot>
    </div>
</template>