<template>
    <div>
        <Hero />

        <section class="project_container">
            <h2>Projecten in de spotlight</h2>
            <ProjectCard title="Inkart" tagline="Live captatie en uitzending" description="Plankgas en plastronneke" :tags="['AVT', 'Multicam']" />
            <ProjectCard title="Inkart" tagline="Live captatie en uitzending" description="Plankgas en plastronneke" :tags="['AVT', 'Multicam']" />
            <ProjectCard title="Inkart" tagline="Live captatie en uitzending" description="Plankgas en plastronneke" :tags="['AVT', 'Multicam']" />

            <ButtonInput @click="router.push({ path: '/projects' })" class="cta">Bekijk al onze projecten!</ButtonInput>
        </section>
    </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import ButtonInput from '@/components/ButtonInput.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<style lang="scss" scoped>
.project_container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 4rem;
    gap: 2rem;
}

.cta {
    padding: 2rem !important;
    font-weight: 800 !important;
}
</style>
