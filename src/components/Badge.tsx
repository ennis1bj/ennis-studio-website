interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline';
}

export default function Badge({ children, variant = 'default' }: BadgeProps) {
  const base = 'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide';

  const variants: Record<string, string> = {
    default: 'bg-indigo-50 text-indigo-700',
    accent: 'bg-indigo-600 text-white',
    outline: 'border border-slate-300 text-slate-600',
  };

  return <span className={`${base} ${variants[variant]}`}>{children}</span>;
}
