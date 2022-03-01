import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css?family=Work Sans"
          rel="stylesheet"
        />
        <Head />
        <body>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
