import { revalidatePath } from 'next/cache';
import CardWrapper, { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import * as stylex from '@stylexjs/stylex';
import { Breakpoints } from '@/app/ui/breakpoints';
import { fonts } from '@/app/ui/fonts';
import { fetchCardData, fetchLatestInvoices } from '@/app/lib/data';
import { twSizes } from '../../ui/tw.stylex';
import { Suspense } from 'react';
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
  RevenueChartSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <main>
      <h1 {...stylex.props(fonts.lusitanaFont, styles.title)}>Dashboard</h1>
      <div {...stylex.props(styles.customers)}>
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div {...stylex.props(styles.revenue)}>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}

const sm: Breakpoints['sm'] = '@media (min-width: 640px)';
const md: Breakpoints['md'] = '@media (min-width: 768px)';
const lg: Breakpoints['lg'] = '@media (min-width: 1024px)';

const styles = stylex.create({
  title: {
    fontSize: { default: '1.25rem', [md]: '1.5rem' },
    lineHeight: { default: '1.75rem', [md]: '2rem' },
    marginBottom: twSizes['4'],
  },
  customers: {
    display: 'grid',
    gridTemplateColumns: {
      default: null,
      [sm]: 'repeat(2, minmax(0, 1fr))',
      [lg]: 'repeat(4, minmax(0, 1fr))',
    },
    gap: twSizes['6'],
  },
  revenue: {
    display: 'grid',
    gridTemplateColumns: {
      default: 'repeat(1, minmax(0, 1fr))',
      [md]: 'repeat(4, minmax(0, 1fr))',
      [lg]: 'repeat(8, minmax(0, 1fr))',
    },
    marginTop: twSizes['6'],
    gap: twSizes['6'],
  },
});
