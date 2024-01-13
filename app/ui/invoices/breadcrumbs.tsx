import { clsx } from 'clsx';
import Link from 'next/link';
import * as stylex from '@stylexjs/stylex';
import { Breakpoints } from '../breakpoints';
import { fonts } from '../fonts';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol {...stylex.props(fonts.lusitanaFont, styles.list)}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active ? 'text-gray-900' : 'text-gray-500',
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

const md: Breakpoints['md'] = '@media (min-width: 768px)';

const styles = stylex.create({
  list: {
    display: 'flex',
    fontSize: { default: '1.25rem', [md]: '1.5rem' },
    lineHeight: { default: '1.75rem', [md]: '2rem' },
  },
});
