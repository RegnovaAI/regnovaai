import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            defer
            data-domain="www.regnovaai.com, regnovaai-frontend-git-c8ee04-rajeev-ranjans-projects-572f1b56.vercel.app, regnovaai-frontend-omhv-noxjh21dq.vercel.app"
            src="https://plausible.io/js/script.js"
          ></script>
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
