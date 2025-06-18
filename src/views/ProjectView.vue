<template>
    <section class="project_container">
        <h2>Onze projecten</h2>
        <div class="filtering">
            <fieldset>
                <div>
                    <label>
                        <input type="radio" name="radio" v-model="selectedFilter" value="all" />
                        <span>Alle</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" v-model="selectedFilter" value="year1" />
                        <span>1e jaar</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" v-model="selectedFilter" value="year2" />
                        <span>2e jaar</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" v-model="selectedFilter" value="year3" />
                        <span>3e jaar</span>
                    </label>
                </div>
            </fieldset>
        </div>
        <ProjectCard v-for="proj in filteredProjects" @click="router.push({ path: `/project/${proj.id}` })" :key="proj.id" :title="proj.title" :tagline="proj.subtitle" :description="proj.description" :tags="proj.tags" :image="proj.image" />
    </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/data/projects';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

type YearFitler = 'all' | 'year1' | 'year2' | 'year3';
const selectedFilter = ref<YearFitler>('all');

const filteredProjects = computed(() => {
    if (selectedFilter.value === 'all') return projects;

    const yearMap: Record<Exclude<YearFitler, 'all'>, string> = {
        year1: '2223',
        year2: '2324',
        year3: '2425'
    };

    return projects.filter(proj => proj.workyear === yearMap[selectedFilter.value as Exclude<YearFitler, 'all'>]);
});
</script>

<style lang="scss" scoped>
.project_container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 4rem;
    gap: 2rem;
    flex-grow: 1;
}


.filtering {
    display: flex;
    gap: 2rem;
}

*,
*:after,
*:before {
	box-sizing: border-box;
}

:focus {
    outline: 0;
	border-color: var(--accent_red);
	box-shadow: 0 0 0 4px #b5c9fc;
}

fieldset {
    font-size: clamp(14px, 2.5vw, 28px);
    box-shadow: 5px 5px 0 var(--shadow_color);
    border: none;
    text-transform: uppercase;
	div {
        border: 2px solid var(--shadow_color);
		display: flex;
		flex-wrap: wrap;
		// margin-top: 0.5rem;
		justify-content: center;
	}
}

input[type="radio"] {
	// Code to hide the input
	clip: rect(0 0 0 0);
	clip-path: inset(100%);
	height: 1px;
	overflow: hidden;
	position: absolute;
	white-space: nowrap;
	width: 1px;
	&:checked + span {
		// box-shadow: 0 0 0 0.0625em #0043ed;
		box-shadow: 0 0 0 0.0625em var(--accent_red);
		// background-color: #dee7ff;
		background-color: var(--bg_color);
		z-index: 1;
		color: var(--accent_red);
	}
}

label {
	span {
		display: block;
		cursor: pointer;
		// background-color: #fff;
		padding: 0.375em .75em;
		position: relative;
		margin-left: .0625em;
		// box-shadow: 0 0 0 0.0625em #b5bfd9;
		letter-spacing: .05em;
		color: #3e4963;
		text-align: center;
		transition: background-color .5s ease;
	}
}
</style>
