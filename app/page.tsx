import Link from 'next/link';
import Image from 'next/image';
import * as stylex from '@stylexjs/stylex';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { fonts } from './ui/fonts';
// import { lusitana } from './ui/fonts';

const styles = stylex.create({
  shape: {
    height: '0',
    width: '0',
    borderStyle: 'solid',
    borderBottomWidth: '30px',
    borderBottomColor: 'black',
    borderLeftWidth: '20px',
    borderLeftColor: 'transparent',
    borderRightWidth: '20px',
    borderRightColor: 'transparent',
  },
  title: {
    fontSize: {
      default: '1.25rem',
      '@media (min-width: 768px)': '1.875rem',
    },
    lineHeight: {
      default: '1.75rem',
      '@media (min-width: 768px)': '2.25rem',
    },
    color: 'rgb(31 41 55 / 1)',
    margin: '0',
  },
  desktopHero: {
    display: {
      default: 'none',
      '@media (min-width: 768px)': 'block',
    },
  },
  mobileHero: {
    display: {
      default: 'block',
      '@media (min-width: 768px)': 'none',
    },
  },
});

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div {...stylex.props(styles.shape)} />
          <p {...stylex.props(fonts.lusitanaFont, styles.title)}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            alt="Screenshots of the dashboard project showing desktop version"
            {...stylex.props(styles.desktopHero)}
          />
          <Image
            src="/hero-mobile.png"
            width={506}
            height={620}
            alt="Screenshots of the dashboard project showing mobile version"
            {...stylex.props(styles.mobileHero)}
          />
        </div>
      </div>
    </main>
  );
}
