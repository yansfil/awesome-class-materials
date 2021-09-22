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
    sidebarDepth:2,

    sidebar: [
      "guide.md",
      {
        type: 'group',
        title: '1. 회사에서 공부하면 좋을 개발 지식들',
        collapsable: true,
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
            {
				title: '1.효율적으로 프로그램 운영하기',
				collapsable: false,
				children: [
				    '/1.basic-knowledge/1.효율적으로 프로그램 운영하기/프로세스와 스레드 기본.md',
                    '/1.basic-knowledge/1.효율적으로 프로그램 운영하기/병렬성과 동시성.md',
				    '/1.basic-knowledge/1.효율적으로 프로그램 운영하기/멀티스레드와 멀티프로세스.md',
                    '/1.basic-knowledge/1.효율적으로 프로그램 운영하기/동기와 비동기, 블락과 논블락.md',
				]
			},
            {
                title: '2.쉽고 빠르게 프로그램 배포하기',
				collapsable: false,
				children: [
				    '/1.basic-knowledge/2.쉽고 빠르게 프로그램 배포하기/가상화기술과 도커.md',
				    '/1.basic-knowledge/2.쉽고 빠르게 프로그램 배포하기/배포와 CI&CD.md',
				]
            },
            {
                title: '서비스에 로그인 기능 추가하기',
				collapsable: false,
				children: [
				    '/1.basic-knowledge/3.로그인과 회원가입의 기본/세션과 쿠키.md',
                    '/1.basic-knowledge/3.로그인과 회원가입의 기본/인증과 인가.md',
				]
            },
          '/1.basic-knowledge/OSI 7계층과 TCP_IP 4계층 모델.md',
          '/1.basic-knowledge/모놀리스와 마이크로서비스.md',
        ]
      },
      {
        title: '2. 깔끔한 코드를 위하여! 클린코드',
        collapsable: true,
        children: [
            '/2.clean-code/1. 네이밍.md',
            '/2.clean-code/2. 주석, 포맷팅.md',
            '/2.clean-code/3. 함수.md',
            '/2.clean-code/4. 클래스.md',
            '/2.clean-code/5. 에러핸들링.md',
            '/2.clean-code/6. 가드클라우징.md',
        ]
      },
      {
        title: '3. 협업의 필수 Git, 실무 위주로 익혀보기',
        collapsable: true,
        children: [
          '/3.git/Git의 4가지 작업공간.md',
          '/3.git/브랜치로 협업하기.md',
          '/3.git/상황별 Git 사용하기 - 1. log&reflog.md',
          '/3.git/상황별 Git 사용하기 - 2. reset.md',
          '/3.git/상황별 Git 사용하기 - 3. stash.md',
          '/3.git/상황별 Git 사용하기 - 4. revert.md',
          '/3.git/상황별 Git 사용하기 - 5. cherrypick.md',
          '/3.git/상황별 Git 사용하기 - 6. rebase-interactive.md',
          '/3.git/상황별 Git 사용하기 - 7. merge.md',
          '/3.git/전략적으로 git 사용하기 - Gitflow.md',
        ]
      },
      {
        title: '4. 코드로 알아보는 객체 지향 프로그래밍',
        collapsable: true,
        children: [
            '/4.object-oriented/프로그래밍 패러다임 변천사.md',
            '/4.object-oriented/객체 지향 기본적인 개념들 짚고 가기.md',
            '/4.object-oriented/실습으로 알아보는 객체 지향의 특성.md'
        ]
      },
      {
        title: '5. 객체 지향 설계를 위한 SOLID 원칙',
        collapsable: true,
        children: [
            '/5.object-oriented-solid/SOLID - Single Reponsibility.md',
            '/5.object-oriented-solid/SOLID - Open Closed.md',
            '/5.object-oriented-solid/SOLID - Liskov Substitution.md',
            '/5.object-oriented-solid/SOLID - Interface Segregation.md',
            '/5.object-oriented-solid/SOLID - Dependency Inversion.md',
        ]
      },
      {
        title: '6. 견고한 서비스를 위한 테스트 코드 작성하기',
        collapsable: true,
        children: [
            '/6.test-code/테스트 기본 이해하기.md',
            '/6.test-code/종류별 테스트 작성하기.md',
            '/6.test-code/의존성을 대체하는 테스트 더블.md',
            '/6.test-code/TDD 기본 개념 익히기.md',
        ]
      },
      {
        title: '7. 더 나은 설계를 위한 아키텍처 이해하기',
        collapsable: true,
        children: []
      },
    ]
  }
}