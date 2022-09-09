export default (t: any) => [
  {
    key: 'index',
    href: '/',
    label: t('navbar.home', 'Inicio')
  },
  {
    key: 'tech',
    href: '/#tech',
    label: t('navbar.technologies', 'Tecnologías')
  },
  {
    key: 'brand',
    type: 'brand'
  },
  {
    key: 'experience',
    href: '/#experience',
    label: t('navbar.experience', 'Experiencia')
  },
  {
    key: 'contact',
    href: '/#contact',
    label: t('navbar.contact', 'Contacto'),
    className: 'contact-me',
    color: 'white'
  }
];
