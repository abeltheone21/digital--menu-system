import { notFound } from 'next/navigation';
import { FoodDetails } from '@/components/shared/food-details';
import { getItemById, menuItems } from '@/lib/data';

export function generateStaticParams() {
  return menuItems.map((item) => ({ id: item.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const item = getItemById(params.id);
  if (!item) return { title: 'Item not found · ADado restaurant' };
  return {
    title: `${item.name} ·Dado restaurant`,
    description: item.description,
  };
}

export default function FoodDetailsPage({ params }: { params: { id: string } }) {
  const item = getItemById(params.id);
  if (!item) notFound();
  return <FoodDetails item={item} />;
}
