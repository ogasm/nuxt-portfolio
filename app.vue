<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  transform: translateX(-1rem);
}
.page-enter-from {
  opacity: 0;
  filter: blur(1rem);
  transform: translateX(1rem);
}
</style>