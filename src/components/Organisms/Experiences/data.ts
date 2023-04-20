export const DataExperiences = (t: any) => [
  {
    key: 'membrane',
    time: t('experiences.experience0.date', '10/2022 - Actualmente'),
    brand: 'Sr. Frontend Developer en Membranelabs',
    image: '/experience/membrane.svg',
    tasks: [
      'Análisis de entregas en próximos sprints.',
      'Integración de Features definidos en los sprints con Reactjs, Nodejs y Webpack.',
      'Resolución de Bugs en Staging y Production.',
      'Revisión y análisis de código.'
    ],
    description: t(
      'experiences.experience0.description',
      'Membranelabs es un administrador de portfolio financiero dirigido a Web3.'
    )
  },
  {
    key: 'scotiabank',
    time: t('experiences.experience1.date', '06/2022 - 11/2022'),
    brand: 'Sr. FullStack Developer en Scotiabank Costa Rica',
    image: '/experience/scotiabank.webp',
    tasks: [
      'Análisis de entregas en próximos sprints.',
      'Integración de Features definidos en los sprints con Reactjs, Nodejs y Webpack.',
      'Resolución de Bugs en Staging y Production.',
      'Unit Testing / Integration Testing con Enzyme, Chai, sinnon y nock.',
      'Despliegues y automatizaciones con Sonnar, Fortify y Blackduck.',
      'Revisión y análisis de código en Bitbucket.'
    ],
    description: t(
      'experiences.experience1.description',
      'Creando y mejorando productos internos de banca online utilizando Reactjs, Webpack y Nodejs.'
    )
  },
  {
    key: 'focus-ito',
    time: t('experiences.experience2.date', '03/2022 - 05/2022'),
    brand: 'Sr. FullStack Software Developer en FOCUS ITO El Salvador',
    image: '/experience/focus.webp',
    tasks: [
      'Analista de Stack Tecnológico de los proyectos.',
      'Revisión de código en Gitlab y Bitbucket.',
      'Training a otros desarrolladores Juniors.',
      'Configuración de proyectos con Nextjs, Typescript, Styled-components, Mapbox y Tailwind Css',
      'Resolución de bugs.',
      'Creación de microservicios y proyectos Monolíticos con Nodejs, Redis, Prisma y Express.'
    ],
    description: t(
      'experiences.experience2.description',
      'Desarrollo de software, procesos, mentoria y flujos de trabajo.'
    )
  },
  {
    key: 'brandy',
    time: t('experiences.experience3.date', '03/2021 - 03/2022'),
    brand: 'Sr. Frontend Developer en Brandy Costa Rica',
    image: '/experience/brandy.webp',
    tasks: [
      'Configuración de proyectos con Nextjs, Typescript, Styled-components, Ant Design y Storybook.',
      'Configuración e integración de headless como Strapi o Keystonejs.',
      'Integración en Nextjs de Graphql',
      'Revisión de código.',
      'Asignación de tareas a otros desarrolladores.',
      'Charlas semanales de Buenas prácticas y clean code.',
      'Implementación de políticas de SSR',
      'Análisis de desarrollo de software.'
    ],
    description: t(
      'experiences.experience3.description',
      'Creando y mejorando productos software para empresas de Marketing.'
    )
  }
];
