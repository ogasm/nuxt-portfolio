<template>
  <div class="work-detail">
    <Suspense>
      <!-- メインコンテンツ -->
      <template #default>
        <div class="page-content">
          <div class="container mx-auto px-4 py-20">
            <div v-if="work">
              <!-- ヘッダーセクション -->
              <div class="mb-12">
                <h1 class="text-4xl font-bold mb-6">{{ work.title }}</h1>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span 
                    v-for="tag in work.tags" 
                    :key="tag"
                    class="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {{ tag }}
                  </span>
                </div>
                <p class="text-gray-600 text-lg">{{ work.description }}</p>
              </div>

              <!-- メイン画像 -->
              <div class="mb-12">
                <img 
                  :src="work.image" 
                  :alt="work.title"
                  class="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
                >
              </div>

              <!-- 制作プロセス -->
              <div class="mb-12">
                <h2 class="text-2xl font-bold mb-6">制作プロセス</h2>
                <div class="space-y-4">
                  <div 
                    v-for="(step, index) in work.process" 
                    :key="index"
                    class="flex items-start bg-gray-50 p-4 rounded-lg"
                  >
                    <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                      {{ index + 1 }}
                    </span>
                    <p class="text-gray-700">{{ step }}</p>
                  </div>
                </div>
              </div>

              <!-- 使用技術 -->
              <div class="mb-12">
                <h2 class="text-2xl font-bold mb-6">使用技術</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    v-for="tech in work.technologies" 
                    :key="tech.name"
                    class="bg-gray-50 p-6 rounded-lg"
                  >
                    <h3 class="font-bold text-lg mb-2">{{ tech.name }}</h3>
                    <p class="text-gray-600">{{ tech.description }}</p>
                  </div>
                </div>
              </div>

              <!-- 戻るボタン -->
              <div class="mt-12">
                <NuxtLink 
                  to="/" 
                  class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <span class="mr-2">←</span> 作品一覧に戻る
                </NuxtLink>
              </div>
            </div>

            <!-- 作品が見つからない場合 -->
            <div v-else class="text-center py-20">
              <h1 class="text-2xl font-bold mb-4">作品が見つかりませんでした</h1>
              <NuxtLink 
                to="/" 
                class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                トップページに戻る
              </NuxtLink>
            </div>
          </div>
        </div>
      </template>

      <!-- ローディング表示 -->
      <template #fallback>
        <div class="container mx-auto px-4 py-20">
          <div class="animate-pulse">
            <div class="h-8 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div class="h-4 bg-gray-200 rounded w-1/4 mb-12"></div>
            <div class="h-96 bg-gray-200 rounded mb-12"></div>
            <div class="space-y-4">
              <div class="h-4 bg-gray-200 rounded w-3/4"></div>
              <div class="h-4 bg-gray-200 rounded w-2/3"></div>
              <div class="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { getWorkById } = useWorks()

// 非同期でデータを取得
const work = ref(await getWorkById(parseInt(route.params.id as string)))

// ページタイトルの設定
useHead({
  title: work.value ? `${work.value.title} | Portfolio` : 'Work Not Found | Portfolio'
})
</script>

<style scoped>
.page-content {
  transition: all 0.3s ease;
}
</style>