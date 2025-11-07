import type { Project, Section, Skill } from "../types";

export const SOFT_SKILLS: Skill[] = [
  {
    id: `${Date.now()}-work`,
    title: 'Trabajo en equipo',
    description: 'Colaboración efectiva con equipos multidisciplinarios para lograr objetivos comunes.',
    icon: 'users'
  },
  {
    id: `${Date.now()}-clean-code`,
    title: 'Código Limpio',
    description: 'Escribo código mantenible, escalable y siguiendo las mejores prácticas de la industria.',
    icon: 'code'
  },
  {
    id: `${Date.now()}-fast`,
    title: 'Entrega Rápida',
    description: 'Metodologías ágiles para entregar valor de forma continua y eficiente.',
    icon: 'rocket'
  },
];

export const PROJECTS: Project[] = [
  {
    id: `${Date.now()}-task`,
    title: 'Administrador de tareas',
    description: 'Colaboración efectiva con equipos multidisciplinarios para lograr objetivos comunes.',
    src: 'https://plus.unsplash.com/premium_vector-1682311160662-ebc15dde8ca0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880',
    tools: []
  },
  {
    id: `${Date.now()}-project-manager`,
    title: 'Administrador de proyectos',
    description: 'Escribo código mantenible, escalable y siguiendo las mejores prácticas de la industria.',
    src: 'https://images.unsplash.com/photo-1527219525722-f9767a7f2884?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1173',
    tools: []
  },
  {
    id: `${Date.now()}-wheater`,
    title: 'Aplicación del clima',
    description: 'Escribo código mantenible, escalable y siguiendo las mejores prácticas de la industria.',
    src: 'https://plus.unsplash.com/premium_photo-1720551256879-92e5b13285be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    tools: []
  },
];


export const SECTIONS: Section[] = [
  { label: 'Presentación', value: 'presentation', index: 1 },
  { label: 'Acerca de mi', value: 'about', index: 2 },
  { label: 'Mis proyectos', value: 'projects', index: 3 },
];

export const URL_GITHUB = 'https://github.com/GustavoLopez01';
export const URL_LINKEDIN = 'https://www.linkedin.com/in/gustavo-alejandro-l%C3%B3pez-zarate-ab8552255/';