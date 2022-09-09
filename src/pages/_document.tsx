import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const metaInfo = {
  url: 'https://kevin-rivas.com',
  author: 'Kevin Rivas',
  description:
    'Soy Kevin Rivas ingeniero en Sistemas y Computación lo que me ha llevado a poder resolver problemas de la manera más eficiente, soy un programador enfocado 100% en JavaScript/TypeScript por lo que manejo el entorno full-stack Servidor y Cliente, usando Nodejs, Reactjs y React Native.',
  imgs: {
    shared: 'https://kevin-rivas.com/shared.png',
    favicon: '/favicon.ico',
    favicon16: '/favicon-16x16.png',
    favicon32: '/favicon-32x32.png',
    favicon192: '/android-chrome-192x192.png',
    favicon512: '/android-chrome-512x512.png',
    faviconApple: '/apple-touch-icon.png',
  }
};

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

          {/* default preferences */}
          <meta name="author" content={metaInfo.author} />
          <meta property="title" content={metaInfo.author} />
          <meta property="type" content="profile" />
          <meta property="site_name" content={metaInfo.author} />
          <meta
            property="description"
            content={metaInfo.description}
          />
          <meta title="image" content={metaInfo.imgs.shared} />

          {/* Open Graph preferences */}
          <meta name="og:author" content={metaInfo.author} />
          <meta property="og:type" content="profile" />
          <meta property="og:site_name" content={metaInfo.author} />
          <meta property="og:url" content={metaInfo.url} />
          <meta property="og:title" content={metaInfo.author} />
          <meta
            property="og:image"
            content={metaInfo.imgs.shared}
          />
          <meta
            property="og:description"
            content={metaInfo.description}
          />

          {/* Twitter */}
          <meta name="twitter:author" content={metaInfo.author} />
          <meta property="twitter:type" content="profile" />
          <meta property="twitter:site_name" content={metaInfo.author} />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={metaInfo.url} />
          <meta property="twitter:title" content={metaInfo.author} />
          <meta
            property="twitter:description"
            content={metaInfo.description}
          />
          <meta
            property="twitter:image"
            content={metaInfo.imgs.shared}
          />

          {/* Dropdown rendering engine order  */}
          <meta name="renderer" content="webkit|ie-comp|ie-stand" />

          {/* links canonical */}
          <link rel="canonical" href={metaInfo.url} />
          <link
            rel="alternate"
            type="application/json+oembed"
            href={metaInfo.url}
          />

          <link
            rel="apple-touch-icon-precomposed"
            sizes="128x128"
            href={metaInfo.imgs.faviconApple}
          />
          <link
            rel="icon"
            type="image/png"
            href={metaInfo.imgs.favicon192}
            sizes="128x128"
          />
          <link
            rel="icon"
            type="image/png"
            href={metaInfo.imgs.favicon192}
            sizes="192x192"
          />
          <link
            rel="icon"
            href={metaInfo.imgs.favicon}
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
