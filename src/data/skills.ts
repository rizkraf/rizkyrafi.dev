import {
  type IconType,
  SiAstro,
  SiBootstrap,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiVuedotjs,
  SiNuxtdotjs,
  SiTypescript,
  SiDart,
  SiCsharp,
  SiExpress,
  SiPrisma,
  SiGit,
  SiFigma,
  SiJest,
} from '@icons-pack/react-simple-icons';

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Languages',
      skills: [
        { skill: 'javascript', icon: SiJavascript },
        { skill: 'typescript', icon: SiTypescript },
        { skill: 'dart', icon: SiDart },
        { skill: 'csharp', icon: SiCsharp },
      ],
    },
    {
      field: 'Frontend',
      skills: [
        { skill: 'html', icon: SiHtml5 },
        { skill: 'css', icon: SiCss3 },
        { skill: 'sass', icon: SiSass },
        { skill: 'tailwind', icon: SiTailwindcss },
        {
          skill: 'bootstrap',
          icon: SiBootstrap,
        },
        { skill: 'vue', icon: SiVuedotjs },
        { skill: 'nuxtjs', icon: SiNuxtdotjs },
        { skill: 'react', icon: SiReact },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'astro', icon: SiAstro },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'nodejs',
          icon: SiNodedotjs,
        },
        {
          skill: 'express',
          icon: SiExpress,
        },
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'prisma',
          icon: SiPrisma,
        },
      ],
    },
    {
      field: 'Tools',
      skills: [
        {
          skill: 'git',
          icon: SiGit,
        },
        {
          skill: 'figma',
          icon: SiFigma,
        },
        {
          skill: 'jest',
          icon: SiJest,
        },
      ],
    },
  ];

export default SKILLS;
