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
    imgSrc: '/public/reacticon.png',
    category: 'Frontend',
  },
  {
    title: 'Vue',
    description: 30,
    imgSrc: '/public/vueicon.png',
    category: 'Frontend',
  },
  {
    title: 'JavaScript',
    description: 30,
    imgSrc: '/public/JavaScripticon.png',
    category: 'Frontend',
  },
  {
    title: 'Tailwind CSS',
    description: 40,
    imgSrc: '/public/tailwindcssicon.png',
    category: 'Frontend',
  },
  {
    title: 'TypeScript',
    description: 20,
    imgSrc: '/public/TypeScripticon.png',
    category: 'Frontend',
  },
  {
    title: 'VScode',
    description: 30,
    imgSrc: '/public/vscodeicon.png',
    category: 'Frontend',
  },
  {
    title: 'Java',
    description: 40,
    imgSrc: '/public/javaicon.png',
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
    imgSrc: '/public/oracleicon.png',
    category: 'Backend',
  },
  {
    title: 'intellij IDEA',
    description: 20,
    imgSrc: '/public/intellijIDEAicon.png',
    category: 'Backend',
  },
  {
    title: 'ERD Cloud',
    description: 20,
    imgSrc: '/public/ERDcloudicon.png',
    category: 'Backend',
  },
  {
    title: 'GitHub',
    description: 30,
    imgSrc: '/public/githubicon.png',
    category: 'Environment',
  },
  {
    title: 'Notion',
    description: 50,
    imgSrc: '/public/notionicon.png',
    category: 'Environment',
  },
  {
    title: 'Figma',
    description: 60,
    imgSrc: '/public/figmaicon.png',
    category: 'Environment',
  },
  {
    title: 'Claude',
    description: 50,
    imgSrc: '/public/claude-icon.png',
    category: 'Environment',
  },
  {
    title: 'chatGPT',
    description: 50,
    imgSrc: '/public/chatGPTicon.png',
    category: 'Environment',
  },
]