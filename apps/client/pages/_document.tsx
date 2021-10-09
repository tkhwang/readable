import { ReactElement } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class CustomDocument extends Document<{ styleTags: ReactElement[] }> {
  static getInitialProps({ renderPage }: { renderPage: any }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html lang="en" className="text-gray-100 leading-tight">
        <Head>{this.props.styleTags}</Head>
        <body className="min-h-screen bg-customGray">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
