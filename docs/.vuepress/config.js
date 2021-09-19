module.exports = {
  title: '초급 개발자의 성장을 위한 핵심 개발 클래스 강의자료',
  description: '초급 개발자의 성장을 위한 핵심 개발 클래스의 강의자료입니다.',
  base: '/awesome-class-materials/',
  theme: '@vuepress/theme-default',
  head: [
    ['link', { rel: 'icon', href: 'https://user-images.githubusercontent.com/18207755/125201572-bdb4ea00-e2aa-11eb-9666-281603bea447.png' }],    
  ],

  plugins: {
    // '@vuepress/google-analytics': {
	// 		ga: 'UA-110573232-1',
	// 	},
    '@vuepress/back-to-top': {},
    '@mr-hope/feed': {},
    '@vuepress/last-updated': {
      buttonStaticIcon: Boolean,
      buttonIconTitle: String,
      buttonAlign: String,
      buttonColor: String
    },
    '@xiaopanda/vuepress-plugin-code-copy': {},
    'flexsearch-pro': {
        searchHotkeys: ['s'],    
        searchResultLength: 90, 
    },
    "sitemap": {
      hostname: "https://yansfil.github.io/awesome-class-materials/"
    }
	},

  themeConfig: {
    logo: 'https://user-images.githubusercontent.com/18207755/125201572-bdb4ea00-e2aa-11eb-9666-281603bea447.png',
    nav: [
      { text: 'Home', link: '/' },
      // { text: '🔥 온라인 강의(준비 중)', link: 'https://www.inflearn.com/'},
      // { text: '블로그', link: 'https://zzsza.github.io'}
    ],

    sidebar: [
      '/guide',
      {
        title: '회사에서 공부하면 좋을 개발 지식들',
        collapsable: true,
        children: [
          '/1.basic-knowledge/OSI 7계층과 TCP_IP 4계층 모델.md',
          '/1.basic-knowledge/동기와 비동기, 블락과 논블락.md',
          '/1.basic-knowledge/모놀리스와 마이크로서비스.md',
          '/1.basic-knowledge/배포와 CI_CD.md',
          '/1.basic-knowledge/병렬성과 동시성.md',
          '/1.basic-knowledge/인증과 인가.md',
        ]
      },
      {
        title: '깔끔한 코드를 위하여! 클린코드',
        collapsable: true,
        children: [
          '/1.basic-knowledge/OSI 7계층과 TCP_IP 4계층 모델.md',
          '/1.basic-knowledge/동기와 비동기, 블락과 논블락.md',
          '/1.basic-knowledge/모놀리스와 마이크로서비스.md',
          '/1.basic-knowledge/배포와 CI_CD.md',
          '/1.basic-knowledge/병렬성과 동시성.md',
          '/1.basic-knowledge/인증과 인가.md',
        ]
      }
    ]
  }
}