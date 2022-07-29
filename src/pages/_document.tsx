import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      // Step 2: Retrieve styles from components in the page
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ) as any
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
          />

          {/* default preferences */}
          <meta name="author" content="Kevin Rivas" />
          <meta property="title" content="Kevin Rivas" />
          <meta property="type" content="profile" />
          <meta property="site_name" content="Kevin Rivas" />
          <meta
            property="description"
            content="Soy Kevin Rivas ingeniero en Sistemas y Computación lo que me ha llevado a poder resolver problemas de la manera más eficiente, soy un programador enfocado 100% en JavaScript/TypeScript por lo que manejo el entorno full-stack Servidor y Cliente, usando Nodejs, Reactjs y React Native."
          />
          <meta title="image" content="https://kevin-rivas.com/shared.png" />

          {/* Open Graph preferences */}
          <meta name="og:author" content="Kevin Rivas" />
          <meta property="og:type" content="profile" />
          <meta property="og:site_name" content="Kevin Rivas" />
          <meta property="og:url" content="https://kevin-rivas.com" />
          <meta property="og:title" content="Kevin Rivas" />
          <meta property="og:image" content="https://kevin-rivas.com/shared.png" />
          <meta
            property="og:description"
            content="Soy Kevin Rivas ingeniero en Sistemas y Computación lo que me ha llevado a poder resolver problemas de la manera más eficiente, soy un programador enfocado 100% en JavaScript/TypeScript por lo que manejo el entorno full-stack Servidor y Cliente, usando Nodejs, Reactjs y React Native."
          />

          {/* Twitter */}
          <meta name="twitter:author" content="Kevin Rivas" />
          <meta property="twitter:type" content="profile" />
          <meta property="twitter:site_name" content="Kevin Rivas" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://kevin-rivas.com"
          />
          <meta property="twitter:title" content="Kevin Rivas" />
          <meta
            property="twitter:description"
            content="Soy Kevin Rivas ingeniero en Sistemas y Computación lo que me ha llevado a poder resolver problemas de la manera más eficiente, soy un programador enfocado 100% en JavaScript/TypeScript por lo que manejo el entorno full-stack Servidor y Cliente, usando Nodejs, Reactjs y React Native."
          />
          <meta property="twitter:image" content="https://kevin-rivas.com/shared.png" />

          {/* Dropdown rendering engine order  */}
          <meta name="renderer" content="webkit|ie-comp|ie-stand" />

          <meta name="msapplication-TileImage" content="/favicon.png" />

          {/* links canonical */}
          <link rel="canonical" href="https://kevin-rivas.com" />
          <link rel="alternate" type="application/json+oembed" href="https://kevin-rivas.com" />

          <link
            rel="apple-touch-icon-precomposed"
            sizes="128x128"
            href="/favicon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon.png"
            sizes="128x128"
          />
          <link
            rel="icon"
            href="https://kevin-rivas.com/favicon.png"
            type="image/png"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
