<template>
    <div class="usercard">
        <!-- <div class="box"> -->

        <!-- </div> -->

        <img class="box" :src="img">
        <h3>{{ name }}</h3>
        <p>{{ trajectory }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    name: string;
    trajectory: string;
    img: string;
}>()
</script>

<style lang="scss" scoped>
.temp {
    display: flex;
    justify-content: center;
    padding: 5rem;
}
.usercard {
    border: 2px solid var(--shadow_color);
    padding: 2rem;
    box-shadow: 5px 5px 0 var(--shadow_color);
    width: min-content;
    transition: box-shadow 0.2s ease,
}

.usercard:hover {
    box-shadow: 8px 8px 0 var(--shadow_color);
}

h3 {
    text-wrap: wrap;
}

.box {
    aspect-ratio: 1/1;
    width: 250px;
    background-color: var(--yellow); 
    border-radius: 5px;
}
</style>
