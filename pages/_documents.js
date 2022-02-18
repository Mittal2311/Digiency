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
