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
      privacyPolicy: "개인정보처리방침",
      termsOfService: "이용약관",
    },
    // 언어 전환
    language: {
      toggle: "English",
    },
    // Privacy Policy
    privacyPolicy: {
      title: "개인정보처리방침",
      lastUpdated: "최종 업데이트: 2025년 6월",
      introduction: {
        title: "소개",
        content: "1-Coin-Bot('우리', '봇', '서비스')은 사용자의 개인정보 보호를 최우선으로 생각합니다. 본 개인정보처리방침은 우리가 수집하는 정보, 사용 방법, 그리고 사용자의 권리에 대해 설명합니다.",
      },
      riotDisclaimer: {
        title: "Riot Games 면책조항",
        content: "1-Coin-Bot은 Riot Games의 공식 제품이 아니며, Riot Games 또는 League of Legends 제작에 관련된 누구에 의해서도 보증되지 않습니다. Riot Games 및 모든 관련 속성은 Riot Games, Inc.의 상표 또는 등록상표입니다.",
      },
      dataCollection: {
        title: "수집하는 정보",
        items: [
          "Discord 사용자 ID 및 서버 정보",
          "Riot Games 계정명 (소환사명)",
          "게임 랭크 및 티어 정보",
          "매치 히스토리 (팀 밸런싱 목적)",
          "사용 통계 및 오류 로그"
        ],
      },
      dataUsage: {
        title: "정보 사용 목적",
        items: [
          "커스텀 게임의 팀 밸런싱 알고리즘 운영",
          "서비스 개선 및 버그 수정",
          "사용자 지원 제공",
          "남용 방지 및 보안 유지"
        ],
      },
      dataSharing: {
        title: "정보 공유",
        content: "우리는 사용자의 개인정보를 제3자에게 판매하거나 임대하지 않습니다. 다음의 경우에만 정보를 공유할 수 있습니다:",
        items: [
          "법적 요구사항 준수",
          "사용자의 명시적 동의",
          "서비스 제공을 위한 필수적인 경우"
        ],
      },
      dataRetention: {
        title: "정보 보관",
        content: "사용자 데이터는 서비스 제공에 필요한 기간 동안만 보관됩니다. 사용자가 서비스 사용을 중단하거나 삭제를 요청하는 경우, 관련 법령에서 요구하는 경우를 제외하고 즉시 삭제됩니다.",
      },
      userRights: {
        title: "사용자 권리",
        content: "사용자는 다음의 권리를 가집니다:",
        items: [
          "개인정보 열람 요구권",
          "개인정보 정정·삭제 요구권",
          "개인정보 처리정지 요구권",
          "개인정보 처리 거부권"
        ],
      },
      contact: {
        title: "문의하기",
        content: "개인정보처리방침에 대한 문의사항이 있으시면 Discord 서버를 통해 연락주시기 바랍니다.",
      },
      changes: {
        title: "정책 변경",
        content: "본 개인정보처리방침은 관련 법령이나 서비스 변경에 따라 수정될 수 있습니다. 중요한 변경사항이 있을 경우 Discord 서버를 통해 공지하겠습니다.",
      },
    },
    // Terms of Service
    termsOfService: {
      title: "이용약관",
      lastUpdated: "최종 업데이트: 2025년 6월",
      introduction: {
        title: "서비스 이용약관",
        content: "1-Coin-Bot('우리', '봇', '서비스') 이용약관에 오신 것을 환영합니다. 본 약관은 서비스 이용 시 적용되는 규칙과 조건을 설명합니다.",
      },
      riotDisclaimer: {
        title: "Riot Games 면책조항",
        content: "1-Coin-Bot은 Riot Games의 공식 제품이 아니며, Riot Games 또는 League of Legends 제작에 관련된 누구에 의해서도 보증되지 않습니다. Riot Games 및 모든 관련 속성은 Riot Games, Inc.의 상표 또는 등록상표입니다.",
      },
      serviceDescription: {
        title: "서비스 설명",
        content: "1-Coin-Bot은 League of Legends 커스텀 게임에서 공정하고 균형잡힌 팀을 자동으로 구성해주는 Discord 봇입니다. Riot Games API를 사용하여 플레이어의 랭크 정보를 수집하고 분석합니다.",
      },
      userResponsibilities: {
        title: "사용자 책임",
        items: [
          "정확한 소환사명 제공",
          "서비스의 적절한 사용",
          "다른 사용자에 대한 존중",
          "Discord 및 Riot Games 이용약관 준수"
        ],
      },
      serviceAvailability: {
        title: "서비스 가용성",
        content: "우리는 서비스의 지속적인 가용성을 위해 노력하지만, 기술적 문제, 유지보수, 또는 Riot Games API 변경으로 인한 일시적 중단이 발생할 수 있습니다.",
      },
      dataUsage: {
        title: "데이터 사용",
        content: "서비스 이용 시 Riot Games API를 통해 수집된 게임 데이터는 오직 팀 밸런싱 목적으로만 사용됩니다. 자세한 내용은 개인정보처리방침을 참조하시기 바랍니다.",
      },
      prohibitedUse: {
        title: "금지된 사용",
        items: [
          "서비스의 남용 또는 오용",
          "다른 사용자 방해 행위",
          "부정확한 정보 제공",
          "시스템 해킹 또는 침입 시도"
        ],
      },
      liability: {
        title: "책임 제한",
        content: "1-Coin-Bot은 서비스 사용으로 인한 직접적, 간접적, 부수적 손해에 대해 책임지지 않습니다. 서비스는 '있는 그대로' 제공됩니다.",
      },
      termination: {
        title: "서비스 종료",
        content: "우리는 사용자가 이용약관을 위반하거나 서비스를 남용하는 경우 사전 통지 없이 서비스 이용을 제한하거나 중단할 수 있습니다.",
      },
      changes: {
        title: "약관 변경",
        content: "본 이용약관은 서비스 개선이나 법적 요구사항에 따라 변경될 수 있습니다. 중요한 변경사항이 있을 경우 Discord 서버를 통해 공지하겠습니다.",
      },
      contact: {
        title: "문의하기",
        content: "이용약관에 대한 문의사항이 있으시면 Discord 서버를 통해 연락주시기 바랍니다.",
      },
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
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
    },
    // Language toggle
    language: {
      toggle: "한국어",
    },
    // Privacy Policy
    privacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: June 2025",
      introduction: {
        title: "Introduction",
        content: "1-Coin-Bot ('we', 'bot', 'service') prioritizes the protection of your personal information. This Privacy Policy explains what information we collect, how we use it, and your rights.",
      },
      riotDisclaimer: {
        title: "Riot Games Disclaimer",
        content: "1-Coin-Bot is not endorsed by Riot Games and does not reflect the views or opinions of anyone involved in the production or management of Riot Games or League of Legends. Riot Games and all associated properties are trademarks or registered trademarks of Riot Games, Inc.",
      },
      dataCollection: {
        title: "Information We Collect",
        items: [
          "Discord user ID and server information",
          "Riot Games account name (Summoner name)",
          "Game rank and tier information",
          "Match history (for team balancing purposes)",
          "Usage statistics and error logs"
        ],
      },
      dataUsage: {
        title: "How We Use Information",
        items: [
          "Operating team balancing algorithms for custom games",
          "Improving services and fixing bugs",
          "Providing user support",
          "Preventing abuse and maintaining security"
        ],
      },
      dataSharing: {
        title: "Information Sharing",
        content: "We do not sell or rent your personal information to third parties. We may share information only in the following cases:",
        items: [
          "Legal compliance requirements",
          "With your explicit consent",
          "When essential for service provision"
        ],
      },
      dataRetention: {
        title: "Data Retention",
        content: "User data is retained only for the period necessary to provide the service. When users stop using the service or request deletion, data is immediately deleted except as required by applicable laws.",
      },
      userRights: {
        title: "Your Rights",
        content: "You have the following rights:",
        items: [
          "Right to access personal information",
          "Right to correct or delete personal information",
          "Right to stop personal information processing",
          "Right to refuse personal information processing"
        ],
      },
      contact: {
        title: "Contact Us",
        content: "If you have any questions about this Privacy Policy, please contact us through our Discord server.",
      },
      changes: {
        title: "Policy Changes",
        content: "This Privacy Policy may be updated due to changes in applicable laws or services. We will notify important changes through our Discord server.",
      },
    },
    // Terms of Service
    termsOfService: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: June 2025",
      introduction: {
        title: "Terms of Service",
        content: "Welcome to 1-Coin-Bot ('we', 'bot', 'service') Terms of Service. These terms describe the rules and conditions that apply when using our service.",
      },
      riotDisclaimer: {
        title: "Riot Games Disclaimer",
        content: "1-Coin-Bot is not endorsed by Riot Games and does not reflect the views or opinions of anyone involved in the production or management of Riot Games or League of Legends. Riot Games and all associated properties are trademarks or registered trademarks of Riot Games, Inc.",
      },
      serviceDescription: {
        title: "Service Description",
        content: "1-Coin-Bot is a Discord bot that automatically creates fair and balanced teams for League of Legends custom games. We use the Riot Games API to collect and analyze player rank information.",
      },
      userResponsibilities: {
        title: "User Responsibilities",
        items: [
          "Providing accurate summoner names",
          "Appropriate use of the service",
          "Respecting other users",
          "Complying with Discord and Riot Games Terms of Service"
        ],
      },
      serviceAvailability: {
        title: "Service Availability",
        content: "We strive for continuous service availability, but temporary interruptions may occur due to technical issues, maintenance, or changes to the Riot Games API.",
      },
      dataUsage: {
        title: "Data Usage",
        content: "Game data collected through the Riot Games API when using the service is used solely for team balancing purposes. Please refer to our Privacy Policy for detailed information.",
      },
      prohibitedUse: {
        title: "Prohibited Use",
        items: [
          "Abuse or misuse of the service",
          "Interfering with other users",
          "Providing inaccurate information",
          "Attempting to hack or intrude into systems"
        ],
      },
      liability: {
        title: "Limitation of Liability",
        content: "1-Coin-Bot is not responsible for direct, indirect, or incidental damages resulting from service use. The service is provided 'as is'.",
      },
      termination: {
        title: "Service Termination",
        content: "We may restrict or terminate service access without prior notice if users violate the Terms of Service or abuse the service.",
      },
      changes: {
        title: "Terms Changes",
        content: "These Terms of Service may change due to service improvements or legal requirements. We will notify important changes through our Discord server.",
      },
      contact: {
        title: "Contact Us",
        content: "If you have any questions about these Terms of Service, please contact us through our Discord server.",
      },
    },
  },
}

export type Language = keyof typeof translations
export type TranslationKeys = typeof translations.ko
