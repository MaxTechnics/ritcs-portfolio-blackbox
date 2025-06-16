<template>
    <h1>Configuration</h1>

    <label for="">Blinken server</label>
    <input v-model="server" type="text">

    <label for="">caspar channel</label>
    <input v-model="ccg" type="text">
</template>

<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';

const server = useLocalStorage('blinken_server', '');
const ccg = useLocalStorage('blinken_caspar_channel', '');

</script>
