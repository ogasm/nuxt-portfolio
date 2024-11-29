<!-- components/FadeInUp.vue -->
<script setup lang="ts">
const fadeInUp = ref(false)
const element = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        fadeInUp.value = true
      }
    },
    {
      threshold: 0.1
    }
  )

  if (element.value) {
    observer.observe(element.value)
  }
})
</script>

<template>
  <div 
    ref="element"
    :class="[
      'transition-all duration-700 transform',
      fadeInUp ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
    ]"
  >
    <slot />
  </div>
</template>