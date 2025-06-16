<template>
    <section v-if="activeData">
        <div class="hero">
            <div class="box"></div>
            <span>
                <h1>{{ activeData.title }}</h1>
                <p v-if="activeData.subtitle">{{ activeData.subtitle }}</p>
                <br>
                <p>{{ activeData.description }}</p>
            </span>
        </div>

        <div class="projects">
            <h2>Credits</h2>

            <p v-for="credit in activeData.credits" :key="credit.function + credit.personID">{{ credit.function }}: {{ students[credit.personID].first_name }} {{ students[credit.personID].last_name }}</p>
        </div>
    </section>
    <section v-else>
        <h1>Project not found, are you being delusional?</h1>
    </section>
</template>


<script setup lang="ts">
import { onBeforeMount, ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { projects as allProjects, type PortfolioProject } from '@/data/projects'; // Assuming you have a projects data file
import DetailViewProjectCard from '@/components/DetailViewProjectCard.vue';
import { students } from '@/data/students';

const route = useRoute();
const activeData = ref<PortfolioProject>();

const filteredProjects = computed(() => {
    if (!activeData.value) return [];
    return allProjects.filter(project =>
        project.credits.some(credit => credit.personID === activeData.value?.id)
    );
});

const init = () => {
    console.log('Loading project view for routename', route.params.id);

    const projdata = allProjects.find(project => project.id === route.params.id);

    if (!projdata) {
        console.error('No proj matchede');
        activeData.value = undefined;
        return;
    }
    activeData.value = projdata;
}

onBeforeMount(() => {
    init()
})


watch(() => route.params.id, (newid, oldid) => {
    init()
})
</script>

<style lang="scss" scoped>
section {
    // background: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
}

.hero {
    width: var(--content-width);
    // background-color: green;
    display: flex;
    padding: 2rem;
    gap: 2rem;

    h1 {
        margin-top: 2rem;
        font-size: 5rem;
    }

    p {
        font-size: 2rem;
    }

    .qr {
        height: 200px;
    }
}

.projects {
    padding: 0 2rem 2rem 2rem;
    // background: blue;
    width: var(--content-width);

    h2 {
        padding: 2rem 0;
    }
}

.projdetails {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.box {
    aspect-ratio: 16/9;
    width: 500px;
    box-shadow: 5px 5px 0 #000;

    background-color: orange;
}
</style>
