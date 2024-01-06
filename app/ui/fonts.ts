// import { Inter, Lusitana } from 'next/font/google';

// export const inter = Inter({ subsets: ['latin'] });

// export const lusitana = Lusitana({
//   weight: ['400', '700'],
//   subsets: ['latin'],
// });

import * as stylex from '@stylexjs/stylex';

export const fonts = stylex.create({
  interFont: {
    fontFamily: "'Inter', sans-serif",
  },
  lusitanaFont: {
    fontFamily: "'Lusitana', serif",
  },
});
