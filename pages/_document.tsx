import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Plausible Analytics script */}
        <script
          async
          defer
          data-domain="regnovaai-frontend-git-c8ee04-rajeev-ranjans-projects-572f1b56.vercel.app"  // use the exact domain from your Plausible project
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
