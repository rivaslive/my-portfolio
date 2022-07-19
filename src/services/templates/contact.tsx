import * as ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import ContactTemplate, {
  ContactTemplateType
} from 'components/Template/ContactTemplate';

const sheet = new ServerStyleSheet();

export default function contact(props: ContactTemplateType) {
  const template = ReactDOMServer.renderToString(
    sheet.collectStyles(<ContactTemplate {...props} />)
  );

  try {
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();

    return `
        <html>
        <head>
          <title>Template</title>
          ${styleTags}
        </head>
        <body>
         ${template}
        </body>
    `;
  } catch (error) {
    // handle error
    console.log('====== Error the generate template ======');
    console.error(error);
    console.log('====== End Log ======');
    return template;
  } finally {
    sheet.seal();
  }
}
