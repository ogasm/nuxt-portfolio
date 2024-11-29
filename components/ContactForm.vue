<script setup lang="ts">
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)
const submitError = ref('')

const handleSubmit = async () => {
  try {
    isSubmitting.value = true
    // フォーム送信処理
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData.value)
    })
    // 成功時の処理
  } catch (error) {
    submitError.value = '送信に失敗しました'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto p-6">
    <div class="mb-6">
      <label class="block mb-2">お名前</label>
      <input 
        v-model="formData.name"
        type="text"
        required
        class="w-full px-4 py-2 border rounded-lg"
      >
    </div>
    <!-- 他のフォーム要素 -->
    <button 
      type="submit"
      :disabled="isSubmitting"
      class="btn-primary w-full"
    >
      {{ isSubmitting ? '送信中...' : '送信する' }}
    </button>
  </form>
</template>