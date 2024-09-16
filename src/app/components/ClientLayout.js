'use client'; // Mark this file as a Client Component

import { useEffect } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function ClientLayout({ children }) {
  useEffect(() => {
    // Dynamically create the chatbot script
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.defer = true;
    script.setAttribute('chatbotId', 'G3jDp_gnJbDt4zPXH50pq');
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);

    // Clean up the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.embeddedChatbotConfig = {
                chatbotId: "G3jDp_gnJbDt4zPXH50pq",
                domain: "www.chatbase.co"
              };
            `,
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </>
  );
}
