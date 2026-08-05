export type CategoryId =
  | 'starters'
  | 'mains'
  | 'burgers'
  | 'salads'
  | 'breakfast'
  | 'desserts'
  | 'drinks';

export interface Category {
  id: CategoryId;
  label: string;
  description: string;
  icon: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: CategoryId;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  popular: boolean;
  ingredients: string[];
  prepTime: string;
  calories: number;
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  role: string;
}
