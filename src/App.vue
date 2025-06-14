<template>
  <main>
    <NavBar />

    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition name="fade_core" mode="out-in">
          <Suspense timeout=100>
            <component :is="Component" />

            <template #fallback>
              <h1>thinking about it</h1>
            </template>
          </Suspense>
        </Transition>
      </template>
    </RouterView>

    <Footie />
  </main>
</template>

<script setup lang="ts">
import Hero from './components/Hero.vue';
import NavBar from './components/NavBar.vue';
import Footie from './components/Footie.vue';
import ProjectView from './views/ProjectView.vue';
import { ref } from 'vue';
import StudentView from './views/StudentView.vue';

const view = ref<'home' | 'student' | 'project'>('student');

</script>

<style lang="scss" scoped>
.fade_core-enter-active {
	transition: all 0.25s cubic-bezier(0.4, 0.14, 0.3, 1); /* Carbon motion expressive */
}

.fade_core-leave-active {
	transition: all 0.2s cubic-bezier(0.2, 0, 0.38, 0.9); /* Carbon motion productive */
}

.fade_core-enter-from,
.fade_core-leave-to {
	opacity: 0;
  scale: 0.9;
}

main {
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
