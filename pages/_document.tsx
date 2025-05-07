// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ✅ Plausible Analytics Script */}
        <script
          async
          defer
          data-domain="regnovaai.com"
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
