<template>
  <div class="works mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="work-item" v-for="work in works" :key="work.id">
        <h3>{{ work.title }}</h3>
        <p>{{ work.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [] // ここで 'works' プロパティを定義します
    };
  },
  // ... 既存のコード ...
}
</script>