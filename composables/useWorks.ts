export const useWorks = () => {
  const works = ref([
    {
      title: 'コーポレートサイトリニューアル',
      description: 'Nuxt3とTailwindCSSを使用した大規模リニューアル',
      image: '/images/work1.jpg',
      tags: ['Nuxt3', 'Vue.js', 'TailwindCSS']
    },
    {
      title: 'ECサイト構築',
      description: 'Shopifyを使ったオンラインストアの構築',
      image: '/images/work2.jpg',
      tags: ['Shopify', 'API', 'React']
    },
    {
      title: 'モバイルアプリ開発',
      description: 'React Nativeを使用したクロスプラットフォームアプリ',
      image: '/images/work3.jpg',
      tags: ['React Native', 'Mobile', 'JavaScript']
    }
  ])

  return {
    works
  }
}