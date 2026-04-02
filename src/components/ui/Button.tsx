import React from 'react';
import { cn } from '../../utils/cn';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  withArrow?: boolean;
  href?: string;
  as?: 'button' | 'a';
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', withArrow, href, as = 'button', children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center gap-2 overflow-hidden px-6 py-3 font-mono text-sm font-medium tracking-tight transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]";
    
    const variants = {
      primary: "bg-text-primary text-background hover:bg-white/90",
      secondary: "bg-surface border border-border text-text-primary hover:bg-surface-hover hover:border-gray-600",
      ghost: "text-text-secondary hover:text-text-primary hover:bg-surface/50"
    };

    const content = (
      <>
        {children}
        {withArrow && <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
      </>
    );

    if (as === 'a' && href) {
      return (
        <a
          href={href}
          className={cn(baseStyles, variants[variant], "group", className)}
          target={href.startsWith('http') ? "_blank" : undefined}
          rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
          ref={ref as any}
          {...(props as any)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], "group", className)}
        ref={ref as any}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
