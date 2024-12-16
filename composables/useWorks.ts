//composables/useWorks.ts
import { ref } from 'vue'

interface Work {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  process: string[]
  technologies: Technology[]
}

interface Technology {
  name: string
  description: string
}

export const useWorks = () => {
  const works = ref<Work[]>([
    {
      id: 1,
      title: 'ポートフォリオサイト',
      description: 'Nuxt3とTailwindCSSを使用したポートフォリオサイトを構築',
      image: '/images/work1.svg',
      tags: ['Nuxt3', 'Vue.js', 'TailwindCSS'],
      process: [
        'ニーズ分析と設計',
        'フロントエンド実装',
        'テストとデプロイ'
      ],
      technologies: [
        { name: 'Nuxt3', description: '最新のフレームワークによる高速な開発' },
        { name: 'TypeScript', description: '型安全な開発環境の構築' },
        { name: 'TailwindCSS', description: '効率的なスタイリング' },
        { name: 'Cloudflare Pages', description: '高速なホスティングサービス' }
      ]
    },
    {
      id: 2,
      title: 'オンラインピラティスLP（架空）',
      description: 'HTMLとSCSS、JavaScriptのシンプルな仕様',
      image: '/images/work2.jpg',
      tags: ['HTML', 'SCSS', 'JavaScript'],
      process: [
        'ニーズ分析と設計',
        'フロントエンド実装',
        'フォームの実装・テスト'
      ],
      technologies: [
        { name: 'Vite', description: '開発効率を重視したフレームワークを利用し、静的サイトとして納品' },
        { name: 'Cloudflare Pages', description: '高速なホスティングサービス' }
      ]
    },
    {
      id: 3,
      title: '不動産会社コーポレートサイト（架空）',
      description: 'HTMLとSCSS、JavaScriptのシンプルな仕様',
      image: '/images/work3.svg',
      tags: ['HTML', 'SCSS', 'JavaScript'],
      process: [
        'ニーズ分析と設計',
        'フロントエンド実装',
        'フォームの実装・テスト'
      ],
      technologies: [
        { name: 'Vite', description: '開発効率を重視したフレームワークを利用し、静的サイトとして納品' },
        { name: 'Cloudflare Pages', description: '高速なホスティングサービス' }
      ]
    },
    {
      id: 4,
      title: 'Coming Soon',
      description: '準備中',
      image: '/images/work4.svg',
      tags: ['HTML', 'SCSS', 'JavaScript'],
      process: [
        'ニーズ分析と設計',
        'フロントエンド実装',
        'フォームの実装・テスト'
      ],
      technologies: [
        { name: 'Vite', description: '開発効率を重視したフレームワークを利用し、静的サイトとして納品' },
        { name: 'Cloudflare Pages', description: '高速なホスティングサービス' }
      ]
    },
    {
      id: 5,
      title: 'Coming Soon',
      description: '準備中',
      image: '/images/work5.svg',
      tags: ['HTML', 'SCSS', 'JavaScript'],
      process: [
        'ニーズ分析と設計',
        'フロントエンド実装',
        'フォームの実装・テスト'
      ],
      technologies: [
        { name: 'Vite', description: '開発効率を重視したフレームワークを利用し、静的サイトとして納品' },
        { name: 'Cloudflare Pages', description: '高速なホスティングサービス' }
      ]
    },
    {
      id: 6,
      title: 'Coming Soon',
      description: '準備中',
      image: '/images/work5.svg',
      tags: ['Astro', 'SCSS'],
      process: [
        'ニーズ分析と設計',
        'フロントエンド実装',
        'フォームの実装・テスト'
      ],
      technologies: [
        { name: 'Astro', description: '静的ビルドに優れたパフォーマンス性の高いフレームワーク' },
        { name: 'Cloudflare Pages', description: '高速なホスティングサービス' }
      ]
    }
  ])

  const getWorkById = (id: number): Work | undefined => {
    return works.value.find(work => work.id === id)
  }

  return {
    works,
    getWorkById
  }
}