import Document, {Head, Main, NextDocumentContext, NextScript} from "next/document";
import React from "react";
import {ServerStyleSheet} from "styled-components";

export default class MyDocument extends Document {
  public static async getInitialProps({renderPage, req}: NextDocumentContext) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return {
      ...page,
      styleTags,
    };
  }

  public render() {
    const {styleTags} = this.props;
    return (
      <html>
      <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        {styleTags}
      </Head>
      <body className="custom_class">
      <Main />
      <NextScript />
      </body>
      </html>
    );
  }
}
