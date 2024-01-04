import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Header } from '@/common/ui/header.component';
import { Footer } from '@/common/ui/footer.component';

import './global.css';

const font = localFont({
  src: './fonts/GeneralSans-Variable.woff2',
});

export const metadata: Metadata = {
  title: 'Titouan Sola - Web Developer',
  description:
    "Hello! I am Titouan Sola, Web Software Engineer. I'm engaged to make the web accessible and green, from conception to production. Feel free to contact me for any projects!",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={'dark'}>
      <body className={font.className} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
