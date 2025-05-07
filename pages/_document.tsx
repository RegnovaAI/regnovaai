// pages/_document.tsx

import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* ✅ Plausible Analytics Script */}
          <script
            async
            defer
            data-domain="regnovaai-frontend-git-c8ee04-rajeev-ranjans-projects-572f1b56.vercel.app"
            src="https://plausible.io/js/plausible.js"
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
