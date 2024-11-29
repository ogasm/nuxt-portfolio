<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div class="aspect-video relative w-full max-w-[480px]">
      <img 
        :src="work.image" 
        :alt="work.title" 
        class="w-full h-full object-cover"
      >
    </div>
    <div class="p-4">
      <h3 class="text-lg font-bold mb-2">{{ work.title }}</h3>
      <p class="text-gray-600 mb-4">{{ work.description }}</p>
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in work.tags" 
          :key="tag" 
          class="px-2 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 transition-colors"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  work: {
    title: string;
    description: string;
    image: string;
    tags: string[];
  };
}

defineProps<Props>();
</script>