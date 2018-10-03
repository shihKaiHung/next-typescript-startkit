import Document, {Head, Main, NextDocumentContext, NextScript} from "next/document";
import React from "react";

export default class MyDocument extends Document {
  public static async getInitialProps(ctx: NextDocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <html>
      <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
      </Head>
      <body className="custom_class">
      <Main />
      <NextScript />
      </body>
      </html>
    );
  }
}
