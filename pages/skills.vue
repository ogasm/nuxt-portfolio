<template>
  <div class="container mx-auto px-4 py-20">
    <h1 class="text-4xl font-bold mb-12">Skills</h1>

    <!-- スキルカテゴリー -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      <div 
        v-for="category in skillCategories" 
        :key="category.category"
        class="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 class="text-2xl font-bold mb-6">{{ category.category }}</h2>
        <div class="space-y-6">
          <div 
            v-for="skill in category.skills" 
            :key="skill.name"
            class="skill-item"
            @mouseenter="highlightRelatedWorks(skill.name)"
            @mouseleave="clearHighlight"
          >
            <div class="flex justify-between mb-2">
              <span class="font-medium">{{ skill.name }}</span>
              <span class="text-gray-600">{{ skill.experience }}年</span>
            </div>
            <div class="h-2 bg-gray-200 rounded overflow-hidden">
              <div 
                class="h-full transition-all duration-300 bg-gradient-to-r from-[#4facfe] to-[#00d4e0]"
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 関連作品 -->
    <div>
      <h2 class="text-2xl font-bold mb-6">Related Works</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(works, skill) in relatedWorks" 
          :key="skill"
          class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          :class="{ 'gradient-border': highlightedSkill === skill }"
        >
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">{{ skill }}</h3>
            <ul class="space-y-2">
              <li 
                v-for="work in works" 
                :key="work"
                class="text-gray-600"
              >
                {{ work }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  level: number
  experience: number
}

interface SkillCategory {
  category: string
  skills: Skill[]
}

const skillCategories = ref<SkillCategory[]>([
  {
    category: 'Web制作',
    skills: [
      { name: 'HTML / CSS', level: 100, experience: 18 },
      { name: 'jQuery', level: 100, experience: 12 },
      { name: 'SCSS', level: 95, experience: 8 },
      { name: 'WordPress', level: 85, experience: 7 },
    ]
  },
  {
    category: 'フロントエンド開発',
    skills: [
      { name: 'JavaScript', level: 85, experience: 3 },
      { name: 'Vue.js', level: 80, experience: 3 },
      { name: 'TypeScript', level: 70, experience: 1 },
      { name: 'Nuxt3', level: 65, experience: 1 },
      { name: 'Astro', level: 50, experience: 1 },
      { name: 'Next', level: 30, experience: 1 }
    ]
  },
  {
    category: '開発ツール',
    skills: [
      { name: 'バージョン管理(Git)', level: 90, experience: 5 },
      { name: 'Photoshop', level: 100, experience: 12 },
      { name: 'Illustrator', level: 70, experience: 5 },
      { name: 'デザインツール(XD / Figma)', level: 65, experience: 3 },
      { name: 'Notion', level: 75, experience: 5 },
    ]
  }
])

const relatedWorks = ref({
  'HTML': ['Project A'],
  'CSS': ['Project B'],
  'JavaScript': ['Project C', 'Project D'],
  'Vue.js': ['Project E'],
  'Nuxt3': ['Project F'],
  'Node.js': ['Project G'],
  'Express': ['Project H'],
  'MongoDB': ['Project I'],
  'React Native': ['Project J']
})

const highlightedSkill = ref<string | null>(null)

const highlightRelatedWorks = (skillName: string) => {
  highlightedSkill.value = skillName
}

const clearHighlight = () => {
  highlightedSkill.value = null
}
</script>

<style scoped>
.skill-item {
  cursor: pointer;
}

.skill-item:hover .bg-blue-500 {
  opacity: 0.8;
}
.gradient-border {
  background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #4facfe, #00d4e0) border-box;
  border: 2px solid transparent;
}

.hover\:shadow-xl:hover {
  box-shadow: 0 0 15px rgba(79, 172, 254, 0.2);
}
</style>