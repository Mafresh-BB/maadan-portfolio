import { cn } from '../../utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono tracking-tight",
        "border border-border text-text-secondary bg-surface/50",
        className
      )}
    >
      {children}
    </span>
  );
}
