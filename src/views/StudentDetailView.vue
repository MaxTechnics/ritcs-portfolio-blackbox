<template>
    <section v-if="activeData">
        <div class="hero">
            <div class="box"></div>
            <span>
                <h1>{{ activeData.first_name }} {{ activeData.last_name }}</h1>
                <p v-if="activeData.tagline">{{ activeData.tagline }}</p>
                <br>
                <p>Functies: Chef Techniek, All-rounder</p>
                <p v-if="activeData.website">Website: {{ activeData.website }}</p>
            </span>
            <img v-if="activeData.website" :src="qr" class="qr" style="margin-left: auto;">
        </div>

        <div class="projects">
            <h2>Projecten</h2>

            <p>// List</p>
            <ul>
                <li v-for="project in filteredProjects" :key="project.id">{{ project.title }}</li>
            </ul>
        </div>
    </section>
    <section v-else>
        <h1>Student not found, are you being delusional?</h1>
    </section>
</template>


<script setup lang="ts">
import { students, type PortfolioStudent } from '@/data/students';
import { onBeforeMount, ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useQRCode } from '@vueuse/integrations/useQRCode';
import type { PortfolioProject } from '@/data/projects';
import { projects as allProjects } from '@/data/projects'; // Assuming you have a projects data file

const route = useRoute();
const activeData = ref<PortfolioStudent>();
const websiteforqr = computed(() => {
    return activeData.value?.website || '';
})
const qr = useQRCode(websiteforqr, {
    color: {
        dark: '#00F',  // Blue dots
        light: '#0000' // Transparent background
    }
});

const filteredProjects = computed(() => {
    if (!activeData.value) return [];
    return allProjects.filter(project =>
        project.credits.some(credit => credit.personID === activeData.value?.id)
    );
});

const init = () => {
    console.log('Loading user detail view for routename', route.params.name);
    const userdata = students[route.params.name as string];

    if (!userdata) {
        console.error('No user matchede');
        activeData.value = undefined;
        return;
    }
    activeData.value = userdata;
}

onBeforeMount(() => {
    init()
})


watch(() => route.params.name, (newname, oldname) => {
    init()
})
</script>

<style lang="scss" scoped>
section {
    background: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
}

.hero {
    width: var(--content-width);
    background-color: green;
    display: flex;
    padding: 2rem;
    gap: 2rem;

    h1 {
        margin-top: 2rem;
        font-size: 5rem;
    }

    .qr {
        height: 200px;
    }
}

.projects {
    padding: 0 2rem 2rem 2rem;
    background: blue;
    width: var(--content-width);
}

.box {
    aspect-ratio: 1/1;
    width: 300px;
    box-shadow: 5px 5px 0 #000;

    background-color: orange;
}
</style>
