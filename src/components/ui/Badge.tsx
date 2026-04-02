import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'outline' | 'solid';
}

export function Badge({ children, className, variant = 'outline' }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono tracking-tight",
        variant === 'outline' && "border border-border text-text-secondary bg-surface/50",
        variant === 'solid' && "bg-text-primary text-background font-medium",
        className
      )}
    >
      {children}
    </span>
  );
}
