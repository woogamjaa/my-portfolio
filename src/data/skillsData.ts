export type Category = 'Frontend' | 'Backend' | 'Environment'

export type CardData = {
  title: string
  description: number
  imgSrc: string
  category: Category
}

export const cards: CardData[] = [
  {
    title: 'React',
    description: 40,
    imgSrc: '/reacticon.png',
    category: 'Frontend',
  },
  {
    title: 'Vue',
    description: 30,
    imgSrc: '/vueicon.png',
    category: 'Frontend',
  },
  {
    title: 'JavaScript',
    description: 30,
    imgSrc: '/JavaScripticon.png',
    category: 'Frontend',
  },
  {
    title: 'Tailwind CSS',
    description: 40,
    imgSrc: '/tailwindcssicon.png',
    category: 'Frontend',
  },
  {
    title: 'TypeScript',
    description: 20,
    imgSrc: '/TypeScripticon.png',
    category: 'Frontend',
  },
  {
    title: 'VScode',
    description: 30,
    imgSrc: '/vscodeicon.png',
    category: 'Frontend',
  },
  {
    title: 'Java',
    description: 40,
    imgSrc: '/javaicon.png',
    category: 'Backend',
  },
  {
    title: 'spring boot',
    description: 20,
    imgSrc: '/public/spring-booticon.png',
    category: 'Backend',
  },
  {
    title: 'Oracle SQL',
    description: 20,
    imgSrc: '/oracleicon.png',
    category: 'Backend',
  },
  {
    title: 'intellij IDEA',
    description: 20,
    imgSrc: '/intellijIDEAicon.png',
    category: 'Backend',
  },
  {
    title: 'ERD Cloud',
    description: 20,
    imgSrc: '/ERDcloudicon.png',
    category: 'Backend',
  },
  {
    title: 'GitHub',
    description: 30,
    imgSrc: '/githubicon.png',
    category: 'Environment',
  },
  {
    title: 'Notion',
    description: 50,
    imgSrc: '/notionicon.png',
    category: 'Environment',
  },
  {
    title: 'Figma',
    description: 60,
    imgSrc: '/figmaicon.png',
    category: 'Environment',
  },
  {
    title: 'Claude',
    description: 50,
    imgSrc: '/claude-icon.png',
    category: 'Environment',
  },
  {
    title: 'chatGPT',
    description: 50,
    imgSrc: '/chatGPTicon.png',
    category: 'Environment',
  },
]