<!-- pages/index.vue -->
<template>
  <div class="container mx-auto px-4">
    <section class="py-20">
      <h1 class="text-4xl font-bold mb-6">Frontend Developer</h1>
      <p class="text-lg text-gray-600">
        Nuxt.js と Vue.js を使用したWeb開発のスペシャリストです
      </p>
    </section>

    <FadeInUp>
      <section class="py-20">
        <h2 class="text-2xl font-bold mb-8">Recent Works</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <WorkCard 
            v-for="work in works" 
            :key="work.id" 
            :work="work" 
          />
        </div>
      </section>
    </FadeInUp>
  </div>
</template>

<script setup lang="ts">
import { useWorks } from '../composables/useWorks'
import { onMounted } from 'vue'

const { works } = useWorks()

onMounted(() => {
  // コンポーネントがマウントされた時の処理
  console.log('Component mounted')
})
</script>