
export type Skill = {
  id: string
  title: string
  description: string
  icon: string
}

export type Project = Omit<Skill, 'icon'> & {
  tools: string[],
  src: string
  repositoryUrl: string
}

export type Section = {
  label: string
  value: string
  index: number
}

export type Language = 'es' | 'en';