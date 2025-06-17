<template>
    <section v-if="activeData">
        <div class="hero">
            <img class="box" :src="activeData.image">
            <span>
                <h1>{{ activeData.title }}</h1>
                <p v-if="activeData.subtitle">{{ activeData.subtitle }}</p>
                <br>
                <p>{{ activeData.description }}</p>
            </span>
        </div>

        <div class="projects">
            <h2>Credits</h2>
            <div class="window">
                <table>
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Job</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="credit in activeData.credits" :key="credit.function + credit.personID">
                            <td>{{ credit.function }}</td>
                            <td>{{ students[credit.personID].first_name }} {{ students[credit.personID].last_name }}</td>
                            <td style="display: flex; justify-content: center; align-content: center;">
                                <ButtonInput @click="router.push({ path: `/student/${credit.personID}` })">Bekijken</ButtonInput>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
    <section v-else>
        <h1>Project not found, are you being delusional?</h1>
    </section>
</template>


<script setup lang="ts">
import { onBeforeMount, ref, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { projects as allProjects, type PortfolioProject } from '@/data/projects'; // Assuming you have a projects data file
import DetailViewProjectCard from '@/components/DetailViewProjectCard.vue';
import { students } from '@/data/students';
import ButtonInput from '@/components/ButtonInput.vue';

const route = useRoute();
const router = useRouter();

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


.window {
    // background-color: #fff;
    border: 3px solid var(--shadow_color);
    box-shadow: 10px 10px 0 var(--shadow_color);
}
.window h2 {
    border-bottom: 3px solid var(--shadow_color);
    padding: 1rem 3rem;
    position: relative;
    padding-right: 7rem;
    font-size: 3.5rem;
}
.window h2::after {
    content: 'x';
    display: block;
    position: absolute;
    width: 5rem;
    height: 100%;
    border-left: 3px solid var(--shadow_color);
    top: 0;
    right: 0;
    display: grid;
    place-items: center;
}

table {
    padding: 1rem 3rem 2rem 3rem;
    width: 100%;
    border-collapse: collapse;
}

tbody {
    font-weight: 600;
}

tbody tr:nth-child(odd) {
    background-color: var(--accent_blu); /* Light gray or any color you like */
}

table td{
    padding-left: 1rem;
    font-size: 2.5rem;
    font-weight: 500;
    // padding-right: 3rem;
    // padding-bottom: 1rem;
    // padding-bottom: 2rem;
}
table th{
    padding-left: 1rem;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: left;
    padding-right: 1rem;
    // padding-bottom: .8rem;
    padding-bottom: 1.5rem;
}

</style>
