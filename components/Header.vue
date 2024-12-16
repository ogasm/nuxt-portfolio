<template>
  <header class="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold">Ami's Portfolio</NuxtLink>
      <div class="flex gap-6">
        <NuxtLink 
          v-for="link in links" 
          :key="link.path"
          :to="link.path"
          class="hover:text-primary-600 transition-colors"
          active-class="text-primary-600"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const links = [
  { path: '/skills', name: 'Skills' },
  { path: '/works', name: 'Works' },
  { path: '/contact', name: 'Contact' }
]
</script>