import '@/app/ui/global.css';
import * as stylex from '@stylexjs/stylex';
import { fonts } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Lusitana:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body {...stylex.props(fonts.interFont)}>{children}</body>
    </html>
  );
}
