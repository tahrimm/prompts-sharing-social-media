import "@styles/globals.css";
import { Suspense } from 'react'
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "PromptPulse",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          <Suspense>{children}</Suspense>
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
