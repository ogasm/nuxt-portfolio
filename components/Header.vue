<template>
  <header class="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50">
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold">Portfolio</NuxtLink>
      <div class="flex gap-6">
        <NuxtLink to="/works" class="hover:text-primary-600">Works</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-primary-600">Contact</NuxtLink>
      </div>
    </nav>
  </header>
</template>