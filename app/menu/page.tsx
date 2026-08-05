'use client';

import { useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X, Flame, UtensilsCrossed, Sandwich, Salad, Egg, CakeSlice, GlassWater } from 'lucide-react';
import { MenuCard } from '@/components/shared/menu-card';
import { CategoryButton } from '@/components/shared/category-button';
import { menuItems, categories } from '@/lib/data';
import type { CategoryId } from '@/lib/types';

const iconMap: Record<string, React.ReactNode> = {
  Flame: <Flame className="h-4 w-4" />,
  UtensilsCrossed: <UtensilsCrossed className="h-4 w-4" />,
  Sandwich: <Sandwich className="h-4 w-4" />,
  Salad: <Salad className="h-4 w-4" />,
  Egg: <Egg className="h-4 w-4" />,
  CakeSlice: <CakeSlice className="h-4 w-4" />,
  GlassWater: <GlassWater className="h-4 w-4" />,
};

type Filter = 'all' | CategoryId;

export default function MenuPage() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [sort, setSort] = useState<'popular' | 'price-low' | 'price-high' | 'rating'>('popular');

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: menuItems.length };
    for (const cat of categories) {
      map[cat.id] = menuItems.filter((i) => i.category === cat.id).length;
    }
    return map;
  }, []);

  const filtered = useMemo(() => {
    let result = menuItems;
    if (filter !== 'all') {
      result = result.filter((i) => i.category === filter);
    }
    if (query.trim()) {
      const q = query.toLowerCase().trim();
      result = result.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          i.ingredients.some((ing) => ing.toLowerCase().includes(q))
      );
    }
    const sorted = [...result];
    switch (sort) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sorted.sort((a, b) => Number(b.popular) - Number(a.popular));
    }
    return sorted;
  }, [filter, query, sort]);

  const activeCategory = categories.find((c) => c.id === filter);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Header */}
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Our Menu
        </p>
        <h1 className="mt-2 font-display text-4xl font-bold text-foreground sm:text-5xl">
          Everything we brew &amp; bake
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Search by name or ingredient, filter by category, and sort to find
          your next favourite. Prices in Ethiopian Birr.
        </p>
      </div>

      {/* Search + sort */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search doro wot, burger, salad…"
            className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-10 text-sm shadow-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="relative">
          <SlidersHorizontal className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="h-12 w-full appearance-none rounded-full border border-border bg-card pl-11 pr-9 text-sm font-medium shadow-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-auto"
          >
            <option value="popular">Most popular</option>
            <option value="rating">Highest rated</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Category filters */}
      <div className="mt-6 -mx-4 overflow-x-auto px-4 no-scrollbar mask-fade-r">
        <div className="flex gap-2.5 pb-1">
          <CategoryButton
            label="All"
            icon={<UtensilsCrossed className="h-4 w-4" />}
            active={filter === 'all'}
            onClick={() => setFilter('all')}
            count={counts.all}
          />
          {categories.map((cat) => (
            <CategoryButton
              key={cat.id}
              label={cat.label}
              icon={iconMap[cat.icon]}
              active={filter === cat.id}
              onClick={() => setFilter(cat.id)}
              count={counts[cat.id]}
            />
          ))}
        </div>
      </div>

      {/* Active category description */}
      {activeCategory && (
        <p className="mt-4 text-sm text-muted-foreground">
          {activeCategory.description} · {filtered.length}{' '}
          {filtered.length === 1 ? 'item' : 'items'}
        </p>
      )}
      {!activeCategory && (
        <p className="mt-4 text-sm text-muted-foreground">
          Showing all {filtered.length} items
        </p>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <div
              key={item.id}
              className="animate-fade-up"
              style={{ animationDelay: `${Math.min(i * 0.05, 0.4)}s` }}
            >
              <MenuCard item={item} priority={i < 6} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
            <Search className="h-7 w-7 text-muted-foreground" />
          </div>
          <h3 className="mt-4 font-display text-xl font-bold text-foreground">
            No matches found
          </h3>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            {query
              ? `Nothing matches "${query}". Try a different search or category.`
              : 'No items in this category yet.'}
          </p>
          <button
            onClick={() => {
              setQuery('');
              setFilter('all');
            }}
            className="mt-4 text-sm font-medium text-primary hover:underline"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
