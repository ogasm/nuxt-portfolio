<template>
  <div class="container mx-auto px-4 py-20">
    <h1 class="text-4xl font-bold mb-12">Skills</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="(experience, skill) in skills" 
           :key="skill" 
           class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 class="text-xl font-bold mb-2">{{ skill }}</h3>
        <p class="text-gray-600">経験年数：{{ experience }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = {
  'Nuxt3': '経験1年',
  'JavaScript': '10年',
  'CSS': '5年',
  'HTML': '10年',
  'Vue.js': '3年',
  'React': '2年',
  'Node.js': '4年'
}
</script>