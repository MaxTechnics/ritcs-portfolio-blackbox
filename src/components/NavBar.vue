<template>
    <nav class="nav">
        <img :src="rbxlogo">
        <div class="nav__links">
            <RouterLink :class="{ active: route.path === '/' }" to="/">Home</RouterLink>
            <RouterLink :class="{ active: route.path === '/projects' }" to="/projects">Projecten</RouterLink>
            <!-- <RouterLink :class="{ active: route.path === '/trajectories' }" to="/trajectories">Trajecten</RouterLink> -->
            <RouterLink :class="{ active: route.path === '/students' }" to="/students">Studenten</RouterLink>
        </div>
        <div class="right"></div>
        <!-- <button class="nav__btn">Log Out</button> -->
    </nav>
</template>

<script setup lang="ts">
import rbxlogo from '@/assets/AirBox_Logo_2023_Clean.png';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<style lang="scss" scoped>
img {
    height: 100%;
    margin-right: auto;
    padding: 1rem
}
.active {
    font-weight: bold !important;
}

.nav {
    background-color: #fff;
    height: 7rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: end;
    justify-content: center;
    border-bottom: 3px solid black;
}

.nav__btn {
    align-self: stretch;
    background-color: transparent;
    border: none;
    outline: transparent;
    font-family: inherit;
    padding: 0 4rem;
    font-size: 2.5rem;
    font-weight: 600;
    cursor: pointer;
    border-left: 2px solid black;
}

.nav__links {
    display: flex;
    gap: 2rem;
}

.nav__links a {
    color: black;
    text-decoration: none;
    font-size: 2.5rem;
    letter-spacing: 2px;
    // margin-right: 2rem;
    font-weight: 500;
}

.right {
margin-left: auto;
}
</style>
