import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import * as stylex from '@stylexjs/stylex';
import { twSizes } from '../tw.stylex';
import { fonts } from '../fonts';
import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const {
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();
  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
  const Icon = iconMap[type];

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.titleBar)}>
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p {...stylex.props(fonts.lusitanaFont, styles.p)}>{value}</p>
    </div>
  );
}

const styles = stylex.create({
  container: {
    borderRadius: '0.75rem',
    backgroundColor: 'rgba(249, 250, 251, 1)',
    padding: twSizes['2'],
    filter: 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))',
  },
  titleBar: {
    display: 'flex',
    padding: twSizes['4'],
  },
  p: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    borderRadius: '0.75rem',
    background: 'rgba(255, 255, 255, 1)',
    paddingLeft: twSizes['4'],
    paddingRight: twSizes['4'],
    paddingTop: twSizes['8'],
    paddingBottom: twSizes['8'],
    textAlign: 'center',
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },
});
