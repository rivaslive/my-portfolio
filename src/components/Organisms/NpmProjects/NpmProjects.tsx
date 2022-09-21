import Title from 'components/Atoms/Title';
import Image from 'components/Atoms/Image';
import Text from 'components/Atoms/Text';

import { StyleNpm, StyleNpmWrapper, StyleNpmContent } from './style';

const NpmProjects = (props: BaseComponent) => {
  return (
    <StyleNpmWrapper {...props}>
      <Title>
        Mis Paquetes{' '}
        <Title margin="0 5px" htmlTag="span" color="npmGradient">
          NPM
        </Title>
      </Title>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.beauty-design.app"
      >
        <StyleNpm>
          <Image src="/npm.svg" width="125px" height="100px" alt="npm" />
          <StyleNpmContent>
            <Text fontWeight={800} fontSize="1.2rem">
              react-native-beauty-design
            </Text>
            <Text>
              La mejor libreria de componentes UI para React Native. Con 26
              componentes y menos de 200kb
            </Text>
          </StyleNpmContent>
        </StyleNpm>
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.npmjs.com/package/create-rivas-react"
      >
        <StyleNpm>
          <Image src="/npm.svg" width="125px" height="100px" alt="npm" />
          <StyleNpmContent>
            <Text fontWeight={800} fontSize="1.2rem">
              create-rivas-react
            </Text>
            <Text>
              Es un boilerplate para crear proyectos reactjs o nextjs, con sus
              diferentes constructores como: Nextjs, Vitejs y CRA, todos estos
              proyectos implementan una arquitectura Atomic Design junto con una
              cantidad considerable de Atoms preconstruidos que tienden a ser
              super utilizados como Título, Texto, Botón, Contenedor,
              Row, etc... Todo proyecto generado desde create-rivas-react
              puede ser con Javascript o Typescript tu eliges.
            </Text>
            <Text
              htmlTag="code"
              fontWeight={800}
              margin="20px 0 0"
              style={{ display: 'block' }}
            >
              npx create-rivas-react
            </Text>
          </StyleNpmContent>
        </StyleNpm>
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.npmjs.com/package/rivas-cli"
      >
        <StyleNpm>
          <Image src="/npm.svg" width="125px" height="100px" alt="npm" />
          <StyleNpmContent>
            <Text fontWeight={800} fontSize="1.2rem">
              rivas-cli
            </Text>
            <Text>
              Este pequeño CLI lo ayudará a crear componentes React rápidamente,
              podrá crear la siguiente estructura:
              <div style={{ marginTop: 20 }}>
                <div>• Component</div>
                <div>•••• index.ts</div>
                <div>•••• style.ts</div>
                <div>•••• Component.tsx</div>
              </div>
            </Text>

            <Text
              htmlTag="code"
              fontWeight={800}
              margin="20px 0 0"
              style={{ display: 'block' }}
            >
              npx rivas-cli MyFirstComponent --tsx
            </Text>
          </StyleNpmContent>
        </StyleNpm>
      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.npmjs.com/package/antd-notifications-messages"
      >
        <StyleNpm>
          <Image src="/npm.svg" width="125px" height="100px" alt="npm" />
          <StyleNpmContent>
            <Text fontWeight={800} fontSize="1.2rem">
              antd-notifications-messages
            </Text>
            <Text>
              Obtenga un comportamiento igual a las notificaciones y mensajes
              que se encuentran en la gran biblioteca Ant-Design, crédito por
              esta biblioteca.
            </Text>
          </StyleNpmContent>
        </StyleNpm>
      </a>
    </StyleNpmWrapper>
  );
};

export default NpmProjects;
