export const useWorks = () => {
  const works = ref([
    {
      id: 1,
      title: 'コーポレートサイトリニューアル',
      description: 'Nuxt3とTailwindCSSを使用した大規模リニューアル',
      image: '/images/work1.jpg',
      tags: ['Nuxt3', 'Vue.js', 'TailwindCSS'],
      url: 'https://example.com',
      duration: '2ヶ月',
      role: 'フロントエンド開発'
    },
    // 他の作品データ
  ])

  return {
    works
  }
}