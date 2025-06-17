<template>
    <input @input="emits('update:modelValue', ($event.target! as HTMLInputElement).value)" :value="modelValue" :placeholder="placeholder" type="text">
</template>

<script setup lang="ts">

defineProps<{
    modelValue: string;
    placeholder?: string;
}>();

const emits = defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
input {
    background-color: var(--bg-yellow);
    border: 2px solid var(--shadow_color);
    font-family: inherit;
    font-size: 2rem;
    font-weight: 600;
    padding: .5rem 1rem;
    box-shadow: 5px 5px 0 var(--shadow_color);
    // margin-top: 2rem;
    // margin-bottom: 2rem;
    transition: all .2s;
}
input:active {
    // transform: scale(1.05);
    box-shadow: 8px 8px 0 var(--shadow_color);
}

</style>
