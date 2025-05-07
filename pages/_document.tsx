import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Only one Plausible script with correct domain */}
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

