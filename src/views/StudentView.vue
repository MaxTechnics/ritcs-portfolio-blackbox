<template>
    <section class="usercontainer">
        <h2>Dit zijn wij!</h2>
        <div class="filtering">
            <fieldset>
                <div>
                    <label>
                        <input type="radio" name="radio" v-model="selectedFilter" value="all" />
                        <span>Alle</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" v-model="selectedFilter" value="avt" />
                        <span>AVT</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" v-model="selectedFilter" value="real" />
                        <span>Realisatie</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" v-model="selectedFilter" value="prod" />
                        <span>Productie</span>
                    </label>
                    <label>
                        <input type="radio" name="radio" v-model="selectedFilter" value="name" />
                        <span>Zoeken op naam</span>
                    </label>
                </div>
            </fieldset>

            <TextField v-if="selectedFilter === 'name'" v-model="searchQuery" placeholder="Zoeken" />
        </div>
        <TransitionGroup name="list" tag="div" class="usergrid">
            <UserCard v-for="person in filteredAndSortedStudents" @click="router.push({ path: `/student/${person.id}` })" :key="person.first_name + person.last_name" :name="`${person.first_name} ${person.last_name}`" :trajectory="person.traject" :img="person.img" />
        </TransitionGroup>
    </section>
</template>

<script setup lang="ts">
import UserCard from '../components/UserCard.vue';
import { nonLostStudents as students, type Traject } from '@/data/students';
import TextField from '@/components/TextField.vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()



// type Traject = 'AVT' | 'Realisatie' | 'Productie';

// interface PortfolioStudent {
//   first_name: string;
//   last_name: string;
//   traject: Traject;
//   website?: string;
// }

// const students: { [name: string]: PortfolioStudent } = {
//   john_doe: { first_name: 'John', last_name: 'Doe', traject: 'AVT' },
//   jane_smith: { first_name: 'Jane', last_name: 'Smith', traject: 'Productie' },
//   alice_jones: { first_name: 'Alice', last_name: 'Jones', traject: 'Realisatie' },
//   bob_brown: { first_name: 'Bob', last_name: 'Brown', traject: 'AVT' },
// };

const selectedFilter = ref<'all' | 'avt' | 'real' | 'prod' | 'name'>('all');
const searchQuery = ref('');

const studentsArray = computed(() => Object.values(students));

const filtertotype = (): Traject => {
    switch (selectedFilter.value) {
        case 'avt':
            return 'AVT';
        case 'real':
            return 'Realisatie';
        case 'prod':
            return 'Productie';
        default:
            console.error('Invalid type');
            throw 'Invalid'
    }

}

const filteredAndSortedStudents = computed(() => {
    let filtered = studentsArray.value;

    if (selectedFilter.value === 'all') {
        // No filtering at all
        filtered = studentsArray.value;
    } else if (selectedFilter.value === 'name') {
        // Filter only by name if search query exists
        if (searchQuery.value.trim() !== '') {
            const query = searchQuery.value.toLowerCase();
            filtered = filtered.filter(
                s =>
                    s.first_name.toLowerCase().includes(query) ||
                    s.last_name.toLowerCase().includes(query)
            );
        }
    } else {
        // Filter only by traject
        filtered = filtered.filter(s => s.traject === filtertotype());
    }

    // Sort by last_name then first_name
    return filtered.slice().sort((a, b) => {
        if (a.last_name === b.last_name) {
            return a.first_name.localeCompare(b.first_name);
        }
        return a.last_name.localeCompare(b.last_name);
    });
});
</script>

<style lang="scss" scoped>
.usercontainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    gap: 2rem;
    flex-grow: 1;
}

.usergrid {
    // width: var(--content-width);
    width: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;
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

	// &:first-child {
	// 	span {
	// 		border-radius: .375em 0 0 .375em;
	// 	}
	// }

	// &:last-child {
	// 	span {
	// 		border-radius: 0 .375em .375em 0;
	// 	}
	// }
}

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0.14, 0.3, 1); /* Carbon motion expressive */;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(0px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
