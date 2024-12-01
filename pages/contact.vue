<template>
  <div class="container mx-auto px-4 py-20">
    <h1 class="text-3xl font-bold mb-8">Contact</h1>
    
    <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto">
      <div class="mb-6">
        <label class="block mb-2">お名前</label>
        <input 
          v-model="formData.name"
          type="text"
          required
          class="w-full px-4 py-2 border rounded-lg"
        >
      </div>

      <div class="mb-6">
        <label class="block mb-2">メールアドレス</label>
        <input 
          v-model="formData.email"
          type="email"
          required
          class="w-full px-4 py-2 border rounded-lg"
        >
      </div>

      <div class="mb-6">
        <label class="block mb-2">メッセージ</label>
        <textarea 
          v-model="formData.message"
          required
          rows="5"
          class="w-full px-4 py-2 border rounded-lg"
        ></textarea>
      </div>

      <button 
        type="submit"
        class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        送信する
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const formData = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = async () => {
  // ここにフォーム送信の処理を実装
  console.log('Form submitted:', formData.value)
}
</script>