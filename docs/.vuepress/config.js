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
      // { t    ext: '블로그', link: 'https://zzsza.github.io'}
    ],
    sidebarDepth:2,

    sidebar: [
      "guide.md",
      {
        title: '1. 실습 환경 구축하기',
        collapsable: false,
        children: [
            '/1.사전준비/requirement.md',
            '/1.사전준비/사전 파이썬 공부하기.md',
        ]
      },
         {
        title: '2. 협업의 필수 Git, 실무 위주로 익혀보기',
        collapsable: false,
        children: [
            {
                title: 'Git 기초 돌아보기',
                collapsable: false,
                children: [
                    '/11.git/Git의 기본 - 작업 공간.md',
                    '/11.git/Git의 기본 - 브랜치.md',
                ]
            },
            {
                title: '상황별 Git 다루는 법',
                collapsable: false,
                children: [
                    '/11.git/상황별 Git 사용하기 - 1. log&reflog.md',
                    '/11.git/상황별 Git 사용하기 - 2. reset.md',
                    '/11.git/상황별 Git 사용하기 - 6. stash.md',
                    '/11.git/상황별 Git 사용하기 - 3. revert.md',
                    '/11.git/상황별 Git 사용하기 - 4. rebase-interactive.md',
                    '/11.git/상황별 Git 사용하기 - 5. merge.md',
                    '/11.git/상황별 Git 사용하기 - 7. cherrypick.md',
                ]
            },
            '/11.git/실전 Conflict 다루기.md',
            '/11.git/전략적으로 git 사용하기 - Gitflow.md',
        ]
      },
      {
        title: '3. 깔끔한 코드를 위하여! 클린코드',
        collapsable: false,
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
        title: '4. 코드로 알아보는 객체 지향 프로그래밍',
        collapsable: false,
        children: [
            '/3.object-oriented/1. 프로그래밍 패러다임 흐름 파악하기 - 절차지향.md',
            '/3.object-oriented/2. 프로그래밍 패러다임 흐름 파악하기 - 객체지향.md',
            '/3.object-oriented/3. 프로그래밍 패러다임 흐름 파악하기 - 함수형.md',
            '/3.object-oriented/4. 객체 지향 기본적인 개념들 짚고 가기.md',
            '/3.object-oriented/5. 코드로 알아보는 객체 지향의 특성.md',
            '/3.object-oriented/6. 의존성 응집도 결합도.md',
        ]
      },
      {
        title: '5. (실습) 리팩토링을 통해 객체 지향 알아보기',
        collapsable: false,
        children: [
            '/4.object-oriented-refactoring/리팩토링전코드.md',
        ]
      },
      {
        title: '6. 객체 지향 설계를 위한 SOLID 원칙',
        collapsable: false,
        children: [
            '/5.object-oriented-solid/SOLID - Single Reponsibility.md',
            '/5.object-oriented-solid/SOLID - Open Closed.md',
            '/5.object-oriented-solid/SOLID - Liskov Substitution.md',
            '/5.object-oriented-solid/SOLID - Interface Segregation.md',
            '/5.object-oriented-solid/SOLID - Dependency Inversion.md',
        ]
      },
      {
        title: '7. 견고한 서비스를 위한 테스트 코드 작성하기',
        collapsable: false,
        children: [
            '/6.test-code/테스트 기본 이해하기.md',
            '/6.test-code/종류별 테스트 작성하기.md',
            '/6.test-code/의존성을 대체하는 테스트 더블.md',
            '/6.test-code/TDD 기본 개념 익히기.md',
        ]
      },
      {
        title: '8. (실습) 프로젝트에 테스트 적용하기',
        collapsable: false,
        children: [
            '/7. test적용/개요.md',
        ]
      },
      {
        title: '9. 더 나은 설계를 위한 아키텍처 이해하기',
        collapsable: false,
        children: [
            '/8.architecture/아키텍처를 시작하기 전에.md',
            '/8.architecture/대표적인 아키텍처들 알아보기 - 레이어드 아키텍처.md',
            '/8.architecture/대표적인 아키텍처들 알아보기 - 헥사고날.md',
            '/8.architecture/대표적인 아키텍처들 알아보기 - 클린 아키텍처.md',
            '/8.architecture/클린 아키텍처 - 구현하기.md',
            '/8.architecture/모놀리스와 마이크로서비스.md',
        ]
      },
        {
            title: '10. (실습) 프로젝트에 아키텍처 적용하기',
            collapsable: false,
            children: [
                '/9. architecture 적용/개요.md',
                '/9. architecture 적용/생각해봐야 할 것.md'
            ]
        },
        {
        type: 'group',
        title: '11. 회사에서 공부하면 좋을 개발 지식들',
        collapsable: false,
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
            {
				title: '1.효율적으로 프로그램 운영하기',
				collapsable: false,
				children: [
				    '/10.basic-knowledge/1.효율적으로 프로그램 운영하기/프로세스와 스레드 기본.md',
                    '/10.basic-knowledge/1.효율적으로 프로그램 운영하기/병렬성과 동시성.md',
				    '/10.basic-knowledge/1.효율적으로 프로그램 운영하기/멀티스레드와 멀티프로세스.md',
                    '/10.basic-knowledge/1.효율적으로 프로그램 운영하기/동기와 비동기, 블락과 논블락.md',
				]
			},
            {
                title: '2.쉽고 빠르게 프로그램 배포하기',
				collapsable: false,
				children: [
				    '/10.basic-knowledge/2.쉽고 빠르게 프로그램 배포하기/가상화기술과 도커.md',
				    '/10.basic-knowledge/2.쉽고 빠르게 프로그램 배포하기/배포와 CI&CD.md',
				]
            },
            {
                title: '3. 서비스 구현의 핵심, 회원가입과 로그인 이해하기',
				collapsable: false,
				children: [
				    '/10.basic-knowledge/3.로그인과 회원가입의 기본/세션과 쿠키.md',
                    '/10.basic-knowledge/3.로그인과 회원가입의 기본/사용자 인증.md',
				]
            },
            {
                title: '4. 추가',
				collapsable: false,
				children: [
				    '/10.basic-knowledge/4.추가/OSI 7계층과 TCP_IP 4계층 모델.md',
				    '/10.basic-knowledge/4.추가/우리 회사는 어떻게 웹 서비스를 운영할까.md',
				]
            },
        ]
      },
    ]
  }
}