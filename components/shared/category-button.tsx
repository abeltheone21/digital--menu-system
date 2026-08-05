'use client';

import { cn } from '@/lib/utils';
import type { CategoryId } from '@/lib/types';

interface CategoryButtonProps {
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
  count?: number;
}

export function CategoryButton({
  label,
  icon,
  active,
  onClick,
  count,
}: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'group flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200',
        active
          ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20'
          : 'border-border bg-card text-foreground/70 hover:border-primary/40 hover:bg-secondary hover:text-foreground'
      )}
    >
      <span
        className={cn(
          'transition-colors',
          active ? 'text-primary-foreground' : 'text-muted-foreground group-hover:text-primary'
        )}
      >
        {icon}
      </span>
      {label}
      {count !== undefined && (
        <span
          className={cn(
            'rounded-full px-1.5 py-0.5 text-xs font-semibold tabular-nums',
            active
              ? 'bg-primary-foreground/20 text-primary-foreground'
              : 'bg-muted text-muted-foreground'
          )}
        >
          {count}
        </span>
      )}
    </button>
  );
}

export type { CategoryId };
