<template>
    <div>
        <Hero />

        <section class="project_container">
            <h2>Projecten in de spotlight</h2>
            <ProjectCard title="Inkart" tagline="Live captatie en uitzending" description="Plankgas en plastronneke" :tags="['AVT', 'Multicam']" />
            <ProjectCard title="Inkart" tagline="Live captatie en uitzending" description="Plankgas en plastronneke" :tags="['AVT', 'Multicam']" />
            <ProjectCard title="Inkart" tagline="Live captatie en uitzending" description="Plankgas en plastronneke" :tags="['AVT', 'Multicam']" />
            <ProjectCard title="Inkart" tagline="Live captatie en uitzending" description="Plankgas en plastronneke" :tags="['AVT', 'Multicam']" />
        </section>
    </div>
</template>

<script setup lang="ts">
import Hero from '@/components/Hero.vue';
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
