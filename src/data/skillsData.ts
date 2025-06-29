export type Category = 'Frontend' | 'Backend' | 'Environment'

export type CardData = {
  title: string
  description: string
  imgSrc: string
  category: Category
}

export const cards: CardData[] = [
  {
    title: 'React',
    description: '2개 프로젝트 경험',
    imgSrc: '/public/reacticon.png',
    category: 'Frontend',
  },
  {
    title: 'Vue',
    description: '3개 프로젝트 경험',
    imgSrc: '/public/vueicon.png',
    category: 'Frontend',
  },
  {
    title: 'JavaScript',
    description: '애니메이션 제작',
    imgSrc: '/public/JavaScripticon.png',
    category: 'Frontend',
  },
  {
    title: 'Tailwind CSS',
    description: '디자인 시스템 구축',
    imgSrc: '/public/tailwindcssicon.png',
    category: 'Frontend',
  },
  {
    title: 'Figma',
    description: '애니메이션 제작',
    imgSrc: '/public/figmaicon.png',
    category: 'Frontend',
  },
  {
    title: 'VScode',
    description: '애니메이션 제작',
    imgSrc: '/public/vscodeicon.png',
    category: 'Frontend',
  },
  {
    title: 'Java',
    description: '애니메이션 제작',
    imgSrc: '/public/javaicon.png',
    category: 'Backend',
  },
  {
    title: 'spring boot',
    description: '예시',
    imgSrc: '/public/spring-booticon.png',
    category: 'Backend',
  },
  {
    title: 'Oracle SQL',
    description: 'SQL 입문',
    imgSrc: '/public/oracleicon.png',
    category: 'Backend',
  },
  {
    title: 'intellij IDEA',
    description: '애니메이션 제작',
    imgSrc: '/public/intellijIDEAicon.png',
    category: 'Backend',
  },
  {
    title: 'ERD Cloud',
    description: '애니메이션 제작',
    imgSrc: '/public/ERDcloudicon.png',
    category: 'Backend',
  },
  {
    title: 'GitHub',
    description: '애니메이션 제작',
    imgSrc: '/public/githubicon.png',
    category: 'Environment',
  },
  {
    title: 'Notion',
    description: '애니메이션 제작',
    imgSrc: '/public/notionicon.png',
    category: 'Environment',
  },
  {
    title: 'Figma',
    description: '애니메이션 제작',
    imgSrc: '/public/figmaicon.png',
    category: 'Environment',
  },
  {
    title: 'Claude',
    description: '애니메이션 제작',
    imgSrc: '/public/claude-icon.png',
    category: 'Environment',
  },
  {
    title: 'chatGPT',
    description: '애니메이션 제작',
    imgSrc: '/public/chatGPTicon.png',
    category: 'Environment',
  },
]