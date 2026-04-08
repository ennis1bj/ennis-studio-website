import { Shield, ArrowRightLeft, LayoutTemplate, Brain } from 'lucide-react';
import type { PortfolioProduct } from '../config/products';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  ArrowRightLeft,
  LayoutTemplate,
  Brain,
};

const colorMap: Record<string, { bg: string; text: string }> = {
  emerald: { bg: 'bg-emerald-100', text: 'text-emerald-700' },
  sky: { bg: 'bg-sky-100', text: 'text-sky-700' },
  violet: { bg: 'bg-violet-100', text: 'text-violet-700' },
  indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700' },
};

interface ProductIconProps {
  product: PortfolioProduct;
  size?: 'sm' | 'md' | 'lg';
}

export default function ProductIcon({ product, size = 'md' }: ProductIconProps) {
  const Icon = iconMap[product.icon];
  const colors = colorMap[product.brandColor] ?? { bg: 'bg-slate-100', text: 'text-slate-700' };

  if (!Icon) return null;

  const sizeClasses = {
    sm: { wrapper: 'h-9 w-9 rounded-lg', icon: 'h-4 w-4' },
    md: { wrapper: 'h-11 w-11 rounded-xl', icon: 'h-5 w-5' },
    lg: { wrapper: 'h-14 w-14 rounded-xl', icon: 'h-7 w-7' },
  };

  const s = sizeClasses[size];

  return (
    <div className={`flex items-center justify-center ${s.wrapper} ${colors.bg}`}>
      <Icon className={`${s.icon} ${colors.text}`} />
    </div>
  );
}
