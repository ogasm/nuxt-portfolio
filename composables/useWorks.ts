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
      title: 'コーポレートサイトリニューアル',
      description: 'Nuxt3とTailwindCSSを使用した大規模リニューアル',
      image: '/images/work1.jpg',
      tags: ['Nuxt3', 'Vue.js', 'TailwindCSS'],
      process: [
        'ニーズ分析と設計',
        'プロトタイプの作成',
        'フロントエンドとバックエンドの整合性確認',
        'テストとデプロイ'
      ],
      technologies: [
        { name: 'Nuxt.js', description: 'SSRによる高速な表示とSEO対策' },
        { name: 'Vue.js', description: 'インタラクティブなUI実装' },
        { name: 'Tailwind CSS', description: 'モダンで保守性の高いスタイリング' },
        { name: 'Firebase', description: 'バックエンドサービスとホスティング' }
      ]
    },
    {
      id: 2,
      title: 'ECサイト構築',
      description: 'Shopifyを使ったオンラインストアの構築',
      image: '/images/work2.jpg',
      tags: ['Shopify', 'API', 'React'],
      process: [
        '要件定義とシステム設計',
        'データベース設計',
        'フロントエンド開発',
        '決済システム統合',
        'セキュリティテスト'
      ],
      technologies: [
        { name: 'Next.js', description: 'パフォーマンスとSEOを考慮したフレームワーク' },
        { name: 'Stripe', description: '安全な決済システムの実装' },
        { name: 'PostgreSQL', description: '堅牢なデータベース管理' },
        { name: 'AWS', description: 'スケーラブルなインフラ構築' }
      ]
    },
    {
      id: 3,
      title: 'モバイルアプリ開発',
      description: 'React Nativeを使用したクロスプラットフォームアプリ',
      image: '/images/work3.jpg',
      tags: ['React Native', 'Mobile', 'JavaScript'],
      process: [
        'デザイン設計',
        'コンポーネント設計',
        'アニメーション実装',
        'パフォーマンス最適化',
        'デプロイ設定'
      ],
      technologies: [
        { name: 'Nuxt3', description: '最新のフレームワークによる高速な開発' },
        { name: 'TypeScript', description: '型安全な開発環境の構築' },
        { name: 'TailwindCSS', description: '効率的なスタイリング' },
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