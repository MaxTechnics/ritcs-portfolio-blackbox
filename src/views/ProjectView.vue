<template>
    <section class="project_container">
        <h2>Onze projecten</h2>
        <ProjectCard title="Inkart" tagline="Live captatie en uitzending" description="Plankgas en plastronneke" :tags="['AVT', 'Multicam']" />
        <ProjectCard title="Inkart" tagline="Live captatie en uitzending" description="Plankgas en plastronneke" :tags="['AVT', 'Multicam']" />
        <ProjectCard title="Inkart" tagline="Live captatie en uitzending" description="Plankgas en plastronneke" :tags="['AVT', 'Multicam']" />
        <ProjectCard title="Inkart" tagline="Live captatie en uitzending" description="Plankgas en plastronneke" :tags="['AVT', 'Multicam']" />
    </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';

</script>

<style lang="scss" scoped>
.project_container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 4rem;
    gap: 2rem;
}
</style>
