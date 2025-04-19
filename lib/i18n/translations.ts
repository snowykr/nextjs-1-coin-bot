// 모든 텍스트에 대한 번역 데이터
export const translations = {
  ko: {
    // 네비게이션
    nav: {
      features: "기능",
      howItWorks: "작동 방식",
      privacy: "개인정보",
    },
    // 히어로 섹션
    hero: {
      title: "커스텀 게임을 위한 완벽한 팀 밸런싱",
      description:
        "1-Coin-Bot은 친구들과의 커스텀 게임에서 공정하고 균형 잡힌 팀을 자동으로 구성해주는 Discord 봇입니다.",
      inviteButton: "봇 초대하기",
      learnMoreButton: "더 알아보기",
    },
    // 기능 섹션
    features: {
      title: "주요 기능",
      description: "1-Coin-Bot이 제공하는 핵심 기능들을 살펴보세요",
      teamBalancing: {
        title: "자동 팀 밸런싱",
        description:
          "플레이어의 티어(다이아몬드, 플래티넘, 에메랄드 등)를 기반으로 균형 잡힌 두 팀을 자동으로 구성하고, 포지션별로 적절히 배치합니다.",
      },
      customGameManagement: {
        title: "커스텀 게임 관리",
        description: "10명의 플레이어를 위한 내전을 쉽게 구성하고 관리할 수 있습니다.",
      },
      privacy: {
        title: "개인정보 보호",
        description: "플레이어의 데이터는 커뮤니티 내에서만 사용되며, 외부로 공유되지 않습니다.",
      },
    },
    // 작동 방식 섹션
    howItWorks: {
      title: "작동 방식",
      description: "1-Coin-Bot이 어떻게 Riot API를 활용하여 팀 밸런싱을 수행하는지 알아보세요",
      step1: {
        label: "1단계",
        title: "플레이어 정보 수집",
        description:
          "Riot API를 통해 Account API, Summoner API, League API를 활용하여 플레이어의 PUUID, 소환사 정보, 티어, 디비전, LP 데이터를 수집합니다.",
      },
      step2: {
        label: "2단계",
        title: "밸런싱 알고리즘",
        description:
          "수집된 데이터를 기반으로 밸런싱 알고리즘이 두 팀의 전체 실력 수준이 비슷하도록 플레이어를 분배합니다.",
      },
      step3: {
        label: "3단계",
        title: "팀 구성 결과 제공",
        description:
          "Discord 채널에 균형 잡힌 두 팀의 구성을 자동으로 알려주어 즉시 게임을 시작할 수 있도록 합니다. 각 플레이어의 포지션과 티어 정보가 표시되며, 블루팀과 레드팀의 전체적인 밸런스를 확인할 수 있습니다.",
      },
    },
    // 개인정보 보호 섹션
    privacy: {
      title: "개인정보 보호",
      description: "1-Coin-Bot은 사용자의 개인정보 보호를 최우선으로 생각합니다",
      dataUsage: {
        title: "데이터 수집 및 사용",
        points:
          "1-Coin-Bot은 동의한 커뮤니티 멤버의 게임 랭크 정보만 수집합니다.,수집된 데이터는 팀 밸런싱 목적으로만 사용되며 외부로 공유되지 않습니다.,모든 데이터는 적절히 캐싱되어 불필요한 API 호출을 최소화합니다.,Riot API의 요청 제한을 엄격히 준수하여 효율적으로 API를 활용합니다.",
      },
    },
    // 푸터
    footer: {
      description: "커스텀 게임을 위한 완벽한 팀 밸런싱 Discord 봇",
      links: "링크",
      legalNotice: "법적 고지",
      legalText:
        "1-Coin-Bot은 Riot Games의 공식 제품이 아니며, Riot Games 또는 League of Legends 제작에 관련된 누구에 의해서도 보증되지 않습니다.",
      copyright: "© 2024 1-Coin-Bot. All rights reserved.",
    },
    // 언어 전환
    language: {
      toggle: "English",
    },
  },
  en: {
    // Navigation
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      privacy: "Privacy",
    },
    // Hero section
    hero: {
      title: "Perfect Team Balancing for Custom Games",
      description:
        "1-Coin-Bot is a Discord bot that automatically creates fair and balanced teams for custom games with your friends.",
      inviteButton: "Invite Bot",
      learnMoreButton: "Learn More",
    },
    // Features section
    features: {
      title: "Key Features",
      description: "Explore the core features that 1-Coin-Bot offers",
      teamBalancing: {
        title: "Automatic Team Balancing",
        description:
          "Automatically creates balanced teams based on players' tiers (Diamond, Platinum, Emerald, etc.) and assigns appropriate positions.",
      },
      customGameManagement: {
        title: "Custom Game Management",
        description: 'Easily organize and manage "ten mans" games for 10 players.',
      },
      privacy: {
        title: "Privacy Protection",
        description: "Player data is only used within the community and never shared externally.",
      },
    },
    // How It Works section
    howItWorks: {
      title: "How It Works",
      description: "Learn how 1-Coin-Bot uses the Riot API to perform team balancing",
      step1: {
        label: "Step 1",
        title: "Player Information Collection",
        description:
          "Collects player PUUID, summoner information, tier, division, and LP data using the Riot Account API, Summoner API, and League API.",
      },
      step2: {
        label: "Step 2",
        title: "Balancing Algorithm",
        description:
          "The balancing algorithm distributes players between two teams to ensure similar overall skill levels.",
      },
      step3: {
        label: "Step 3",
        title: "Team Composition Results",
        description:
          "Automatically displays balanced team compositions in the Discord channel, allowing you to start the game immediately. Each player's position and tier information is shown, and you can check the overall balance between the blue and red teams.",
      },
    },
    // Privacy section
    privacy: {
      title: "Privacy Protection",
      description: "1-Coin-Bot prioritizes user privacy",
      dataUsage: {
        title: "Data Collection and Usage",
        points:
          "1-Coin-Bot only collects game rank information from community members who have given consent.,Collected data is used solely for team balancing purposes and is not shared externally.,All data is appropriately cached to minimize unnecessary API calls.,Strictly adheres to Riot API rate limits for efficient API utilization.",
      },
    },
    // Footer
    footer: {
      description: "Perfect team balancing Discord bot for custom games",
      links: "Links",
      legalNotice: "Legal Notice",
      legalText:
        "1-Coin-Bot is not endorsed by Riot Games and does not reflect the views or opinions of anyone involved in the production or management of Riot Games or League of Legends.",
      copyright: "© 2024 1-Coin-Bot. All rights reserved.",
    },
    // Language toggle
    language: {
      toggle: "한국어",
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKeys = typeof translations.ko
