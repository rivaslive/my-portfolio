export const DataExperiences = (t: any) => [
  {
    key: 'scotiabank',
    time: t('experiences.experience1.date', '06/2022 - Actualmente'),
    brand: 'Scotiabank Costa Rica',
    image: '/experience/scotiabank.webp',
    tasks: ['code improvement', 'Reactjs', 'Nodejs'],
    description: t(
      'experiences.experience1.description',
      'Desarrollador React, Creando y mejorando productos internos de banca online utilizando Reactjs y Nodejs.'
    )
  },
  {
    key: 'focus-ito',
    time: t('experiences.experience2.date', '03/2022 - 05/2022'),
    brand: 'Focus ITO El Salvador',
    image: '/experience/focus.webp',
    tasks: ['Typescript', 'Nextjs', 'Nodejs', 'Maps', 'e-commerce'],
    description: t(
      'experiences.experience2.description',
      'Desarrollador FullStack, procesos y flujos de trabajo.'
    )
  },
  {
    key: 'brandy',
    time: t('experiences.experience3.date', '03/2021 - 03/2022'),
    brand: 'Brandy Costa Rica',
    image: '/experience/brandy.webp',
    tasks: [
      'Typescript',
      'Nextjs',
      'Nodejs',
      'Strapi',
      'Keystonejs',
      'Storybook'
    ],
    description: t(
      'experiences.experience3.description',
      'Desarrollador React, Creando y mejorando productos internos y para clientes utilizando Neactjs y Nodejs. procesos y flujo de trabajo'
    )
  }
];
