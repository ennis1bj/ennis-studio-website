import { Link } from 'react-router-dom';

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  'aria-label'?: string;
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-navy-900 text-white hover:bg-navy-800 shadow-sm',
    secondary:
      'bg-white text-navy-900 border border-navy-200 hover:border-gold-400 hover:text-gold-700 shadow-sm',
    ghost: 'text-navy-700 hover:bg-navy-50 hover:text-navy-900',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
