<template>
  <div class="container mx-auto px-4 py-20">
    <!-- フォーム表示 -->
    <div v-if="!isSubmitted">
      <h1 class="text-4xl font-bold mb-12">Contact</h1>
      
      <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto">
        <!-- 名前 -->
        <div class="mb-8">
          <label for="name" class="block text-sm font-medium mb-2">お名前</label>
          <input
            id="name"
            v-model="form.name"
            type="text"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            :class="{ 'border-red-500': errors.name }"
          >
          <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
        </div>

        <!-- メールアドレス -->
        <div class="mb-8">
          <label for="email" class="block text-sm font-medium mb-2">メールアドレス</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            :class="{ 'border-red-500': errors.email }"
          >
          <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
        </div>

        <!-- 件名 -->
        <div class="mb-8">
          <label for="subject" class="block text-sm font-medium mb-2">件名</label>
          <input
            id="subject"
            v-model="form.subject"
            type="text"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            :class="{ 'border-red-500': errors.subject }"
          >
          <p v-if="errors.subject" class="mt-1 text-sm text-red-500">{{ errors.subject }}</p>
        </div>

        <!-- メッセージ -->
        <div class="mb-8">
          <label for="message" class="block text-sm font-medium mb-2">メッセージ</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="6"
            class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            :class="{ 'border-red-500': errors.message }"
          ></textarea>
          <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
        </div>

        <!-- 送信ボタン -->
        <div class="text-center">
          <button
            type="submit"
            class="px-8 py-3 bg-gradient-to-r from-[#4facfe] to-[#00d4e0] text-white rounded-lg hover:opacity-90 transition-opacity"
            :disabled="isSubmitting"
          >
            {{ isSubmitting ? '送信中...' : '送信する' }}
          </button>
        </div>
      </form>
    </div>

    <!-- 完了画面 -->
    <div v-else class="max-w-2xl mx-auto text-center">
      <h1 class="text-4xl font-bold mb-6">お問い合わせありがとうございます</h1>
      <p class="text-gray-600 mb-12">
        内容を確認次第、折り返しご連絡させていただきます。
      </p>
      <NuxtLink 
        to="/" 
        class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#4facfe] to-[#00d4e0] text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        トップページに戻る
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const form = ref<FormData>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = ref<FormErrors>({})
const isSubmitting = ref(false)
const isSubmitted = ref(false)

const validateForm = (): boolean => {
  const newErrors: FormErrors = {}

  if (!form.value.name) {
    newErrors.name = 'お名前を入力してください'
  }

  if (!form.value.email) {
    newErrors.email = 'メールアドレスを入力してください'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    newErrors.email = '有効なメールアドレスを入力してください'
  }

  if (!form.value.subject) {
    newErrors.subject = '件名を入力してください'
  }

  if (!form.value.message) {
    newErrors.message = 'メッセージを入力してください'
  }

  errors.value = newErrors
  return Object.keys(newErrors).length === 0
}

const handleSubmit = async () => {
  console.log('handleSubmit called') // 追加
  if (!validateForm()) {
    console.log('validation failed') // 追加
    return
  }
  
  console.log('validation passed') // 追加
  isSubmitting.value = true
  try {
    console.log('sending request...') // 追加
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value)
    })

    console.log('response:', response) // 追加

    if (!response.ok) throw new Error('送信に失敗しました')
    
    isSubmitted.value = true
    console.log('submission successful') // 追加
  } catch (error) {
    console.error('送信エラー:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>