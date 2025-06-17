<template>
    <div class="window">
        <h2>{{ project.title }}</h2>
        <p>{{ project.description }}</p>
        <table class="weekly__table">
            <thead>
                <tr>
                    <th>Student</th>
                    <th>Job</th>
                    <!-- <th>Time</th> -->
                </tr>
            </thead>
            <tbody>
                <tr v-for="credit in filteredCredits">
                    <td @click="router.push(`/student/${credit.personID}`)">{{ getstudent(credit.personID) }}</td>
                    <!-- <td @click="router.push(`/student/${credit.personID}`)">{{ `${credit.personID}` }}</td> -->
                    <td>{{ credit.function }}</td>
                    <!-- <td>6:00 AM</td> -->
                </tr>
            </tbody>
        </table>
        <ButtonInput @click="router.push({ path: `/project/${project.id}` })" class="cardbtn">Bekijk project</ButtonInput>
    </div>
</template>

<script setup lang="ts">
import { type PortfolioProject } from '@/data/projects';
import { students } from '@/data/students';
import { useRouter } from 'vue-router';
import ButtonInput from './ButtonInput.vue';
import { computed } from 'vue';

const router = useRouter();

const getstudent = (id: string) => {
    console.log('studid', id)

    const stobj = students[id]
    console.log('student obj', stobj);

    return `${stobj.first_name} ${stobj.last_name}`;
}

const props = defineProps<{
    project: PortfolioProject;
    filterbystudent?: string;
}>();

const filteredCredits = computed(() => {
    if (!props.project.credits) return [];

    return props.filterbystudent
        ? props.project.credits.filter(
            (c) => c.personID === props.filterbystudent
        )
        : props.project.credits;
});
</script>

<style lang="scss" scoped>
.window {
    // background-color: #fff;
    background-color: var(--bg_color);
    border: 3px solid var(--shadow_color);
    box-shadow: 10px 10px 0 var(--shadow_color);
    margin: auto;
    width: 100%;
}
.window h2 {
    border-bottom: 3px solid var(--shadow_color);
    padding: 1rem 3rem;
    position: relative;
    padding-right: 7rem;
    font-size: 3.5rem;
}

p {
    padding: 1rem 3rem;
}

.cardbtn {
    margin: 1rem 3rem;
}

// .window h2::after {
//     content: 'x';
//     display: block;
//     position: absolute;
//     width: 5rem;
//     height: 100%;
//     border-left: 3px solid black;
//     top: 0;
//     right: 0;
//     display: grid;
//     place-items: center;
// }

table {
    padding: 1rem 3rem 2rem 3rem;
}
table td{
    font-size: 2rem;
    font-weight: 500;
    padding-right: 3rem;
    padding-bottom: 1rem;
}
table th{
    font-size: 2.5rem;
    font-weight: 700;
    text-align: left;
    padding-right: 1rem;
    padding-bottom: .8rem;
}

</style>
