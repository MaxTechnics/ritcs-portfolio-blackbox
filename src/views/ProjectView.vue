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
                        <input type="radio" name="radio" v-model="selectedFilter" value="avt" />
                        <span>1e jaar</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" v-model="selectedFilter" value="real" />
                        <span>2e jaar</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" v-model="selectedFilter" value="prod" />
                        <span>3e jaar</span>
                    </label>
                </div>
            </fieldset>

            <TextField v-if="selectedFilter === 'name'" v-model="searchQuery" placeholder="Zoeken" />
        </div>
        <ProjectCard v-for="proj in projects" :key="proj.id" :title="proj.title" :tagline="proj.subtitle" description="Plankgas en plastronneke" :tags="['AVT', 'Multicam']" />
    </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/data/projects';
import { ref } from 'vue';

const selectedFilter = ref();

</script>

<style lang="scss" scoped>
.project_container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 4rem;
    gap: 2rem;
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
	border-color: #2260ff;
	box-shadow: 0 0 0 4px #b5c9fc;
}

fieldset {
    font-size: clamp(14px, 2.5vw, 28px);
    box-shadow: 5px 5px 0 black;
    border: none;
	div {
        border: 2px solid black;
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
		box-shadow: 0 0 0 0.0625em #0043ed;
		background-color: #dee7ff;
		z-index: 1;
		color: #0043ed;
	}
}

label {
	span {
		display: block;
		cursor: pointer;
		background-color: #fff;
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
