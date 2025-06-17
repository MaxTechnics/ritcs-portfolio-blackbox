<template>
    <footer class="footie">
        <span style="margin-right: auto; padding: 2rem;">RITCS Portfolio Event 2025</span>
        <button class="footie__btn" @click="router.push('/student/maximcoppieters')">
            <span>Written by Maxim</span><br>
            <!-- <span>Powered by Backstage</span> -->
        </button>
    </footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style lang="scss" scoped>
.footie {
    margin-top: 2rem;
    background-color: #fff;
    height: 7rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    // justify-content: center;
    border-top: 3px solid black;
}

.footie__btn {
    align-self: stretch;
    background-color: transparent;
    border: none;
    outline: transparent;
    font-family: inherit;
    padding: 0 4rem;
    // font-size: 2.5rem;
    font-size: 2rem;
    font-weight: 600;
    cursor: pointer;
    border-left: 2px solid black;
}

// .nav__links {
//     display: flex;
//     gap: 2rem;
// }

.footie_links a {
    color: black;
    text-decoration: none;
    font-size: 2.5rem;
    letter-spacing: 2px;
    // margin-right: 2rem;
    font-weight: 500;
}
</style>
