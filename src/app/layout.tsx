import type { Metadata } from 'next';
import './globals.css';
import StyledComponentsRegistry from '@/lib/registry';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Hufting',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/src/app/favicon.ico" />
      </Head>
      <body className="m-0 p-0">
        <div className=" top-0 bottom-0 right-0 left-0 fixed ">
          <div className=" h-full w-full max-h-full flex justify-center bg-slate-500">
            <div className=" bg-white max-w-[390px] w-full h-full overflow-y-auto overflow-x-hidden ">
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
