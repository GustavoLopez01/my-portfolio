
export type Skill = {
  id: string
  title: string
  description: string
  icon: string
}

export type Project = Omit<Skill, 'icon'> & {
  tools: [],
  src: string
}